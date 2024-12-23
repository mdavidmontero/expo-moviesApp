import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action";
import { topRatedMoviesAction } from "@/core/actions/movies/top_rated.action";
import { uPcomingMoviesAction } from "@/core/actions/movies/upcoming.action";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "nowPlaying"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24,
  });
  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMoviesAction,
    staleTime: 1000 * 60 * 60 * 24,
  });
  const toRatedQuery = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["movies", "topRared"],
    queryFn: ({ pageParam }) => {
      return topRatedMoviesAction({ page: pageParam });
    },

    staleTime: 1000 * 60 * 60 * 24,
    getNextPageParam: (_, pages) => pages.length + 1,
  });
  const upComingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: uPcomingMoviesAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    nowPlayingQuery,
    popularQuery,
    toRatedQuery,
    upComingQuery,
  };
};
