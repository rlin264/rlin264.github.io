// src/utils/date.ts

/**
 * Parse a date string (YYYY-MM-DD) into a Date object.
 * Appends T00:00:00 to avoid timezone-offset shifts.
 */
export const parsePostDate = (dateStr: string): Date =>
  new Date(dateStr + 'T00:00:00');

export const formatShortDate = (dateStr: string): string =>
  parsePostDate(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

export const formatLongDate = (dateStr: string): string =>
  parsePostDate(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export const formatRelativeDate = (dateStr: string): string => {
  const date = parsePostDate(dateStr);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diffMs = today.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 1) return 'today';
  if (diffDays < 2) return 'yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  return formatShortDate(dateStr);
};
