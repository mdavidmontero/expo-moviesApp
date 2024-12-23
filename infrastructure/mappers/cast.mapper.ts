import { MovieDBCast } from "../interfaces/actor-movie.response";
import { Cast } from "../interfaces/cast.interface";

export class CastMapper {
  static fromMovieDBCastToEntity(actor: MovieDBCast): Cast {
    return {
      id: actor.id,
      name: actor.name,
      character: actor.character ?? "No character",
      avatar: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : "https://i.stack.imgur.com/l60Hf.png", // esto en caso de no tener imagen
    };
  }
}
