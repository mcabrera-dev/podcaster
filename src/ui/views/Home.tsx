import { TYPES } from "../../core/types/types";
import { GetPodcastListQry } from "../../application/queries/get-podcast-list-qry";
import { useInjection } from "../../core/ioc/ioc.react";

function HomeView() {
  const qry = useInjection<GetPodcastListQry>(TYPES.GET_ALL_PODCAST_QRY)

  console.log(qry.execute());
  return <div className="homeContainer">HOME WORKS!</div>;
}

export default HomeView;
