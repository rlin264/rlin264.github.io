// src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogPost } from './types/blog';
import { fetchMarkdownPosts } from './utils/markdownLoader';
import BlogList from './components/BlogList';
import BlogPostWrapper from './components/BlogPostWrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';


const App: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Handle GitHub Pages SPA routing
  useEffect(() => {
    const handleGitHubPagesRouting = () => {
      const search = window.location.search;
      if (search.startsWith('?/')) {
        const route = search.slice(2); // Remove '?/'
        window.history.replaceState(null, '', '/' + route);
      }
    };

    handleGitHubPagesRouting();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await fetchMarkdownPosts();
        setPosts(postsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<BlogList posts={posts} loading={loading} error={error} />}
            />
            <Route
              path="/posts/:slug"
              element={<BlogPostWrapper posts={posts} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;