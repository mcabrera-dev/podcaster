import React from "react";
import { PodcastDetail } from "../../../../domain/podcast/podcast";
import "./PodcastSummary.css";
import { Link } from "react-router-dom";

type Props = {
  podcastDetail: PodcastDetail;
};

const PodcastSumary = (props: Props) => {
  const { podcastDetail } = props;

  return (
    <Link
      className="link"
      to={`/podcast/${podcastDetail.id}`}
      data-testid={`podcast-summary-${podcastDetail.id}`}
    >
      <div className="podcast-summary">
        <div className="artwork">
          <img
            alt="artwork_img"
            className="artwork-img"
            src={podcastDetail?.artwork}
          ></img>
        </div>
        <div className="podcast-summary-title">
          <h3>{podcastDetail.name}</h3>
          <span className="podcast-summary-title-span">
            by {podcastDetail.artistName}
          </span>
        </div>
        <div className="podcast-summary-description">
          <h4>Description:</h4>
          <span
            className="podcast-summary-description-span"
            dangerouslySetInnerHTML={{
              __html: podcastDetail.description || "No description",
            }}
          ></span>
        </div>
      </div>
    </Link>
  );
};

export default PodcastSumary;
