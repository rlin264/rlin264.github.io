// src/utils/markdown.ts
import matter from 'gray-matter';
import type { BlogPost, BlogPostMatter } from '@/types/blog';

export const parseMarkdownContent = (content: string): { data: BlogPostMatter; content: string } => {
  return matter(content);
};

export const createBlogPostFromMatter = (
  slug: string,
  rawContent: string
): BlogPost => {
  const { data, content } = parseMarkdownContent(rawContent);
  
  return {
    slug,
    title: data.title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    date: data.date || new Date().toISOString().split('T')[0],
    author: data.author,
    tags: data.tags || [],
    excerpt: generateExcerpt(content),
    content: rawContent
  };
};

export const generateExcerpt = (content: string, maxLength: number = 200): string => {
  // Remove markdown headers and get clean text
  const cleanContent = content
    .replace(/^#.*$/gm, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .trim();
  
  return cleanContent.substring(0, maxLength) + (cleanContent.length > maxLength ? '...' : '');
};

export const sortPostsByDate = (posts: BlogPost[]): BlogPost[] => {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};