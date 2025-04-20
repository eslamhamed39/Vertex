export interface Blogs {
    id: number;
  title: string;
  creator: string;
  creator_image?: string;
  time_to_read: number;
  description: string;
  header_image?: string;
  post_images: string[];
  video_url?: string;
  tags: string;
  comments_enabled: boolean;
  popular: boolean;
  created_at: string;
}
