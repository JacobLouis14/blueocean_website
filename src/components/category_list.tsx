"use client";
import { useState } from "react";
import CategoryCard from "./category_card";

const categoryData = [
  {
    title: "Rum",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed animi
          alias labore fugiat iure sequi unde assumenda quidem maiores quisquam
          necessitatibus, nobis velit doloribus quis, doloremque modi quibusdam
          ex eius?`,
    image: "/assets/rum_thumbnail.png",
    link: "#",
    titlePosition: "top-7 right-0",
  },
  {
    title: "Whiskey",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed animi
          alias labore fugiat iure sequi unde assumenda quidem maiores quisquam
          necessitatibus, nobis velit doloribus quis, doloremque modi quibusdam
          ex eius?`,
    image: "/assets/vodka_thumbnail.png",
    link: "#",
    titlePosition: "-bottom-7 right-10",
  },
  {
    title: "Brandy",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed animi
          alias labore fugiat iure sequi unde assumenda quidem maiores quisquam
          necessitatibus, nobis velit doloribus quis, doloremque modi quibusdam
          ex eius?`,
    image: "/assets/brandy_thumbnail.png",
    link: "#",
    titlePosition: "top-12 left-0",
  },
  {
    title: "Gin",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed animi
          alias labore fugiat iure sequi unde assumenda quidem maiores quisquam
          necessitatibus, nobis velit doloribus quis, doloremque modi quibusdam
          ex eius?`,
    image: "/assets/brandy_thumbnail.png",
    link: "#",
    titlePosition: "bottom-7 right-10 verticalText",
  },
  {
    title: "Vodka",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed animi
          alias labore fugiat iure sequi unde assumenda quidem maiores quisquam
          necessitatibus, nobis velit doloribus quis, doloremque modi quibusdam
          ex eius?`,
    image: "/assets/vodka_thumbnail.png",
    link: "#",
    titlePosition: "top-1/2 left-1/2 -translate-1/2",
  },
  {
    title: "Cocktails",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed animi
          alias labore fugiat iure sequi unde assumenda quidem maiores quisquam
          necessitatibus, nobis velit doloribus quis, doloremque modi quibusdam
          ex eius?`,
    image: "/assets/vodka_thumbnail.png",
    link: "#",
    titlePosition: "bottom-0 left-0",
  },
  {
    title: "Liquors",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed animi
          alias labore fugiat iure sequi unde assumenda quidem maiores quisquam
          necessitatibus, nobis velit doloribus quis, doloremque modi quibusdam
          ex eius?`,
    image: "/assets/vodka_thumbnail.png",
    link: "#",
    titlePosition: "top-0 right-0",
  },
  {
    title: "Low Alchoholic beverages",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed animi
          alias labore fugiat iure sequi unde assumenda quidem maiores quisquam
          necessitatibus, nobis velit doloribus quis, doloremque modi quibusdam
          ex eius?`,
    image: "/assets/vodka_thumbnail.png",
    link: "#",
    titlePosition: "bottom-0 translate-x-1/3",
  },
];

const CategoryList = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {categoryData.map((category, index) => (
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
              {category.title}
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
              <h6>Explore</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
