import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-Stack Developer | React.js & .NET Core Specialist",
          "UI/UX Explorer",
          "Junior Full-Stack Developer",
          "Cloud & API Integrator",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
