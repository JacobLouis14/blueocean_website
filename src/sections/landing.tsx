import Caurosel from "@/components/caurosel";
import Header from "@/components/header";
import React from "react";

const Landing = () => {
  return (
    <section
      id="landing"
      className="relative h-dvh w-full overflow-hidden bg-black"
    >
      <div className="absolute top-0 z-30 w-full">
        <Header />
      </div>
      <Caurosel />
    </section>
  );
};

export default Landing;
