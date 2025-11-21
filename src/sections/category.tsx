import CategoryList from "@/components/category_list";
import Watermark from "@/components/watermark";
import React from "react";

const Category = () => {
  return (
    <section
      id="category"
      className="relative min-h-dvh overflow-hidden bg-transparent"
    >
      <div className="pt-10 text-center">
        <h1 className="font-odorMeanChey text-3xl text-primary/20">
          Blue Ocean Beverages
        </h1>
        <p className="text-gray-400 font-extralight">
          Where you find crafted spirits
        </p>
      </div>
      <Watermark />
      <div className="grid md:grid-cols-2 gap-10 md:gap-0 lg:h-60 px-4 md:px-20 py-20 md:py-10">
        <div className="flex flex-col justify-center">
          <h3 className="text-primary font-odorMeanChey text-5xl">
            Our Collections
          </h3>
          <p className="pl-1 text-gray-400">
            Explore our curated collection of premium liquors
          </p>
        </div>
        <div className="flex items-center md:pl-20">
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo in
            alias voluptas tenetur velit aliquam corrupti consequatur eligendi.
            Ut, dicta! Voluptatibus voluptatem neque expedita voluptate tempora
            quos rerum animi aliquam.
          </p>
        </div>
      </div>
      <CategoryList />
    </section>
  );
};

export default Category;
