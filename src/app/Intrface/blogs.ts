export interface CockpitAsset {
  path: string;
  title: string;
  mime: string;
  type: string;
  description: string;
  tags: string[];
  size: number;
  colors: string[] | null;
  width: number | null;
  height: number | null;
  _hash: string;
  _created: number;
  _modified: number;
  _cby: string;
  altText?: string;
  thumbhash?: string;
  folder?: string;
  _id: string;
}

export interface BlogPost {
  title: string;
  Creator: string;
  creator_image: string | null;
  read_time: number | null;
  Description: string;
  header_image: CockpitAsset | null;
  Post_image: CockpitAsset[];
  tags: string[];
  Comment: any[];
  _state?: number;
  _modified: number;
  _mby: string;
  _created: number;
  _cby: string;
  _id: string;
}

export interface Comment {
  name: string;
  email: string;
  comment: string;
  _created?: number;
  blogPost?: { _id: string };
}
