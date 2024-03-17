import Container from "../../components/Container";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="bg-background relative text-white">
      <div className="absolute left-0 top-0 w-full">
        <img
          src="/posters/boy-showering.jpg"
          className="h-[--hero-height] w-full object-cover"
        ></img>
      </div>

      <Container className="relative z-10 flex min-h-[--hero-height] flex-col items-start justify-end pb-7">
        <h1 className="mb-10 text-5xl font-bold">
          All Apple Originals.
          <br />
          Only on Apply TV+
        </h1>
        <Button className="mb-16" size="lg">
          Stream now
        </Button>
        <p className="font-semibold">Watch on the tv app.</p>
      </Container>
    </div>
  );
};
export default Hero;
