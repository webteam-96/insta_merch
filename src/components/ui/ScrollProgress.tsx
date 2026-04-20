import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 h-[3px] origin-left z-[150]"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, #833AB4 0%, #C13584 30%, #E1306C 55%, #FD1D1D 75%, #F77737 100%)",
      }}
    />
  );
}
