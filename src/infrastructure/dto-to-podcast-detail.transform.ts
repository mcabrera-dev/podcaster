import { injectable } from "inversify";
import { PodcastDetailDTO } from "../domain/podcast/podcast-dto";
import { PodcastDetail } from "../domain/podcast/podcast";
import { Transformer } from "../core/types/transformer";

@injectable()
export class DtoToPodcastDetailTransform
  implements Transformer<PodcastDetailDTO, PodcastDetail>
{
  transform(dto?: PodcastDetailDTO): PodcastDetail {
    let podcastList: Partial<PodcastDetail> = {};

    if (dto) {
      podcastList.id = dto.trackId;
      podcastList.artwork = dto.artworkUrl600;
      podcastList.name = dto.trackName;
      podcastList.feedUrl = dto.feedUrl;
      podcastList.artistName = dto.artistName;
    }
    return podcastList as PodcastDetail;
  }
}
