import React from "react";
import { Link } from "react-router-dom";
import { Entry } from "../../../../domain/podcast/podcast";
import './list-item.css'


type Props = {
    podcast: Entry;
};

const Podcast = (props: Props) => (
    <Link className="card"
        to={{
            pathname: `/podcast/${props.podcast.id}`,
        }}
    >
        <div className="card-wrapper">
            <div className="image-cropper">
                <img src={props.podcast.img} className="rounded" />
            </div>
            <div className="card-content">
                <div className="card-header">{props.podcast.name}</div>
                <div className="card-meta">
                    <span>Author: {props.podcast.author}</span>
                </div>
            </div>
        </div>
    </Link>
);

export default Podcast;