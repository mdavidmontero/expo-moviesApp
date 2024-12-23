import { router } from "expo-router";
import { Pressable, Image } from "react-native";

interface Props {
  id: number;
  poster: string;
  smalloster?: boolean;
  clasName?: string;
}

const MoviePoster = ({ id, poster, smalloster = false, clasName }: Props) => {
  return (
    <Pressable
      className={`active:opacity-90 px-2 ${clasName}`}
      onPress={() => router.push(`/movie/${id}`)}
    >
      <Image
        source={{ uri: poster }}
        className="shadow-lg rounded-2xl w-ful h-full"
        style={{
          width: smalloster ? 85 : 150,
          height: smalloster ? 130 : 250,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};
export default MoviePoster;
