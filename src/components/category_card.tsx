"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
  titlePosition: string;
  transition: "left" | "fade" | "right";
}

const CategoryCard = ({
  imageUrl,
  title,
  description,
  link,
  titlePosition,
  transition,
}: Props) => {
  const [currentHover, setCurrentHover] = useState<number | null>(null);

  //   transition css
  const transitionData = {
    right: "opacity-0 translate-x-10 duration-500",
    left: "opacity-0 -translate-x-10 duration-500",
    fade: "opacity-0 duration-500",
  };

  return (
    <div
      className={`text-white overflow-hidden relative cursor-pointer h-full w-full`}
      onMouseEnter={() => setCurrentHover(1)}
      onMouseLeave={() => setCurrentHover(null)}
    >
      <Image
        src={imageUrl}
        alt={`${title} image`}
        fill
        sizes="100%,100%"
        className="object-center object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
      <h6
        className={`text-9xl font-semibold absolute z-10 outline-4 ${titlePosition} ${
          currentHover === 1
            ? transitionData[transition]
            : "opacity-100 duration-1000"
        }`}
      >
        {title}
      </h6>
      <div
        className={`absolute top-0 left-0 w-full h-full px-10 flex flex-col gap-5 justify-center items-center
                ${
                  currentHover === 1
                    ? "opacity-100 translate-y-0 duration-1000"
                    : "opacity-0 translate-y-10 pointer-events-none duration-200"
                }
                `}
      >
        <p className="font-extralight">{description}</p>
        <Link
          href={link}
          className="px-8 py-2 border border-white font-semibold"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
