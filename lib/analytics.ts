/**
 * Simple page view tracking system
 * Uses localStorage for demo purposes - replace with real analytics in production
 */

const VIEWS_KEY = 'portfolio_page_views';

export interface AnalyticsData {
  totalViews: number;
  lastVisit: string;
  sessions: number;
}

/**
 * Initialize or retrieve analytics data
 */
export function getAnalytics(): AnalyticsData {
  if (typeof window === 'undefined') {
    return { totalViews: 0, lastVisit: new Date().toISOString(), sessions: 0 };
  }

  try {
    const stored = localStorage.getItem(VIEWS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error reading analytics:', error);
  }

  // Default data
  return {
    totalViews: 0,
    lastVisit: new Date().toISOString(),
    sessions: 0,
  };
}

/**
 * Track a page view
 */
export function trackPageView(): AnalyticsData {
  if (typeof window === 'undefined') {
    return { totalViews: 0, lastVisit: new Date().toISOString(), sessions: 0 };
  }

  const current = getAnalytics();
  const updated: AnalyticsData = {
    totalViews: current.totalViews + 1,
    lastVisit: new Date().toISOString(),
    sessions: current.sessions + 1,
  };

  try {
    localStorage.setItem(VIEWS_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error saving analytics:', error);
  }

  return updated;
}

/**
 * Format view count for display
 */
export function formatViews(views: number): string {
  if (views < 1000) return views.toString();
  if (views < 10000) return `${(views / 1000).toFixed(1)}K`;
  if (views < 1000000) return `${Math.floor(views / 1000)}K`;
  return `${(views / 1000000).toFixed(1)}M`;
}

/**
 * Get simulated view count (for demo purposes)
 * In production, replace this with real analytics from Vercel, Google Analytics, etc.
 */
export function getSimulatedViewCount(): number {
  // Generate a consistent random number based on date for demo
  const seed = new Date().toISOString().slice(0, 10);
  const hash = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return 2500 + (hash % 5000);
}
