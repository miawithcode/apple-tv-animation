import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const FadeIn = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      // viewport={{margin: "100% 0px -200px 0px"}}
    >
      {children}
    </motion.div>
  );
};
export default FadeIn;
