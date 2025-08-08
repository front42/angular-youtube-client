export interface IResponse {
  kind: string;
  etag: string;
  pageInfo: IPageInfo;
  items: IItem[];
}

export interface IItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: IStatistics;
}

interface IPageInfo {
  totalResults: number;
  resultsPerPage: number;
}

interface ISnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: IThumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: ILocalized;
  defaultAudioLanguage: string;
}

interface IThumbnails {
  default: IThumbnail;
  medium: IThumbnail;
  high: IThumbnail;
  standard: IThumbnail;
  maxres: IThumbnail;
}

interface IThumbnail {
  url: string;
  width: number;
  height: number;
}

interface ILocalized {
  title: string;
  description: string;
}

interface IStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
