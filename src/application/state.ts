import { Entry, PodcastList } from "../domain/podcast/podcast";

export class State {
  podcastList: PodcastList | undefined;
  selected: Entry | undefined
}
