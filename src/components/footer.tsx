import Categories from "@/constants/category.data.json";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative flex flex-col gap-10 px-4 md:px-20 pb-14 pt-5 md:pt-0 bg-primary text-white">
      <h1 className="text-[min(8vw,8rem)] text-center font-rakkas bg-linear-to-t from-primary to-white text-transparent bg-clip-text">
        BlueOcean Beverages
      </h1>
      <div className="grid md:grid-cols-3 gap-5 md:gap-0">
        <div className="order-3 md:order-1 flex flex-col gap-5">
          <div className="flex gap-3">
            <h1>BlueOcean Beverages.</h1>
          </div>
          <p className="font-extralight text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            aliquam quae. Quae ducimus unde, ipsa facilis est iusto quisquam ea
            tempora necessitatibus magnam cupiditate adipisci. Aut porro dicta
            maxime omnis!
          </p>
        </div>
        <div className="order-2 flex flex-col gap-5 md:items-center text-start">
          <h6 className="font-semibold">Explore</h6>
          <ul className="flex flex-col gap-2 font-extralight">
            <Link href={"/home"}>Home</Link>
            <Link href={"/products/whisky/highbury-classic-whisky"}>
              Products
            </Link>
            <Link href={"/about"}>About us</Link>
            <Link href={"/contact"}>Contact</Link>
          </ul>
        </div>
        <div className="order-1 md:order-3 flex flex-col gap-5">
          <h6 className="font-semibold">Explore by categories</h6>
          <div className="grid grid-cols-3 gap-2 justify-between w-full font-extralight">
            {Categories.map((c, index) => (
              <Link key={index} href={c.link}>
                {c.name}
              </Link>
            ))}
            {/* <ul className="flex flex-col gap-2">
              <li>Home</li>
              <li>Products</li>
              <li>About us</li>
              <li>Contact</li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li>Home</li>
              <li>Products</li>
              <li>About us</li>
              <li>Contact</li>
            </ul> */}
            <div></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-xs font-extralight">
        <h6>© 2025 Blue Ocean Beverages Pvt. Ltd. All rights reserved.</h6>
        <div className="flex gap-5"></div>
      </div>
    </div>
  );
};

export default Footer;
