import Image from "next/image";
import React from "react";

const Frame01 = () => {
  return (
    <section className="relative md:py-20 flex flex-col gap-10">
      <div className="grid md:grid-cols-12 gap-4 md:gap-10 px-4 md:px-18">
        <div className="col-span-4 flex flex-col justify-center items-center gap-5 text-center text-primary font-extralight italic">
          <div className="w-40 h-40 rounded-full bg-primary/50"></div>
          <p className="text-xs md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quasi, perspiciatis, omnis earum dolore facilis
            quisquam quia in voluptate, illo repudiandae libero sit quo
            doloribus. Accusamus ducimus itaque delectus aliquid.
          </p>
        </div>
        <div className="col-span-4 flex flex-col justify-center items-center gap-5 text-center text-primary font-extralight italic">
          <div className="w-40 h-40 rounded-full bg-primary/50"></div>
          <p className="text-xs md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quasi, perspiciatis, omnis earum dolore facilis
            quisquam quia in voluptate, illo repudiandae libero sit quo
            doloribus. Accusamus ducimus itaque delectus aliquid.
          </p>
        </div>
        <div className="col-span-4 flex flex-col justify-center items-center gap-5 text-center text-primary font-extralight italic">
          <div className="w-40 h-40 rounded-full bg-primary/50"></div>
          <p className="text-xs md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quasi, perspiciatis, omnis earum dolore facilis
            quisquam quia in voluptate, illo repudiandae libero sit quo
            doloribus. Accusamus ducimus itaque delectus aliquid.
          </p>
        </div>
      </div>
      <div className="relative h-100 w-full">
        <Image
          src={"/assets/vodka_thumbnail.png"}
          alt="Image"
          fill
          sizes="100%,100%"
          className="object-cover object-bottom"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-black from-5% to-transparent"></div>
        <div className="relative h-full w-fit md:w-100 ml-4 md:ml-20 flex items-center">
          <h6 className="text-white text-4xl md:text-7xl tracking-widest font-odorMeanChey">
            Experience the expertise
          </h6>
        </div>
      </div>
    </section>
  );
};

export default Frame01;
