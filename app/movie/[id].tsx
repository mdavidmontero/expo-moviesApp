import { ActorCard } from "@/presentation/components/movie/ActorCard";
import HeaderMovie from "@/presentation/components/movie/HeaderMovie";
import MovieCast from "@/presentation/components/movie/MovieCast";
import MovieDescription from "@/presentation/components/movie/MovieDescription";
import { useMovie } from "@/presentation/hooks/useMovie";
import { useLocalSearchParams } from "expo-router";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
const MovieScreen = () => {
  const { id } = useLocalSearchParams();
  const { movieQuery, actorQuery } = useMovie(+id);

  if (movieQuery.isLoading || !movieQuery.data) {
    return (
      <View className=" flex flex-1 justify-center items-center">
        <Text className="mb-4">Espere por favor</Text>
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }
  return (
    <ScrollView>
      <HeaderMovie
        originalTitle={movieQuery.data.title}
        poster={movieQuery.data.poster}
        title={movieQuery.data.title}
      />
      <MovieDescription movie={movieQuery.data} />
      <MovieCast cast={actorQuery.data ?? []} />
    </ScrollView>
  );
};
export default MovieScreen;
