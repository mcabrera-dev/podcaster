import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { TYPES } from "../../../core/types/types";
import { PodcastDetail, PodcastEpisode } from "../../../domain/podcast/podcast";
import { GetPodcastDetailtQry } from "../../../application/queries/get-podcast-detail-qry";
import { useQuery } from "react-query";
import { useInjection } from "../../../core/ioc/ioc.react";
import './PodcastDetail.css'
import PodcastSumary from "../../components/podcast/summary/PodcastSummary";
import { StateManager } from "../../../application/state-manager";
import { GetPodcastEpisodesQry } from "../../../application/queries/get-podcast-episodes-qry";
import EpisodeList from "../../components/podcast/episodeList/EpisodeList";
import DetailsEpisode from "../../components/podcast/player/Player";

function PodcastDetailView() {
  const { podcastId } = useParams() || '';

  const getPodcastDetailtQry = useInjection<GetPodcastDetailtQry>(TYPES.GET_PODCAST_DETAIL_QRY)
  const getPodcastEpisodesQry = useInjection<GetPodcastEpisodesQry>(TYPES.GET_PODCAST_EPISODES_QRY)
  const stateManager = useInjection<StateManager>(TYPES.STATE_MANAGER)

  const { data: podcastDetail } = useQuery<PodcastDetail>({
    queryKey: ['podcastDetail', podcastId],
    queryFn: () => getPodcastDetailtQry.execute(podcastId || ''),
    staleTime: 1000 * 60 * 60 * 24, //caché for 1 day
  }
  )

  const { data: podcastEpisodes } = useQuery<PodcastEpisode[]>({
    queryKey: ['podcastEpisodes', podcastDetail?.feedUrl],
    queryFn: () => getPodcastEpisodesQry.execute(podcastDetail?.feedUrl || ''),
    staleTime: 1000 * 60 * 60 * 24, //caché for 1 day
    enabled: !!podcastDetail?.feedUrl
  })

  const selected = stateManager.state.selected

  const onNavigateEpisode = (selectedEpisode: PodcastEpisode) => {
    stateManager.patch({ selectedEpisode })
  };


  return (
    <div className="podcast-detail-container">
      {podcastDetail && <PodcastSumary podcastDetail={{ ...podcastDetail, description: selected?.summary }} />}
      <div className="podcast-chapters-list">
        <Routes>
          <Route path="/" element={podcastEpisodes && <EpisodeList episodes={podcastEpisodes} onNavigate={onNavigateEpisode}></EpisodeList>} />
          <Route path="/episode/:chapterId" element={podcastDetail && <DetailsEpisode />} />
        </Routes>
      </div>
    </div>
  );
}

export default PodcastDetailView;
