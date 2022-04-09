export const rocketVarients = {
  rotate: { rotate: [0, -30, 0] },
  stop: { y: [0, -10, 0] },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: { ease: "easeInOut", duration: 0.5 },
  },
};
