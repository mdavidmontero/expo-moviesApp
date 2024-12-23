import { Movie } from "@/infrastructure/interfaces/movie.interface";
import {
  View,
  Text,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";
import MoviePoster from "./MoviePoster";
import { useEffect, useRef } from "react";
interface Props {
  title?: string;
  movies: Movie[];
  className?: string;
  loadNextPage?: () => void;
}

const MovieHorizontalList = ({
  title,
  movies,
  className,
  loadNextPage,
}: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;
    if (!isEndReached) return;
    isLoading.current = true;
    loadNextPage && loadNextPage();
  };
  return (
    <View className={`${className}`}>
      {title && <Text className="text-3xl font-bold px-4 my-2">{title}</Text>}

      <FlatList
        horizontal
        data={movies}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} smalloster />
        )}
        onScroll={onScroll}
      />
    </View>
  );
};
export default MovieHorizontalList;
