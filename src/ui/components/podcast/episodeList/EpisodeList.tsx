import React from "react";
import { Link } from "react-router-dom";
import { PodcastEpisode } from "../../../../domain/podcast/podcast";
import './EpisodeList.css'


type Props = {
    episodes: PodcastEpisode[];
    onNavigate: (selected: PodcastEpisode) => void
};

const secondsToString = (duration: number) => {

    if (isNaN(duration)) {
        return duration
    }

    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;

    let ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;

    return ret;
}

const dateParser = (dateString: string) => {
    let milliseconds = Date.parse(dateString);
    let date = new Date(milliseconds);

    return (
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
};

const EpisodeList = (props: Props) => {

    return (
        <div className="table-container">
            <div className="table-title">
                Episodes: {props.episodes.length}
            </div>
            <div className="table-wrapper">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Duration</th>
                        </tr>
                        {props.episodes && props.episodes.map((e, i) => (
                            <tr className={i % 2 === 0 ? 'odd' : 'even'}>
                                <td><Link className="table-link" to={{
                                    pathname: `episode/${e.id}`,
                                }}
                                    onClick={() => props.onNavigate(e)}>{e.title}</Link></td>
                                <td>{dateParser(e.date)}</td>
                                <td>{secondsToString(e.duration)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default EpisodeList;