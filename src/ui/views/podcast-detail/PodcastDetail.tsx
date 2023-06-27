import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { TYPES } from "../../../core/types/types";
import { PodcastDetail } from "../../../domain/podcast/podcast";
import { GetPodcastDetailtQry } from "../../../application/queries/get-podcast-detail-qry";
import { useQuery } from "react-query";
import { useInjection } from "../../../core/ioc/ioc.react";
import './PodcastDetail.css'
import PodcastSumary from "../../components/podcast/summary/PodcastSummary";
import { StateManager } from "../../../application/state-manager";

function PodcastDetailView() {
  const { podcastId } = useParams() || '';

  const getPodcastDetailtQry = useInjection<GetPodcastDetailtQry>(TYPES.GET_PODCAST_DETAIL_QRY)
  const stateManager = useInjection<StateManager>(TYPES.STATE_MANAGER)

  const { isLoading, isError, data, error } = useQuery<PodcastDetail>('podcastDetail', () => getPodcastDetailtQry.execute(podcastId || ''),
    {
    })

  const selected = stateManager.state.selected

  return (
    <div className="podcast-detail-container">
      {data && <PodcastSumary podcastDetail={{ ...data, description: selected?.summary }} />}

      <div className="podcast-chapters-list">
        <img src={data?.artwork}></img>
      </div>

    </div>
  );
}

export default PodcastDetailView;
