import React from "react";
import { StateManager } from "../../../../application/state-manager";
import { useInjection } from "../../../../core/ioc/ioc.react";
import { TYPES } from "../../../../core/types/types";

const DetailsEpisode = () => {
  const stateManager = useInjection<StateManager>(TYPES.STATE_MANAGER);
  const { selectedEpisode } = stateManager.state;

  return (
    <div className="player-container">
      <h2>{stateManager.state.selectedEpisode?.title}</h2>
      <div
        dangerouslySetInnerHTML={{
          __html: stateManager.state.selectedEpisode?.content || "No content",
        }}
      />
      <div className="ui divider" />
      <div className="ui column centered grid padded">
        <audio className="player" controls data-testid={`podcast-player`}>
          <source src={selectedEpisode?.url} type="audio/ogg" />
          <source src={selectedEpisode?.url} type="audio/mpeg" />
          <source src={selectedEpisode?.url} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default DetailsEpisode;
