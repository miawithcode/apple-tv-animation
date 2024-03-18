import { motion, useScroll, useTransform } from "framer-motion";
import { mainMovies, randomMovieSet1, randomMovieSet2 } from "../../movies";
import type { Movie } from "../../movies";
import { useMemo, useRef } from "react";
import { useWindowSize } from "react-use";

const Carousel = () => {
  const { width, height } = useWindowSize();

  const carouselWrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });

  const maximumScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667; // based on 100vw / 60vw
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximumScale * 1.1, maximumScale, 1],
  );

  const postersOpacity = useTransform(scrollYProgress, [0.63, 0.66], [0, 1]);
  const posterTranslateXLeft = useTransform(
    scrollYProgress,
    [0.63, 0.66],
    [-60, 0],
  );
  const posterTranslateXRight = useTransform(
    scrollYProgress,
    [0.63, 0.66],
    [60, 0],
  );

  return (
    <div className="bg-background pb-8">
      <div
        className="mt-[-100vh] h-[300vh] overflow-clip"
        ref={carouselWrapperRef}
      >
        <div className="sticky top-0 flex h-screen items-center justify-center">
          <div className="mb-5 flex gap-5">
            <motion.div
              style={{ opacity: postersOpacity, x: posterTranslateXLeft }}
              className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl"
            >
              <img
                className="h-full w-full object-cover"
                src={mainMovies[0].poster}
                alt={mainMovies[0].name}
              />
            </motion.div>
            <motion.div
              style={{ scale }}
              className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl"
            >
              <img
                className="h-full w-full object-cover"
                src={mainMovies[1].poster}
                alt={mainMovies[1].name}
              />
            </motion.div>
            <motion.div
              style={{ opacity: postersOpacity, x: posterTranslateXRight }}
              className="aspect-video w-[60vw] shrink-0 overflow-clip rounded-2xl"
            >
              <img
                className="h-full w-full object-cover"
                src={mainMovies[2].poster}
                alt={mainMovies[2].name}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <SmallCarousel movies={randomMovieSet1} direction="left" />
        <div className="[--duration: 74s] [--carousel-offset: -32px]">
          <SmallCarousel
            movies={randomMovieSet2}
            direction="right"
            position="flex justify-end"
          />
        </div>
      </div>
    </div>
  );
};
export default Carousel;

type SmallCarouselProps = {
  movies: Movie[];
  direction?: "left" | "right";
  position?: string;
};

const SmallCarousel = ({ movies, direction, position }: SmallCarouselProps) => {
  const animationClass =
    direction === "left"
      ? "animate-carousel-move-left"
      : "animate-carousel-move-right";

  return (
    <div className="overflow-clip">
      <div
        className={`${animationClass} flex gap-3  ${position} left-[var(--carousel-offset, 0px)] relative`}
      >
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
    </div>
  );
};
