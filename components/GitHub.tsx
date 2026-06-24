"use client";

import useSWR from "swr";
import { GitFork, Star, Calendar, Github, ExternalLink, Users, BookOpen } from "@/components/Icons";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { fetcher, getProfileUrl, getReposUrl, processTopRepos } from "@/lib/github";
import { GitHubRepo, GitHubUser } from "@/types/github";

const languageColors: Record<string, string> = {
  JavaScript: "bg-[#f1e05a]",
  TypeScript: "bg-[#3178c6]",
  HTML: "bg-[#e34c26]",
  CSS: "bg-[#563d7c]",
  Java: "bg-[#b07219]",
  Python: "bg-[#3572A5]",
  "C++": "bg-[#f34b7d]",
  C: "bg-[#555555]",
  Shell: "bg-[#89e051]",
};

export default function GitHub() {
  const { data: profile, error: profileError } = useSWR<GitHubUser>(getProfileUrl(), fetcher);
  const { data: repos, error: reposError } = useSWR<GitHubRepo[]>(getReposUrl(), fetcher);

  const isLoading = !profile || !repos;
  const isError = profileError || reposError;

  const topRepos = repos ? processTopRepos(repos) : [];

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <AnimatedSection id="github" className="py-20 max-w-6xl mx-auto px-4 md:px-8 border-b border-border/50">
      <div className="flex flex-col gap-12">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-sans font-extrabold text-3xl md:text-4xl tracking-tight text-text-primary signature-border w-fit pb-2">
              GitHub Activities
            </h2>
            <p className="font-sans text-sm text-text-muted mt-3">
              Live updates directly fetched from GitHub REST API
            </p>
          </div>
          <a
            href="https://github.com/shah6202"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-surface hover:bg-border/10 text-text-primary font-semibold text-sm transition-all shadow-sm hover:scale-[1.02] active:scale-95 w-fit"
          >
            <Github className="w-4 h-4 text-text-primary" />
            View All on GitHub
          </a>
        </div>

        {/* Error Fallback */}
        {isError && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 dark:text-red-400 p-6 rounded-2xl flex flex-col items-center gap-4 text-center">
            <span className="font-mono text-sm font-bold">Failed to load live GitHub data</span>
            <p className="font-sans text-xs">
              Due to GitHub API rate limits or network issues, we couldn't load live repositories. You can explore directly on MD Shahbaz's profile.
            </p>
            <a
              href="https://github.com/shah6202"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium text-xs transition-colors"
            >
              Go to GitHub
            </a>
          </div>
        )}

        {/* Loading Skeletons */}
        {isLoading && !isError && (
          <div className="flex flex-col gap-8 animate-pulse">
            {/* Profile Card Skeleton */}
            <div className="bg-surface border border-border/60 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-24 h-24 rounded-full bg-border" />
              <div className="flex-1 flex flex-col gap-3 w-full">
                <div className="h-6 bg-border rounded w-1/3" />
                <div className="h-4 bg-border rounded w-1/2" />
                <div className="flex gap-4 mt-2">
                  <div className="h-4 bg-border rounded w-16" />
                  <div className="h-4 bg-border rounded w-16" />
                  <div className="h-4 bg-border rounded w-16" />
                </div>
              </div>
            </div>

            {/* Repos Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-surface border border-border/60 rounded-2xl p-6 flex flex-col justify-between gap-4 h-48">
                  <div className="flex flex-col gap-2">
                    <div className="h-5 bg-border rounded w-2/3" />
                    <div className="h-4 bg-border rounded w-full" />
                    <div className="h-4 bg-border rounded w-5/6" />
                  </div>
                  <div className="flex gap-4">
                    <div className="h-4 bg-border rounded w-12" />
                    <div className="h-4 bg-border rounded w-12" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Loaded Content */}
        {!isLoading && !isError && (
          <div className="flex flex-col gap-8">
            {/* Profile Statistics Banner */}
            <div className="bg-surface border border-border/60 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary p-0.5 shadow-md flex-shrink-0">
                <Image
                  src={profile.avatar_url}
                  alt={profile.name || profile.login}
                  width={96}
                  height={96}
                  className="rounded-full object-cover"
                  priority={false}
                />
              </div>

              <div className="flex-1 text-center md:text-left flex flex-col justify-center">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-sans font-bold text-2xl text-text-primary">
                      {profile.name || "MD Shahbaz"}
                    </h3>
                    <a
                      href={profile.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-primary hover:text-secondary hover:underline transition-colors mt-0.5 inline-block"
                    >
                      @{profile.login}
                    </a>
                  </div>
                  <a
                    href={profile.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:self-start font-sans font-semibold text-xs text-text-muted hover:text-primary transition-colors flex items-center gap-1 self-center"
                  >
                    View profile
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <p className="font-sans text-sm text-text-muted max-w-2xl leading-relaxed mb-5">
                  {profile.bio || "Full Stack Developer building dynamic systems with React, Node, and Java/Oracle."}
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <span className="flex items-center gap-1.5 text-xs text-text-primary bg-background border border-border/50 px-3 py-1.5 rounded-full">
                    <Users className="w-4 h-4 text-primary" />
                    <strong>{profile.followers}</strong> followers
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-text-primary bg-background border border-border/50 px-3 py-1.5 rounded-full">
                    <Users className="w-4 h-4 text-secondary" />
                    <strong>{profile.following}</strong> following
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-text-primary bg-background border border-border/50 px-3 py-1.5 rounded-full">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <strong>{profile.public_repos}</strong> repos
                  </span>
                </div>
              </div>
            </div>

            {/* Top Repositories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topRepos.map((repo) => (
                <div
                  key={repo.id}
                  className="bg-surface border border-border/60 rounded-2xl p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-md transition-all duration-300 relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/5 rounded-full blur-xl group-hover:bg-secondary/10 transition-colors" />

                  <div className="flex flex-col gap-2 relative">
                    <div className="flex items-start justify-between gap-3">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans font-bold text-base text-text-primary hover:text-primary transition-colors truncate max-w-[80%]"
                        title={repo.name}
                      >
                        {repo.name}
                      </a>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted hover:text-primary transition-colors"
                        aria-label={`Open repository ${repo.name}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="font-sans text-xs text-text-muted line-clamp-2 leading-relaxed min-h-[32px] mb-2">
                      {repo.description || "No description provided."}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 pt-3 border-t border-border/60">
                    <div className="flex items-center justify-between">
                      {/* Language Badge */}
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-text-primary">
                        <span className={`w-3 h-3 rounded-full ${languageColors[repo.language] || "bg-gray-400"}`} />
                        {repo.language || "Markdown"}
                      </span>

                      {/* Stars & Forks */}
                      <div className="flex items-center gap-3 text-xs text-text-muted font-mono">
                        <span className="flex items-center gap-0.5">
                          <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500/20" />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-0.5">
                          <GitFork className="w-3.5 h-3.5 text-primary" />
                          {repo.forks_count}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-[10px] text-text-muted font-mono">
                      <Calendar className="w-3 h-3" />
                      Updated: {formatDate(repo.updated_at)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
