import React from "react";
import { Link } from "react-router-dom";
import { Entry } from "../../../../domain/podcast/podcast";
import "./list-item.css";

type Props = {
  podcast: Entry;
  onNavigate: (selected: Entry) => void;
};

const Podcast = (props: Props) => (
  <Link
    className="card"
    to={{
      pathname: `/podcast/${props.podcast.id}`,
    }}
    onClick={() => props.onNavigate(props.podcast)}
    data-testid={`podcast-${props.podcast.id}`}
  >
    <div className="card-wrapper">
      <div className="image-cropper">
        <img alt="podcast_image" src={props.podcast.img} className="rounded" />
      </div>
      <div className="card-content">
        <div className="card-meta">
          <span>Author: {props.podcast.author}</span>
        </div>
        <div className="card-header">
          {props.podcast.name.toLocaleUpperCase()}
        </div>
      </div>
    </div>
  </Link>
);

export default Podcast;
