export const RocketVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { ease: "easeInOut", duration: 1, delay: 1 },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: { ease: "easeInOut", duration: 0.5 },
  },
};
