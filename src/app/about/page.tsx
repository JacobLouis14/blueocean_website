import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="min-h-dvh">
      <div className="relative min-h-[10vh] md:h-120 bg-[url(/assets/about_header_image.jpg)] bg-center bg-cover">
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-black to-transparent"></div>
        <div className="relative">
          <Header />
        </div>
      </div>
      <div className="p-4 md:p-20 flex flex-col gap-20">
        <h6 className="text-center text-primary text-4xl md:text-8xl font-odorMeanChey">
          Explore our journey
        </h6>
        <div className="grid lg:grid-cols-2 gap-5 min-h-120">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <h3 className="font-odorMeanChey text-primary text-3xl">About</h3>
              <p className="text-sm text-gray-400">
                Blue Ocean Beverages – Tradition, Innovation, and Excellence in
                Liquor Manufacturing
              </p>
            </div>
            <p className="text-sm md:text-base">
              Much like the Goan food which has earned popularity as very
              pleasing to the palate, the liquors of Goa have a long tradition
              of superior quality and taste. The food and liquor are the
              essential ingredients of the famous Goan appetite for fine dining,
              joyful drinking and merry making. The Portuguese connection which
              has left its indelible influences on many aspects of life in Goa
              has also contributed to the development of skills for making
              liquor. From the colonial days the alcohol trade and industry has
              enjoyed a dominant position in the economy of the state and its
              unique culture. The Goan highlands and coastal areas bear a
              striking resemblance to some of the famous liquor producing parts
              of Scotland in their scenic beauty and pristine ambience. The
              welcoming shores of this small state have enticed some of the
              major multinational liquor companies to set up their manufacturing
              bases here. The list includes Seagram (Pernod Ricard), Bacardi, Mc
              Dowells & Shaw Wallace (United Spirits) among others of
              international repute. Their presence and operations here have
              brought about further improvements to the liquor industry which
              has modernized employing the latest in alcohol technology. Various
              brands of liquor produced here are being exported to many foreign
              markets, which is testimony to the high standards of the products.
            </p>
          </div>
          <div className="relative w-full h-120 lg:h-full overflow-hidden">
            <Image
              src={"/assets/vodka_thumbnail.png"}
              alt="Image"
              width={400}
              height={400}
              className="absolute top-16 left-8 mask-l-from-40% from-transparent rounded-md"
            />
            <Image
              src={"/assets/vodka_thumbnail.png"}
              alt="Image"
              width={400}
              height={400}
              className="absolute bottom-0 sm:left-49 rounded-md"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="hidden lg:block col-span-1 relative w-full">
            <Image
              src={"/assets/vodka_thumbnail.png"}
              alt="Image"
              width={400}
              height={400}
              className="w-full h-140 object-cover"
            />
          </div>
          <div className="order-1 md:order-2 col-span-2 flex flex-col justify-evenly">
            <p className="text-4xl md:text-8xl text-primary font-extralight">
              <span className="font-bold">Achivemets </span>
              on the long run
            </p>
            <div className="px-10 py-5 flex flex-col md:flex-row gap-5 justify-between items-center bg-white md:h-40 rounded-md text-primary">
              <div className="flex flex-col items-center font-extralight">
                <span className="font-semibold text-4xl">3</span>
                <span className="text-xl">states</span>
              </div>
              <div className="flex flex-col items-center font-extralight">
                <span className="font-semibold text-4xl">1000</span>
                <span className="text-xl">cases by day</span>
              </div>
              <div className="flex flex-col items-center font-extralight">
                <span className="font-semibold text-4xl">1</span>
                <span className="text-xl">collabrations</span>
              </div>
              <div className="flex flex-col items-center font-extralight">
                <span className="font-semibold text-4xl">1024</span>
                <span className="text-xl">labels</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-5">
          <div className="col-span-1 flex items-start">
            <h6 className="text-primary/50 md:verticalText text-6xl md:text-9xl h-min font-bold">
              Who we are?
            </h6>
          </div>
          <div className="lg:col-span-2">
            Blue Ocean Beverages is a leading manufacturer of liquor in Goa
            offering a wide range of choice to the connoisseurs of quality
            liquor. The company’s portfolio of brands includes Rum, Vodka,
            Whisky, Brandy and Gin. The company management has over three
            decades of experience in the liquor trade covering all important
            aspects of liquor manufacture namely primary alcohol distillation,
            multiple column redistillation for producing high purity spirits,
            blending, bottling and packaging. By selecting and sourcing high
            quality ingredients (Extra Neutral Alcohol, Grain Spirits, Malt and
            Grape spirits and natural extracts and flavors) the team at Blue
            Ocean Beverages has developed many market leading liquor brands of
            outstanding quality which compare favorably with the rums of the
            Caribbean, vodkas of Russia, American Bourbon and French brandy. Our
            team of blenders are innovative and continuously focused on efforts
            to develop new products to meet new consumer tastes and preferences.
            This effort has helped the company launch the new series of flavored
            vodkas that have captured the imagination of the young generation.
            Constant improvement of products by research and innovation is an
            important aspect of the company’s strategy for future development
            and growth.
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="col-span-1 relative w-full flex flex-col gap-5 md:px-10">
            <Image
              src={"/assets/vodka_thumbnail.png"}
              alt="Image"
              width={400}
              height={400}
              className="w-full h-180 object-cover"
            />
            <p>
              Blue Ocean Beverages’ modern manufacturing facility at Goa has
              capacity to produce over 6000 cases of liquor per day. The plant
              has alcohol storage of 3,50,000 litres, blending and maturation
              capacity of 2,00,000 litres and a bonded warehouse to store 15,000
              cases of finished products. India’s oldest liquor and beer
              producer, M/s Mohan Meakin Limited (established in 1855 originally
              as Dyer Meakin Breweries) whose famous “Old Monk Rum” is a brand
              icon, have identified Blue Ocean Beverages’ manufacturing facility
              at Goa for producing their prestigious liquor brands. The “Old
              Monk Rum” produced by Blue Ocean Beverages in Goa has a
              monopolistic hold over the entire states’ rum market. Blue Ocean
              Beverages Goa plant is the only manufacturer in India of Premium
              Agave Spirit based liquors (equivalent to the Tequila liquors of
              Mexico).
            </p>
          </div>
          <div className="col-span-1 relative w-full flex flex-col gap-5 md:px-10 lg:pt-60">
            <p>
              We care for our customers and are committed to retaining their
              loyalty to our brands. We work in total co-operation with our
              distributors who reach our products to the final consumer. We
              build strong relationships within our marketing network and the
              feedback we get from our associates is utilised in product
              improvement and development. The company’s aim is to provide our
              diverse community of customers at different income levels with a
              variety of “value for money” products across a full range of price
              points. In foreign markets where Blue Ocean Beverages is not able
              to establish offices, the company proposes to market its products
              through business associates and third party distributors, to whom
              our commitment is total and of long standing.
            </p>
            <Image
              src={"/assets/vodka_thumbnail.png"}
              alt="Image"
              width={400}
              height={400}
              className="w-full h-180 object-cover"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
