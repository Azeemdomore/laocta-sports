export interface IGoogleAddOne {
  id: 1;
  googleAdd: string;
}

export interface IGoogleAddTwo {
  id: 1;
  googleAdd: string;
}

export interface IBannerMain {
  id: number;
  cardImage: string;
  cardPreDesc: string;
  cardDesc: string;
  cardTitle: string;
}

export interface IBannerCards {
  id: number;
  cardImage: string;
  cardPreDesc: string;
  cardDesc: string;
  cardTitle: string;
}

export interface IBannerCardSmall {
  id: number;
  cardImage: string;
  cardPreDesc: string;
  cardDesc: string;
  cardTitle: string;
}

export interface ILatestCard {
  id: number;
  cardImage: string;
  cardTitle: string;
  cardType: string;
  sectionTitle?: string;
}

export interface ILatestCardSmall {
  id: number;
  cardImage: string;
  cardPreDesc: string;
  cardDesc: string;
  cardTitle: string;
}

export interface ILatestSectionTitle {
  id: 1;
  sectionTitle: string;
}

export interface ILatestSmallCards {
  id: number;
  cardImage: string;
  cardPreDesc: string;
  cardDesc: string;
  cardTitle: string;
}

export interface ISponsoredContent {
  id: number;
  cardImage: string;
  cardDesc: string;
  cardTitle: string;
}
export interface ISponsoredTitle {
  id: number;
  sectionTitle: string;
}

export interface ISectionsBanner {
  id: number;
  cardImage: string;
  cardPreTitle: string;
  cardTitle: string;
  sectionTitle?: string;
}

export interface ISectionsCard {
  id: number;
  cardImage: string;
  cardPreTitle: string;
  cardTitle: string;
  cardDesc: string;
}

export interface IArticleSectionTitle {
  id: number;
  sectionTitle: string;
}

export interface IArticlesBanner {
  id: number;
  bannerImg: string;
  bannerPreTitle: string;
  bannerTitle: string;
  bannerFirstDesc: string;
  bannerSecondDesc: string;
  bannerThirdDesc: string;
  bannerForthDesc: string;
  bannerFifthDesc: string;
  bannerSixthDesc: string;
  bannerSeventhDesc: string;
  bannerGoogleAdd: string;
}

export interface IArticlesLatestNews {
  id: number;
  cardImg: string;
  cardPreTitle: string;
  cardTitle: string;
  cardDesc: string;
}

export interface IArticlesAlsoLiked {
  id: number;
  cardImg: string;
  cardTitle: string;
  cardDesc: string;
}

export interface IArticlesAlsoLikedTitle {
  id: number;
  sectionTitle?: string;
}
