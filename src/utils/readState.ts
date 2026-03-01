// src/utils/readState.ts

const STORAGE_KEY = 'linbox-read-posts';

const getReadSlugs = (): Set<string> => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
};

export const isRead = (slug: string): boolean => getReadSlugs().has(slug);

export const markAsRead = (slug: string): void => {
  const read = getReadSlugs();
  read.add(slug);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...read]));
  } catch {
    // storage full or unavailable — silently ignore
  }
};

export const countUnread = (slugs: string[]): number => {
  const read = getReadSlugs();
  return slugs.filter(s => !read.has(s)).length;
};
