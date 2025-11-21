"use client";
import { convertProductName } from "@/utils/p_name_converter";
import { useRouter } from "next/navigation";
import categoryData from "@/constants/category.data.json";
import { useState } from "react";

export const CategorySelect = ({
  selectedCategory,
}: {
  selectedCategory: string;
}) => {
  const [category, setCategory] = useState<string>(selectedCategory);
  const router = useRouter();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    const selectedCategoryLink = categoryData.find(
      (c) => convertProductName(c.name) === selectedCategory
    )?.link;

    if (selectedCategoryLink) {
      router.push(convertProductName(selectedCategoryLink));
    }
  };

  return (
    <select
      id="categorySelect"
      name="category"
      className="cursor-pointer px-4 py-2 bg-amber-50 rounded-md w-full border-none shadow-sm outline-none"
      value={category}
      onChange={handleCategoryChange}
    >
      {categoryData.map((category, index) => (
        <option key={index} value={convertProductName(category.name)}>
          {category.name}
        </option>
      ))}
    </select>
  );
};
