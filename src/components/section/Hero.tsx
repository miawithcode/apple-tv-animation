import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../../components/Container";
import Button from "../Button";
import { useRef } from "react";

const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: videoScroll } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const videoOpacity = useTransform(videoScroll, [0, 1], [1, 0]);


  const textContainerRef = useRef<HTMLDivElement>(null);

  const {scrollYProgress: textScroll} = useScroll({
    target: textContainerRef,
    offset: ["start start", "end end"],
  })
  const textOpacity = useTransform(textScroll, [0, 1], [0, 1])

  return (
    <div className="bg-background relative h-[300vh] text-white">
      <motion.div
        style={{ opacity: videoOpacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-total-height] left-0 h-[200vh] w-full"
      >
        <img
          src="/posters/sea.jpg"
          className="sticky top-0 h-screen w-full object-cover"
        ></img>
      </motion.div>

      <Container className="relative z-10 flex min-h-[--hero-height] flex-col items-start justify-end pb-7">
        <motion.div ref={textContainerRef} style={{ opacity: textOpacity }}>
          <h1 className="mb-10 text-5xl font-bold">
            All Apple Originals.
            <br />
            Only on Apply TV+
          </h1>
          <Button className="mb-48" size="lg">
            Stream now
          </Button>
          <p className="font-semibold">Watch on the tv app.</p>
        </motion.div>
      </Container>
    </div>
  );
};
export default Hero;
