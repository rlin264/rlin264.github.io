// src/types/blog.ts
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author?: string;
  tags?: string[];
  excerpt: string;
  content: string;
}

export interface BlogPostMatter {
  title?: string;
  date?: string;
  author?: string;
  tags?: string[];
  [key: string]: any;
}

export interface BlogListProps {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
}

export interface BlogPostProps {
  slug: string;
  posts: BlogPost[];
}

export interface BlogPostWrapperProps {
  posts: BlogPost[];
}