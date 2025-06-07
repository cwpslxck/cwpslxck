export interface BlogPost {
  id: string;
  title: string;
  description: string;
  pubDate: string;
}

export interface BlogFeed {
  title: string;
  link: string;
  description: string;
  lastBuildDate: string;
  posts: BlogPost[];
}
