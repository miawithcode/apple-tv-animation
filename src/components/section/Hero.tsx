import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../../components/Container";
import Button from "../Button";
import { useRef } from "react";

const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0, 1], [1, 1, 0]);

  return (
    <div className="bg-background relative h-[300vh] text-white">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-total-height] left-0 h-[200vh] w-full"
      >
        <img
          src="/posters/sea.jpg"
          className="sticky top-0 h-screen w-full object-cover"
        ></img>
      </motion.div>

      <Container className="relative z-10 h-[--hero-height] pb-7">
        <motion.div
          className="flex h-full flex-col items-start justify-end "
          variants={{
            hidden: { opacity: 0, transition: { duration: 0.7 } },
            visible: { opacity: 1, transition: { duration: 0.7 } },
          }}
          initial="hidden"
          whileInView="visible"
          exit="visible"
          animate="hidden"
          viewport={{ amount: 1 }}
        >
          <h1 className="mb-10 text-5xl font-bold">
            All Apple Originals.
            <br />
            Only on Apply TV+
          </h1>
          <Button className=" mb-48" size="lg">
            Stream now
          </Button>
          <p className="font-semibold">Watch on the tv app.</p>
        </motion.div>
      </Container>
    </div>
  );
};
export default Hero;
