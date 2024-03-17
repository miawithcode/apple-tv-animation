import Container from "../Container";
import FadeIn from "../FadeIn";

const Usps = () => {
  return (
    <Container className="relative py-36 z-10 max-w-[1208px] space-y-12 text-5xl font-bold text-white">
      <FadeIn>
        <p>New Apple Originals every month — always ad‑free.</p>
      </FadeIn>

      <FadeIn>
        <p>
          Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
          sticks.
        </p>
      </FadeIn>

      <FadeIn>
        <p>Watch in 4K HDR video with immersive Spatial Audio.</p>
      </FadeIn>

      <FadeIn>
        <p>Share a single subscription with up to five people.</p>
      </FadeIn>
    </Container>
  );
};
export default Usps;
