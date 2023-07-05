import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Podcast from "./ListItem";
import "@testing-library/jest-dom";

describe("Podcast component", () => {
  const podcast = {
    id: "1",
    img: "https://example.com/image.png",
    author: "John Doe",
    name: "Podcast Name",
    summary: "summary",
  };

  const mockOnNavigate = jest.fn();

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Podcast podcast={podcast} onNavigate={mockOnNavigate} />
      </BrowserRouter>
    );
  });

  test("renders podcast image", () => {
    const imageElement = screen.getByAltText("podcast_image");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", podcast.img);
  });

  test("renders podcast author", () => {
    const authorElement = screen.getByText(`Author: ${podcast.author}`);
    expect(authorElement).toBeInTheDocument();
  });

  test("renders podcast name", () => {
    const nameElement = screen.getByText(podcast.name.toLocaleUpperCase());
    expect(nameElement).toBeInTheDocument();
  });

  test("navigates to podcast details when clicked", () => {
    const linkElement = screen.getByText(podcast.name.toLocaleUpperCase());
    fireEvent.click(linkElement);
    expect(mockOnNavigate).toHaveBeenCalledWith(podcast);
  });
});
