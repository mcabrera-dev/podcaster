import React from "react";
import { useParams } from "react-router-dom";

function PodcastChapterDetail() {
  const { podcastId, chapterId } = useParams();
  
  return (
    <div className="podcastDetailContainer">
        PodcastChapterDetail WORKS! - podcastId: {podcastId}, chapterID: {chapterId}
    </div>
  );
}

export default PodcastChapterDetail;