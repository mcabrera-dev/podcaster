import "../../core/wdyr/wdyr";
import { TYPES } from "../../core/types/types";
import { GetPodcastListQry } from "../../application/queries/get-podcast-list-qry";
import { useInjection } from "../../core/ioc/ioc.react";
import { useState, useEffect } from "react";
import { PodcastList } from "../../domain/podcast/podcast";
import { useQuery } from "react-query";
import Podcast from "../components/podcast/listItem/ListItem";

function HomeView() {

  const getPodcastListQry = useInjection<GetPodcastListQry>(TYPES.GET_ALL_PODCAST_QRY)

  console.log(getPodcastListQry.execute());

  const [filter, setFilter] = useState('');
  //const [error, setError] = useState(false);
  // const [data, setData] = useState<PodcastList>();

  const { isLoading, isError, data, error } = useQuery<PodcastList>('todos', () => getPodcastListQry.execute(),
    {
      select: (podcastList) => { return { ...podcastList, entry: podcastList.entry.filter((entry) => entry.name.toLowerCase().includes(filter)) } },
    })

  const onChangeFilter = (e: any) => {
    setFilter(e.target.value)
  };


  return <div className="homeContainer">HOME WORKS!

    <input
      type="text"
      placeholder="Filter podcasts..."
      name="filter"
      onChange={onChangeFilter}
      value={filter}
    />

    {data && data.entry.map(e => (
      <Podcast podcast={e} />
    ))}
  </div>;
}

HomeView.whyDidYouRender = true

export default HomeView;
