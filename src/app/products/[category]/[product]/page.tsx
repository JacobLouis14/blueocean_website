import Header from "@/components/header";
import { IProduct } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import { convertProductName } from "@/utils/p_name_converter";
import { CategorySelect } from "@/components/category_select";
import Animate from "@/components/animate";

interface Props {
  params: Promise<{
    category: string;
    product: string;
  }>;
}

const Products = async ({ params }: Props) => {
  const { category, product } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${category}/${product}`
  );
  const data = await response.json();
  const selectedProduct: IProduct = data.selected;
  const relatedProducts: IProduct[] = data.related;

  return (
    <div className={`relative min-h-screen flex flex-col bg-amber-100`}>
      <Image
        src={selectedProduct.image}
        alt="product bg"
        width={600}
        height={600}
        loading="eager"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative h-full flex-1 backdrop-blur-sm flex flex-col">
        <div className="bg-linear-to-b from-black to-transparent shrink-0">
          <Header />
        </div>
        <div className="relative flex-1 grid md:grid-cols-5 w-full py-10 px-4 md:px-10 bg-background">
          <div className="md:col-span-2 relative flex justify-center items-center">
            <Image
              src={selectedProduct.image}
              alt="product image"
              width={600}
              height={400}
              className="md:h-120 object-contain"
              loading="eager"
            />
          </div>
          <div className="relative overflow-hidden md:col-span-3 md:px-12 pt-10 pb-5 flex flex-col justify-end gap-16">
            <div className="relative ml-auto">
              <CategorySelect selectedCategory={category} />
            </div>
            <Animate
              className="flex flex-col gap-5"
              initial={{ y: 2, opacity: 0 }}
              animate={{ y: -2, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-semibold font-odorMeanChey text-primary">
                {selectedProduct.name}
              </h1>
              <p className="text-sm">{selectedProduct.description}</p>
              <span className="text-3xl md:text-4xl">{`${selectedProduct.abv}% ABV`}</span>
            </Animate>
            <div className="flex gap-3 w-full p-4 overflow-x-scroll">
              {relatedProducts.map((product, index) => (
                <Link
                  href={`/products/${category}/${convertProductName(
                    product.name
                  )}`}
                  className="relative size-32 shrink-0 rounded-md overflow-hidden bg-amber-100 cursor-pointer hover:scale-105"
                  key={index}
                >
                  <Image
                    src={product.image}
                    alt="product image"
                    fill
                    sizes="100%,100%"
                    className="object-cover"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
