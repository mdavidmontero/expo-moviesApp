import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { movieApi } from "../../api/movie-api";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

interface Options {
  page?: number;
  limit?: number;
}

export const topRatedMoviesAction = async ({
  page = 1,
  limit = 10,
}: Options) => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>("/top_rated", {
      params: {
        page,
      },
    });
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    return movies;
  } catch (error) {
    console.log(error);
    throw "cannot load now playing movies";
  }
};
