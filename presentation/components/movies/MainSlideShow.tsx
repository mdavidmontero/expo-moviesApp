import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { View, Text, Dimensions, useWindowDimensions } from "react-native";
import { useRef } from "react";
import MoviePoster from "./MoviePoster";

interface Props {
  movies: Movie[];
}

const MainSlideShow = ({ movies }: Props) => {
  const ref = useRef<ICarouselInstance>(null);
  const width = useWindowDimensions().width;

  return (
    <View className="h-[250px] w-full">
      <Carousel
        ref={ref}
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster id={item.id} poster={item.poster} />
        )}
        width={200}
        height={350}
        style={{
          width: width,
          height: 350,
          justifyContent: "center",
          alignItems: "center",
        }}
        autoPlay={true}
        defaultIndex={1}
      />
    </View>
  );
};
export default MainSlideShow;
