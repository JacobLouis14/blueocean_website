"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Caurosel = () => {
  const slides = [<Slide1 />, <Slide2 />];

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 8000);
    return () => clearInterval(interval);
  }, [length]);

  return slides.map((slide, idx) => (
    <div
      key={idx}
      className={`h-full absolute top-0 left-0 w-full
      transition-opacity duration-1000 ease-in-out ${
        idx === current ? "opacity-100 z-20" : "opacity-0 z-10"
      }
      `}
    >
      {slide}
    </div>
  ));
};

const Slide1 = () => {
  return (
    <div className="relative h-full">
      <Image
        src={"/assets/caurosel_01.png"}
        alt="image_01"
        fill
        className="object-cover object-right lg:object-fill"
      />
      {/* <div className="absolute top-0 left-0 h-full w-full z-10 bg-radial from-black/40 from-40% to-black"></div> */}
      <div className="absolute top-1/3 left-0 z-20 text-white flex flex-col gap-2">
        <h3 className="font-rakkas text-4xl md:text-8xl pl-4 md:pl-20 text-black bg-white md:w-fit pr-5">
          Spirits from the
        </h3>
        <h3 className="font-rakkas text-4xl md:text-8xl pl-4 md:pl-20">
          Shores of Goa
        </h3>
        <p className="w-full md:w-1/2 font-montserrat font-extralight pl-4 md:pl-20 pr-4 md:pr-0 text-white md:text-white/50 text-xs md:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
          sapiente odio mollitia rerum nobis dolore ab error alias perspiciatis
          dolorum pariatur deserunt unde quam amet cumque, id nulla quos itaque.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
          sapiente odio mollitia rerum nobis dolore ab error alias perspiciatis
          dolorum pariatur deserunt unde quam amet cumque, id nulla quos itaque.
        </p>
      </div>
    </div>
  );
};

const Slide2 = () => {
  return (
    <div className="relative h-full">
      <Image
        src={"/assets/caurosel_02.png"}
        alt="image_01"
        fill
        className="object-cover md:object-contain object-right"
      />
      <div className="absolute top-0 left-0 h-full w-full z-10 bg-linear-to-r from-black/70 from-40% via-black/20 to-black/80"></div>
      <p className="absolute top-1/3 left-0 z-20 w-full md:w-1/2 font-montserrat font-extralight pl-4 md:pl-20 text-xs md:text-base text-white/80">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi minima
        libero consequatur, nemo aperiam rerum sint, voluptatibus ut iusto sit
        repellat adipisci ducimus tenetur tempore saepe impedit, ipsum at
        facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        minima libero consequatur, nemo aperiam rerum sint, voluptatibus ut
        iusto sit repellat adipisci ducimus tenetur tempore saepe impedit, ipsum
        at facere.
      </p>
      <div className="absolute bottom-10 text-transparent bg-clip-text bg-linear-to-l to-[#AD6C3B] from-white z-20 font-montserrat font-medium text-4xl md:text-9xl pl-4 md:pl-20">
        <h3>From</h3>
        <h3 className="">Grain to bottle.</h3>
      </div>
    </div>
  );
};

export default Caurosel;
