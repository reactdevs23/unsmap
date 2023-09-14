import Particles from "react-particles-js";
import styles from "./Particles.module.css";
const Particless = () => {
  const particlesOptions = {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 600,
        },
      },
      color: {
        value: "#1dcc1d",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 6,
          color: "#1dcc1d",
        },
        image: {
          src: "img/github.svg",
          width: 200,
          height: 200,
        },
      },
      opacity: {
        value: 0.2,
        random: true,
      },
      links: {
        color: "#1dcc1d",
        distance: 100,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 3,
        direction: "bottom-right",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
  };
  return (
    <Particles
      className={["particles", styles.particles].join(" ")}
      params={particlesOptions}
    />
  );
};
export default Particless;
