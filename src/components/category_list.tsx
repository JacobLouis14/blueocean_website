"use client";
import { useState } from "react";
import CategoryData from "@/constants/category.data.json";
import Link from "next/link";

const CategoryList = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {CategoryData.map((category, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredCategory(index)}
          onMouseLeave={() => setHoveredCategory(null)}
          style={{
            backgroundImage: `url(${category.image})`,
          }}
          className={`
            relative h-120 w-full bg-cover cursor-pointer
            `}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-t from-black to-transparent from-15%"></div>
          <div className="relative flex flex-col justify-between px-5 py-10 text-white h-full">
            <h2 className="verticalText text-3xl h-1/2 text-end tracking-widest font-medium">
              {category.name}
            </h2>
            <div className="flex flex-col gap-10">
              <p
                className={`
                ${
                  hoveredCategory === index
                    ? "opacity-100 transition translate-y-0 duration-700"
                    : "opacity-0 translate-y-10"
                }
                font-light text-xs`}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                quas quo tempora commodi,
              </p>
              <Link href={category.link}>Explore</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
