// src/utils/markdownLoader.ts
import matter from 'gray-matter';
import { BlogPost, BlogPostMatter } from '@/types/blog';

/**
 * Generates a slug from a filename
 */
export const generateSlug = (filename: string): string => {
  return filename.replace(/\.md$/, '').toLowerCase();
};

/**
 * Generates an excerpt from markdown content
 */
export const generateExcerpt = (content: string, maxLength: number = 200): string => {
  // Remove markdown syntax and get plain text
  const plainText = content
    .replace(/#{1,6}\s+/g, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/`(.*?)`/g, '$1') // Remove inline code
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links, keep text
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();

  if (plainText.length <= maxLength) {
    return plainText;
  }

  // Find the last complete word within the limit
  const truncated = plainText.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');
  
  return lastSpaceIndex > 0 
    ? truncated.substring(0, lastSpaceIndex) + '...'
    : truncated + '...';
};

/**
 * Parses a markdown file and returns a BlogPost object
 */
export const parseMarkdownFile = (filename: string, fileContent: string): BlogPost => {
  const { data, content } = matter(fileContent);
  const frontmatter = data as BlogPostMatter;
  
  const slug = generateSlug(filename);
  const excerpt = generateExcerpt(content);
  
  return {
    slug,
    title: frontmatter.title || 'Untitled',
    date: frontmatter.date || new Date().toISOString().split('T')[0],
    author: frontmatter.author,
    tags: frontmatter.tags,
    excerpt,
    content
  };
};

/**
 * Fetches all markdown files from the posts directory
 */
export const fetchMarkdownPosts = async (): Promise<BlogPost[]> => {
  try {
    // First, get the list of markdown files
    const response = await fetch('/posts/index.json');
    if (!response.ok) {
      throw new Error('Failed to fetch posts index');
    }
    
    const fileList: string[] = await response.json();
    
    // Fetch and parse each markdown file
    const posts: BlogPost[] = [];
    
    for (const filename of fileList) {
      try {
        const fileResponse = await fetch(`/posts/${filename}`);
        if (!fileResponse.ok) {
          console.warn(`Failed to fetch ${filename}`);
          continue;
        }
        
        const fileContent = await fileResponse.text();
        const { data } = matter(fileContent);
        const frontmatter = data as BlogPostMatter;
        
        // Only include published posts
        if (frontmatter.published !== false) {
          const post = parseMarkdownFile(filename, fileContent);
          posts.push(post);
        }
      } catch (error) {
        console.warn(`Error processing ${filename}:`, error);
      }
    }
    
    // Sort posts by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
  } catch (error) {
    console.error('Error fetching markdown posts:', error);
    throw error;
  }
};

