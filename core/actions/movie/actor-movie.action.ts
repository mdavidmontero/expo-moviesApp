import { movieApi } from "@/core/api/movie-api";
import {
  MovieDBCast,
  MovieDBCreditsResponse,
} from "@/infrastructure/interfaces/actor-movie.response";

import { Cast } from "@/infrastructure/interfaces/cast.interface";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";

export const getcastByIdAction = async (movieId: number) => {
  try {
    const { data } = await movieApi.get<MovieDBCreditsResponse>(
      `/${movieId}/credits`
    );
    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.log(error);
    throw "cannot load now playing movies";
  }
};
