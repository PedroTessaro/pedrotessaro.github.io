/**
 * Live data from the portfolio-backend service.
 *
 * Read at build time so the HTML ships with real numbers, then refreshed in the
 * browser by the inline script in BaseLayout. Nothing here is allowed to fail
 * the build: if the service is down the page falls back to what's in
 * projects.ts, which is the same listing minus the numbers.
 */

const SERVICE = "https://pedrotessaro.vercel.app";
export const WHOAMI_ENDPOINT = `${SERVICE}/whoami`;
export const REPOS_ENDPOINT = `${SERVICE}/repos`;

export interface LiveProject {
  name: string;
  language: string;
  stars: number;
  pushed_at: string;
}

export interface LiveData {
  name: string;
  role: string;
  availability?: string;
  projects: LiveProject[];
  github: {
    repos: number;
    stars: number;
    commits_this_year: number;
    cache_age: string;
    stale: boolean;
  };
  last_commit?: { message: string; repo: string; at: string };
  ci?: { status: string; tests: number; coverage: number; sha: string };
  latency?: { p50: string; p95: string; samples: number };
  readme_views?: { total: number; today: number };
  server: { region: string; version: string; served_in: string };
}

async function getJSON<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
    if (!res.ok) {
      console.warn(`[live] ${url} returned ${res.status}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (err) {
    // A deploy here shouldn't depend on a deploy over there being up.
    console.warn(`[live] ${url} unreachable, falling back to static data:`, err);
    return null;
  }
}

export function fetchLive(): Promise<LiveData | null> {
  return getJSON<LiveData>(WHOAMI_ENDPOINT);
}

/**
 * Every public repo, not just the five the terminal features. The site lists
 * more of them, and none of the numbers should be written down here.
 */
export async function fetchRepos(): Promise<Map<string, LiveProject>> {
  const payload = await getJSON<{ repos: LiveProject[] }>(REPOS_ENDPOINT);
  return new Map(
    (payload?.repos ?? []).map((r) => [r.name.toLowerCase(), r])
  );
}

/** "6mo ago", the way ls -lt would put it. */
export function sinceRoughly(iso: string, locale: "pt" | "en"): string {
  const then = new Date(iso).getTime();
  if (!Number.isFinite(then)) return "";

  const days = Math.floor((Date.now() - then) / 86_400_000);
  const ago = locale === "pt" ? "atrás" : "ago";

  if (days >= 365) return `${Math.floor(days / 365)}y ${ago}`;
  if (days >= 30) return `${Math.floor(days / 30)}mo ${ago}`;
  if (days >= 1) return `${days}d ${ago}`;
  return locale === "pt" ? "agora há pouco" : "just now";
}
