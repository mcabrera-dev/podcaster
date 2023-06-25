export interface Data {
  feed: PodcastListDTO;
}

export interface PodcastListDTO {
  author: AuthorDTO;
  entry: Entry[];
  updated: LabelDTO;
  rights: LabelDTO;
  title: LabelDTO;
  icon: LabelDTO;
  link: Link[];
  id: LabelDTO;
}

export interface AuthorDTO {
  name: LabelDTO;
  uri: LabelDTO;
}

export interface LabelDTO {
  label: string;
}

export interface Entry {
  "im:name": LabelDTO;
  "im:image": IMImage[];
  summary: LabelDTO;
  "im:price": IMPrice;
  "im:contentType": IMContentType;
  rights?: LabelDTO;
  title: LabelDTO;
  link: Link;
  id: ID;
  "im:artist": IMArtist;
  category: Category;
  "im:releaseDate": IMReleaseDate;
}

export interface Category {
  attributes: CategoryAttributes;
}

export interface CategoryAttributes {
  "im:id": string;
  term: string;
  scheme: string;
  label: string;
}

export interface ID {
  label: string;
  attributes: IDAttributes;
}

export interface IDAttributes {
  "im:id": string;
}

export interface IMArtist {
  label: string;
  attributes?: IMArtistAttributes;
}

export interface IMArtistAttributes {
  href: string;
}

export interface IMContentType {
  attributes: IMContentTypeAttributes;
}

export interface IMContentTypeAttributes {
  term: FluffyLabel;
  label: FluffyLabel;
}

export enum FluffyLabel {
  Podcast = "Podcast",
}

export interface IMImage {
  label: string;
  attributes: IMImageAttributes;
}

export interface IMImageAttributes {
  height: string;
}

export interface IMPrice {
  label: IMPriceLabel;
  attributes: IMPriceAttributes;
}

export interface IMPriceAttributes {
  amount: string;
  currency: Currency;
}

export enum Currency {
  Usd = "USD",
}

export enum IMPriceLabel {
  Get = "Get",
}

export interface IMReleaseDate {
  label: string;
  attributes: LabelDTO;
}

export interface Link {
  attributes: LinkAttributes;
}

export interface LinkAttributes {
  rel: Rel;
  type?: Type;
  href: string;
}

export enum Rel {
  Alternate = "alternate",
  Self = "self",
}

export enum Type {
  TextHTML = "text/html",
}
