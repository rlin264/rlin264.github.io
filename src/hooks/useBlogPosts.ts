// src/hooks/useBlogPosts.ts
import { useState, useEffect } from 'react';
import type { BlogPost } from '@/types/blog';

interface UseBlogPostsReturn {
  posts: BlogPost[];
  loading: boolean;
  error: string | null;
}

export const useBlogPosts = (): UseBlogPostsReturn => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async (): Promise<void> => {
      try {
        const response = await fetch('/posts.json');
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data: BlogPost[] = await response.json();
        setPosts(Array.isArray(data) ? data : []);
        setError(null);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
        console.error('Error fetching posts:', err);
        setError(errorMessage);
        
        // Fallback to sample posts for development
        if (import.meta.env.DEV) {
          setPosts(getSamplePosts());
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

const getSamplePosts = (): BlogPost[] => [
  {
    slug: 'welcome',
    title: 'Welcome to LinBox',
    date: '2024-01-01',
    author: 'Your Name',
    tags: ['welcome', 'meta'],
    excerpt: 'Welcome to my personal blog where I share thoughts and technical writings...',
    content: `---
title: Welcome to LinBox
date: 2024-01-01
author: Your Name
tags: [welcome, meta]
---

# Welcome to LinBox!

This is my personal blog built with **React + TypeScript + Vite** and powered by private markdown content.

## Features

- ✅ ⚡ **Vite** for lightning-fast hot reload
- ✅ 🔷 **TypeScript** for type safety and better DX
- ✅ 📦 **pnpm** for efficient package management
- ✅ 🔒 Private content repository
- ✅ 🚀 Public frontend deployment
- ✅ 🤖 Automatic builds via GitHub Actions
- ✅ 📝 Markdown with frontmatter support
- ✅ 🎨 Clean, responsive design

## Hot Reload Development

Run \`pnpm dev\` for instant hot reload during development!

Content is kept private while the site itself is publicly accessible.`
  },
  {
    slug: 'typescript-benefits',
    title: 'Why TypeScript Makes Development Better',
    date: '2024-01-02',
    author: 'Your Name',
    tags: ['typescript', 'development', 'react'],
    excerpt: 'How TypeScript improves the development experience with static type checking...',
    content: `---
title: Why TypeScript Makes Development Better
date: 2024-01-02
author: Your Name
tags: [typescript, development, react]
---

# Why TypeScript Makes Development Better 🔷

TypeScript adds static type checking to JavaScript, catching errors at compile time rather than runtime.

## Benefits

- **🛡️ Type Safety** - Catch errors before they reach production
- **🧠 Better IntelliSense** - Superior autocomplete and refactoring
- **📚 Self-Documenting Code** - Types serve as inline documentation
- **🔄 Easier Refactoring** - Confident large-scale code changes

## Example

\`\`\`typescript
interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author?: string;
  tags?: string[];
}

const post: BlogPost = {
  slug: 'typescript-benefits',
  title: 'Why TypeScript Makes Development Better',
  date: '2024-01-02',
  tags: ['typescript', 'development']
};
\`\`\`

> TypeScript helps you write more maintainable code with confidence!`
  },
  {
    slug: 'vite-performance',
    title: 'Lightning Fast Development with Vite',
    date: '2024-01-03',
    author: 'Your Name',
    tags: ['vite', 'performance', 'tooling'],
    excerpt: 'How Vite revolutionizes frontend development with instant server start and HMR...',
    content: `---
title: Lightning Fast Development with Vite
date: 2024-01-03
author: Your Name
tags: [vite, performance, tooling]
---

# Lightning Fast Development with Vite ⚡

Vite has revolutionized the frontend development experience with its blazing-fast hot module replacement (HMR).

## Why Vite?

- **⚡ Instant server start** - No bundling required in development
- **🔥 Lightning fast HMR** - Updates reflect immediately
- **📦 Efficient builds** - Rollup-based production builds
- **🆕 Modern by default** - ES modules, TypeScript support

## Development Commands

\`\`\`bash
# Install dependencies with pnpm
pnpm install

# Start development server (starts in ~100ms!)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Type checking
pnpm type-check
\`\`\`

> The dev server starts in milliseconds, not seconds!`
  }
];