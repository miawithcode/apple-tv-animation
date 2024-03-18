export type Movie = {
  poster: string;
  name: string;
};

export const mainMovies = [
  { poster: "/posters/swim.jpg", name: "Swim" },
  { poster: "/posters/reading.jpg", name: "Reading" },
  { poster: "/posters/crossroad.jpg", name: "Crossroad" },
];

const movies = [
  { poster: "/posters/running.jpg", name: "Walking" },
  { poster: "/posters/reading.jpg", name: "Reading" },
  { poster: "/posters/crossroad.jpg", name: "Crossroad" },
  { poster: "/posters/boy-showering.jpg", name: "Showering Boys" },
  { poster: "/posters/clark.jpg", name: "Clark" },
  { poster: "/posters/space.jpg", name: "Space" },
  { poster: "/posters/hubble.jpg", name: "Hubble Telescope" },
  { poster: "/posters/paris.jpg", name: "Paris" },
  { poster: "/posters/bus.jpg", name: "Bus" },
  { poster: "/posters/swim.jpg", name: "Swim" },
];

export const randomMovieSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMovieSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
