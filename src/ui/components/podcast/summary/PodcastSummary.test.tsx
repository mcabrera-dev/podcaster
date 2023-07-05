import React from "react";
import { PodcastDetail } from "../../../../domain/podcast/podcast";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PodcastSummary from "./PodcastSummary";
import "@testing-library/jest-dom";

describe("PodcastSummary", () => {
  const podcastDetail: PodcastDetail = {
    id: 1,
    name: "Podcast Name",
    artistName: "Artist Name",
    artwork: "image_url",
    description: "Podcast Description",
    feedUrl: "url",
  };

  beforeEach(() => {
    render(
      <BrowserRouter>
        <PodcastSummary podcastDetail={podcastDetail}></PodcastSummary>
      </BrowserRouter>
    );
  });

  test("renders podcast name correctly", () => {
    const podcastNameElement = screen.getByText(podcastDetail.name);
    expect(podcastNameElement).toBeInTheDocument();
  });

  test("renders artist name correctly", () => {
    const artistNameElement = screen.getByText(
      `by ${podcastDetail.artistName}`
    );
    expect(artistNameElement).toBeInTheDocument();
  });

  test("renders podcast description correctly", () => {
    const podcastDescriptionElement = screen.getByText(
      podcastDetail.description!
    );
    expect(podcastDescriptionElement).toBeInTheDocument();
  });

  test("renders default description if no description provided", () => {
    const podcastDetailWithoutDescription: PodcastDetail = {
      ...podcastDetail,
      description: undefined,
    };
    render(
      <BrowserRouter>
        <PodcastSummary
          podcastDetail={podcastDetailWithoutDescription}
        ></PodcastSummary>
      </BrowserRouter>
    );
    const defaultDescriptionElement = screen.getByText("No description");
    expect(defaultDescriptionElement).toBeInTheDocument();
  });
});
