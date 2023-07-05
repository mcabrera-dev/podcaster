import React from "react";
import { render, screen } from "@testing-library/react";

import EpisodeList from "./EpisodeList";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("EpisodeList", () => {
  const episodes = [
    {
      id: "1",
      title: "Episode 1",
      date: "2022-01-01",
      duration: 3600,
      content: "content",
      url: "/url",
    },
    {
      id: "2",
      title: "Episode 2",
      date: "2022-01-02",
      duration: 1800,
      content: "content",
      url: "/url",
    },
  ];

  const onNavigate = jest.fn();

  beforeEach(() => {
    render(
      <BrowserRouter>
        <EpisodeList episodes={episodes} onNavigate={onNavigate} />
      </BrowserRouter>
    );
  });

  it("should render the episode list correctly", () => {
    const tableTitle = screen.getByText("Episodes: 2");
    const tableHeaders = screen.getAllByRole("columnheader");
    const episodeLinks = screen.getAllByRole("link");

    expect(tableTitle).toBeInTheDocument();
    expect(tableHeaders).toHaveLength(3);
    expect(episodeLinks).toHaveLength(2);
    expect(episodeLinks[0].innerHTML).toEqual("Episode 1");
    expect(episodeLinks[1].innerHTML).toEqual("Episode 2");
  });

  it("should call onNavigate when an episode link is clicked", () => {
    const episodeLink = screen.getByText("Episode 1");

    episodeLink.click();
    expect(onNavigate).toHaveBeenCalledTimes(1);
    expect(onNavigate).toHaveBeenCalledWith(episodes[0]);
  });
});
