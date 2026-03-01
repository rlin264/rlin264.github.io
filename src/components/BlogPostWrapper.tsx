// src/components/BlogPostWrapper.tsx
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import type { BlogPostWrapperProps } from '@/types/blog';
import { PostNotFound, PostHeader, PostContent } from './BlogPostWrapper/index';
import NavLink from './shared/NavLink';
import { formatRelativeDate } from '@/utils/date';
import { markAsRead, isRead, countUnread } from '@/utils/readState';
import { useKeyboardNav } from '@/utils/useKeyboardNav';

const BlogPostWrapper: React.FC<BlogPostWrapperProps> = ({ posts }) => {
  const { slug } = useParams<{ slug: string }>();
  const paneRef = useRef<HTMLDivElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showShortcuts, setShowShortcuts] = useState(false);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const post = posts.find(p => p.slug === slug);
  const unreadCount = countUnread(posts.map(p => p.slug));
  const currentIndex = posts.findIndex(p => p.slug === slug);
  const olderPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const newerPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

  // Keyboard navigation
  useKeyboardNav(posts, slug);

  // Mark current post as read, scroll pane to top, close drawer
  useEffect(() => {
    if (slug) {
      markAsRead(slug);
    }
    if (paneRef.current) {
      paneRef.current.scrollTop = 0;
    }
    setDrawerOpen(false);
    setScrollProgress(0);
  }, [slug]);

  // Scroll progress handler
  const handleScroll = useCallback(() => {
    const el = paneRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    const max = scrollHeight - clientHeight;
    setScrollProgress(max > 0 ? (scrollTop / max) * 100 : 0);
  }, []);

  // Tag filtering for sidebar
  const allTags = Array.from(
    new Set(posts.flatMap(p => p.tags ?? []))
  ).sort();
  const filteredPosts = activeTag ? posts.filter(p => p.tags?.includes(activeTag)) : posts;

  if (!post && posts.length > 0) {
    return <PostNotFound />;
  }

  return (
    <div className="inbox-layout">
      {/* Top bar */}
      <div className="inbox-topbar">
        <NavLink to="/" className="topbar-site">LinBox</NavLink>
        <span className="topbar-label">Inbox</span>
        <button
          className="topbar-toggle"
          onClick={() => setDrawerOpen(!drawerOpen)}
          aria-expanded={drawerOpen}
          aria-label="Toggle post list"
        >
          <span>Inbox{unreadCount > 0 ? ` \u00B7 ${unreadCount}` : ''}</span>
          <span className={`toggle-chevron${drawerOpen ? ' open' : ''}`}>{'\u25BE'}</span>
        </button>
        <span className="topbar-count">
          {posts.length} post{posts.length !== 1 ? 's' : ''}
          {unreadCount > 0 ? ` · ${unreadCount} unread` : ''}
        </span>
        <button
          className="topbar-kbd-hint"
          onClick={() => setShowShortcuts(s => !s)}
          aria-label="Keyboard shortcuts"
          title="Keyboard shortcuts"
        >
          ?
        </button>
      </div>

      {/* Keyboard shortcuts overlay */}
      {showShortcuts && (
        <div className="kbd-overlay" onClick={() => setShowShortcuts(false)}>
          <div className="kbd-dialog" onClick={e => e.stopPropagation()}>
            <div className="kbd-title">Keyboard shortcuts</div>
            <div className="kbd-row"><kbd>j</kbd> Next post</div>
            <div className="kbd-row"><kbd>k</kbd> Previous post</div>
            <button className="kbd-close" onClick={() => setShowShortcuts(false)}>close</button>
          </div>
        </div>
      )}

      {/* Post list sidebar */}
      <div className={`inbox-sidebar${drawerOpen ? ' mobile-open' : ''}`}>
        {allTags.length > 0 && (
          <div className="tag-filters sidebar-tag-filters">
            <button
              className={`tag-filter${activeTag === null ? ' active' : ''}`}
              onClick={() => setActiveTag(null)}
            >
              all
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                className={`tag-filter${activeTag === tag ? ' active' : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
        <div className="inbox-col-header">
          <span>Subject</span>
          <span style={{ textAlign: 'right' }}>Date</span>
        </div>
        {filteredPosts.map((p) => (
          <NavLink
            key={p.slug}
            to={`/posts/${p.slug}`}
            className={`inbox-row${p.slug === slug ? ' active' : ''}`}
          >
            <div>
              <div className={`inbox-row-title${!isRead(p.slug) ? ' unread' : ''}`}>{p.title}</div>
              {p.tags && p.tags.length > 0 && (
                <div className="inbox-row-category">{p.tags.join(' \u00B7 ')}</div>
              )}
            </div>
            <div className="inbox-row-date">{formatRelativeDate(p.date)}</div>
          </NavLink>
        ))}
      </div>

      {/* Reading pane */}
      <div className="inbox-pane" ref={paneRef} onScroll={handleScroll}>
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />
        {post ? (
          <>
            <PostHeader post={post} />
            <PostContent post={post} />
            <div className="post-nav">
              {olderPost ? (
                <NavLink to={`/posts/${olderPost.slug}`} className="post-nav-link">
                  &larr; Older
                </NavLink>
              ) : (
                <span />
              )}
              {newerPost ? (
                <NavLink to={`/posts/${newerPost.slug}`} className="post-nav-link">
                  Newer &rarr;
                </NavLink>
              ) : (
                <span />
              )}
            </div>
          </>
        ) : (
          <div className="inbox-pane-empty">select a post to read</div>
        )}
      </div>
    </div>
  );
};

export default BlogPostWrapper;
