"use client";
import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import particlesConfig from "./config";
import { loadSlim } from "tsparticles-slim";
import { Container, Engine, ISourceOptions } from "tsparticles-engine";

export default function BackgroundParticles() {
  const [mounted, setMounted] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    // Particle container loaded
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{ minHeight: "100dvh", width: "100%" }}
      options={particlesConfig}
    />
  );
}

