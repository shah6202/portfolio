import { GitHubRepo, GitHubUser } from "@/types/github";

const GITHUB_API_BASE = "https://api.github.com";
const USERNAME = "shah6202";

export const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  return res.json();
};

export function getProfileUrl() {
  return `${GITHUB_API_BASE}/users/${USERNAME}`;
}

export function getReposUrl() {
  return `${GITHUB_API_BASE}/users/${USERNAME}/repos?per_page=100`;
}

export function processTopRepos(repos: GitHubRepo[]): GitHubRepo[] {
  if (!repos || !Array.isArray(repos)) return [];
  
  return [...repos]
    .sort((a, b) => {
      // First, sort by star counts
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      // Second, sort by last updated timestamp
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    })
    .slice(0, 6);
}
