import React from "react";
import { useParams } from "react-router-dom";

function PodcastDetail() {

    const { podcastId } = useParams();

  return (
    <div className="podcastDetailContainer">
        PodcastDetail WORKS!  - podcastId: {podcastId}
    </div>
  );
}

export default PodcastDetail;