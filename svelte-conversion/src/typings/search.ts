export interface SearchResults {
  hits: Hit[];
  offset: number;
  limit: number;
  nbHits: number;
  exhaustiveNbHits: boolean;
  processingTimeMs: number;
  query: string;
}

export interface Hit {
  excerpt: string;
  images: Images;
  lang: string;
  permalink: string;
  post_author: PostAuthor;
  post_date_formatted: string;
  post_modified_formatted: string;
  post_title: string;
  tags: Tag[];
  taxonomies: Taxonomies;
  id: number;
}

export interface Images {
  medium: HotTopics;
  thumbnail: HotTopics;
  medium_large: HotTopics;
  "hot-topics": HotTopics;
  full: Full;
}

export interface Full {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface HotTopics {
  file: string;
  width: number;
  height: number;
  gs_name: string;
  gs_link: string;
  mime_type: string;
  source_url: string;
}

export interface PostAuthor {
  user_id: number;
  display_name: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
  lang: string;
  link: string;
}

export interface Taxonomies {
  category: string[];
  post_tag: string[];
  classes?: string[];
  metas?: string[];
  num?: string[];
  tiers?: string[];
  misc?: string[];
}
