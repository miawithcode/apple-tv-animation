import Container from "../../components/Container";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="h-[300vh] bg-background relative text-white">
      <div className="absolute -top-[--header-total-height] left-0 h-[200vh] w-full">
        <img
          src="/posters/boy-showering.jpg"
          className="sticky top-0 h-screen w-full object-cover"
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
