import "../../core/wdyr/wdyr";
import { TYPES } from "../../core/types/types";
import { GetPodcastListQry } from "../../application/queries/get-podcast-list-qry";
import { useInjection } from "../../core/ioc/ioc.react";
import { useState } from "react";
import { Entry, PodcastList } from "../../domain/podcast/podcast";
import { useQuery } from "react-query";
import Podcast from "../components/podcast/listItem/ListItem";
import InputField from "../components/filter/Filter";
import { StateManager } from "../../application/state-manager";
import React from "react";

function HomeView() {

  const getPodcastListQry = useInjection<GetPodcastListQry>(TYPES.GET_ALL_PODCAST_QRY)
  const stateManager = useInjection<StateManager>(TYPES.STATE_MANAGER)
  const [filter, setFilter] = useState('');
  const { data } = useQuery<PodcastList>({
    queryKey: ['podcastList'],
    queryFn: () => getPodcastListQry.execute(),
    staleTime: 1000 * 60 * 60 * 24, //caché for 1 day
    select: (podcastList) => { return { ...podcastList, entry: podcastList.entry.filter((entry) => entry.name.toLowerCase().includes(filter) || entry.author.toLowerCase().includes(filter)) } },
  })

  const onChangeFilter = (e: any) => {
    setFilter(e.target.value)
  };

  const onNavigatePodcast = (selected: Entry) => {
    stateManager.patch({ selected })
  };


  return <div className="home">
    <div className="filter-container">
      <InputField value={filter} results={data?.entry.length || 0} name={"filter"} placeholder={"Filter podcasts..."} type={"text"} onChange={onChangeFilter}></InputField>
    </div>

    <div className="podcast-list-container">
      {data && data.entry.map((e, i) => (
        <Podcast podcast={e} onNavigate={onNavigatePodcast} key={i} />
      ))}
    </div>

  </div>;
}

HomeView.whyDidYouRender = true

export default HomeView;
