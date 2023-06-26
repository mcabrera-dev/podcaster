import "../../core/wdyr/wdyr";
import { TYPES } from "../../core/types/types";
import { GetPodcastListQry } from "../../application/queries/get-podcast-list-qry";
import { useInjection } from "../../core/ioc/ioc.react";
import { useState, useEffect, ChangeEvent } from "react";
import { PodcastList } from "../../domain/podcast/podcast";
import { useQuery } from "react-query";
import Podcast from "../components/podcast/listItem/ListItem";
import InputField from "../components/filter/Filter";

function HomeView() {

  const getPodcastListQry = useInjection<GetPodcastListQry>(TYPES.GET_ALL_PODCAST_QRY)

  const [filter, setFilter] = useState('');
  //const [error, setError] = useState(false);
  // const [data, setData] = useState<PodcastList>();

  const { isLoading, isError, data, error } = useQuery<PodcastList>('todos', () => getPodcastListQry.execute(),
    {
      select: (podcastList) => { return { ...podcastList, entry: podcastList.entry.filter((entry) => entry.name.toLowerCase().includes(filter) || entry.author.toLowerCase().includes(filter)) } },
    })

  const onChangeFilter = (e: any) => {
    setFilter(e.target.value)
  };


  return <div className="home">
    <div className="filter-container">
      <InputField value={filter} results={data?.entry.length || 0} name={"filter"} placeholder={"Filter podcasts..."} type={"text"} onChange={onChangeFilter}></InputField>
    </div>

    <div className="podcast-list-container">
      {data && data.entry.map(e => (
        <Podcast podcast={e} />
      ))}
    </div>

  </div>;
}

HomeView.whyDidYouRender = true

export default HomeView;
