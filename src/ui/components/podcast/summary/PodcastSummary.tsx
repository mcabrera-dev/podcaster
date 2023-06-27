import { PodcastDetail } from "../../../../domain/podcast/podcast";
import './PodcastSummary.css'

type Props = {
    podcastDetail: PodcastDetail
}


const PodcastSumary = (props: Props) => {

    const { podcastDetail } = props

    return (
        <div className="podcast-summary">
            <div className="artwork">
                <img className="artwork-img" src={podcastDetail?.artwork}></img>
            </div>
            <div className="podcast-summary-title">
                <h3>{podcastDetail.name}</h3>
                <span className="podcast-summary-title-span">by {podcastDetail.artistName}</span>

            </div>
            <div className="podcast-summary-description">
                <h4>Description:</h4>
                <span className="podcast-summary-description-span" dangerouslySetInnerHTML={{ __html: podcastDetail.description || 'No description' }} ></span>
            </div>

        </div>
    );
}

export default PodcastSumary;