import { NextRequest, NextResponse } from "next/server";
import productData from "@/constants/product.data.json";
import { convertProductName } from "@/utils/p_name_converter";

// cache
export const dynamic = "force-static";

interface Params {
  params: Promise<{
    category: string;
    product: string;
  }>;
}

export async function GET(req: NextRequest, { params }: Params) {
  const { category, product } = await params;

  // Normalize once
  const categoryNorm = convertProductName(category);
  const productNorm = convertProductName(product);

  // Find selected product
  const selectedProduct = productData.filter((p) => {
    const pCategoryNorm = convertProductName(p.category);
    const pNameNorm = convertProductName(p.name);

    return pCategoryNorm === categoryNorm && pNameNorm === productNorm;
  });

  // Related products (same category, NOT same product)
  const categoryNameExact = selectedProduct[0]?.category;
  const productNameExact = selectedProduct[0]?.name;

  const related = productData.filter(
    (p) => p.category === categoryNameExact && p.name !== productNameExact
  );

  return NextResponse.json({
    message: "success",
    selected: selectedProduct[0],
    related,
  });
}
