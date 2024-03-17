import { mainMovies, randomMovieSet1, randomMovieSet2 } from "../../movies";
import type { Movie } from "../../movies";

const Carousel = () => {
  return (
    <div className="bg-background pb-8">
      <div className="overflow-clip">
        <div className="mb-5 flex justify-center gap-5">
          <div className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl">
            <img
              className="h-full w-full object-cover"
              src={mainMovies[0].poster}
              alt={mainMovies[0].name}
            />
          </div>
          <div className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl">
            <img
              className="h-full w-full object-cover"
              src={mainMovies[1].poster}
              alt={mainMovies[1].name}
            />
          </div>
          <div className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl">
            <img
              className="h-full w-full object-cover"
              src={mainMovies[2].poster}
              alt={mainMovies[2].name}
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <SmallCarousel movies={randomMovieSet1} />
        <SmallCarousel movies={randomMovieSet2} />
      </div>
    </div>
  );
};
export default Carousel;

const SmallCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="flex gap-3 overflow-clip">
      {movies.map((movie, index) => (
        <div
          className="aspect-video w-[23vw] shrink-0"
          key={`${movie.name} - ${index}`}
        >
          <img
            className="h-full w-full rounded-xl object-cover"
            src={movie.poster}
            alt={movie.name}
          />
        </div>
      ))}
    </div>
  );
};
