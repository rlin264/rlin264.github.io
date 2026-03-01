import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { BlogPost } from '@/types/blog';

export function useKeyboardNav(posts: BlogPost[], currentSlug: string | undefined) {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      const idx = posts.findIndex(p => p.slug === currentSlug);

      switch (e.key) {
        case 'j': {
          const next = idx < posts.length - 1 ? idx + 1 : -1;
          if (next >= 0) navigate(`/posts/${posts[next].slug}`);
          break;
        }
        case 'k': {
          const prev = idx > 0 ? idx - 1 : -1;
          if (prev >= 0) navigate(`/posts/${posts[prev].slug}`);
          break;
        }
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [posts, currentSlug, navigate]);
}
