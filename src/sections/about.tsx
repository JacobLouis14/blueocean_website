import { TypingEffect } from "@/components/typewriter_text";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section id="about" className="relative min-h-dvh px-4 md:px-18 py-14">
      <div className="text-gray-400 w-full wrap-break-word text-5xl sm:text-7xl md:text-9xl">
        <span className="text-primary">premium&nbsp;</span>
        <TypingEffect
          text="spirits, world-class
          craftsmanship from goa to globe"
        />
      </div>
      <div className="grid lg:grid-cols-2 xl:block">
        <div className="relative flex flex-col gap-5 md:px-18 py-8 mt-10 md:mt-20">
          <h3 className="text-5xl text-primary font-odorMeanChey">About us</h3>
          <p className="w-full xl:w-2/4 text-xs md:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            libero, eveniet similique ipsam facilis at doloremque id alias,
            voluptate suscipit tempora exercitationem velit dolorum quibusdam,
            in voluptas obcaecati modi repudiandae. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Incidunt libero, eveniet similique
            ipsam facilis at doloremque id alias, voluptate suscipit tempora
            exercitationem velit dolorum quibusdam, in voluptas obcaecati modi
            repudiandae.
          </p>
          <Link
            href={"#"}
            className="px-4 py-2 rounded-md bg-primary w-fit text-background"
          >
            Discover More
          </Link>
        </div>
        <div className="hidden relative h-115 xl:flex items-center">
          <h6 className="md:text-[14rem] font-rakkas leading-44 text-primary/5 overflow-hidden">
            Blue Ocean Beverages
          </h6>
          <div className="absolute -top-20 right-3/6 translate-x-2/3 h-130 w-110 border-50 border-gray-200 z-20">
            <Image
              src={"/assets/whiskey_thumbnail.png"}
              alt="Image"
              fill
              sizes="100%,100%"
              className="object-cover"
            />
          </div>
          <div className="absolute -top-40 right-1/6 translate-x-2/6 h-130 w-110 border-50 border-gray-200 rotate-12 z-10">
            <Image
              src={"/assets/whiskey_thumbnail.png"}
              alt="Image"
              fill
              sizes="100%,100%"
              className="object-cover"
            />
          </div>
          <div className="absolute -top-100 right-1/6 translate-x-1/6  h-130 w-110 border-50 border-gray-200 -rotate-12">
            <Image
              src={"/assets/whiskey_thumbnail.png"}
              alt="Image"
              fill
              sizes="100%,100%"
              className="object-cover"
            />
          </div>
        </div>
        <div className="hidden lg:grid grid-cols-3 gap-3 lg:grid-cols-2 mt-10 md:mt-20 xl:hidden">
          <div className="relative h-full">
            <Image
              src={"/assets/whiskey_thumbnail.png"}
              alt="Image"
              fill
              sizes="100%,100%"
              className="object-cover"
            />
          </div>
          <div className="relative h-full">
            <Image
              src={"/assets/whiskey_thumbnail.png"}
              alt="Image"
              fill
              sizes="100%,100%"
              className="object-cover"
            />
          </div>
          <div className="relative h-full">
            <Image
              src={"/assets/whiskey_thumbnail.png"}
              alt="Image"
              fill
              sizes="100%,100%"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
