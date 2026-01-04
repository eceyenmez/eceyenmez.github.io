import { ISourceOptions } from "tsparticles-engine";

const particlesConfig: ISourceOptions = {
  detectRetina: true,
  fpsLimit: 120,
  fullScreen: {
    enable: true,
    zIndex: 0,
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        width: 1920,
        height: 1080,
      },
    },
    color: {
      value: "#888888",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.7,
      random: {
        enable: true,
        minimumValue: 0.3,
      },
      anim: {
        enable: false,
      },
    },
    size: {
      value: 3,
      random: {
        enable: true,
        minimumValue: 2,
      },
      anim: {
        enable: false,
      },
    },
    links: {
      enable: true,
      distance: 150,
      color: "#666666",
      opacity: 0.4,
      width: 1.5,
      triangles: {
        enable: false,
      },
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      outMode: "out",
      bounce: false,
      attract: {
        enable: false,
      },
    },
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        links: {
          opacity: 0.4,
        },
      },
      push: {
        quantity: 2,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  background: {
    color: {
      value: "transparent",
    },
  },
};
export default particlesConfig;

