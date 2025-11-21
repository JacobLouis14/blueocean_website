import Image from "next/image";

const whyUsData = [
  {
    title: "Modern Distillery",
    description:
      "Equipped with cutting-edge technology, our facility in Goa ensures precision, quality, and consistency in every bottle.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-factory h-full w-full"
        aria-hidden="true"
      >
        <path d="M12 16h.01"></path>
        <path d="M16 16h.01"></path>
        <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path>
        <path d="M8 16h.01"></path>
      </svg>
    ),
  },
  {
    title: "Decades of Expertise",
    description:
      "With over 30 years in the liquor industry, our team brings deep knowledge in blending, distilling, and product innovation.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-medal h-full w-full"
        aria-hidden="true"
      >
        <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path>
        <path d="M11 12 5.12 2.2"></path>
        <path d="m13 12 5.88-9.8"></path>
        <path d="M8 7h8"></path>
        <circle cx="12" cy="17" r="5"></circle>
        <path d="M12 18v-2h-.5"></path>
      </svg>
    ),
  },
  {
    title: "Premium Quality",
    description:
      "We use only the finest ingredients and processes to craft spirits that meet international standards.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-star h-full w-full"
        aria-hidden="true"
      >
        <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
      </svg>
    ),
  },
  {
    title: "Global Reach",
    description:
      "Trusted by customers across markets, our products are enjoyed both in India and around the world.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-globe h-full w-full"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
        <path d="M2 12h20"></path>
      </svg>
    ),
  },
  {
    title: "Innovative Flavours",
    description:
      "From classic liquors to flavored vodkas and pre-mixed cocktails, we constantly push boundaries to delight every palate.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-flame h-full w-full"
        aria-hidden="true"
      >
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
      </svg>
    ),
  },
  {
    title: "Customer-Centric",
    description:
      "Our product portfolio is designed to offer value and satisfaction to a wide range of consumers and markets.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-user h-full w-full"
        aria-hidden="true"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
  },
];

const WhyUs = () => {
  return (
    <section
      id="whyUs"
      className="min-h-dvh flex flex-col gap-10 py-8 px-4 md:px-20"
    >
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col gap-15 pb-10 md:pb-0">
          <div className="flex flex-col pt-10">
            <h3 className="font-odorMeanChey text-5xl text-primary">
              Why Choose Us
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Blending tradition, innovation, and passion to craft exceptional
              spirits.
            </p>
          </div>
          <div className="flex flex-col gap-8 md:pr-20">
            {[0, 1, 2].map((number, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-5"
              >
                <div className="w-16 h-16 bg-primary/20 md:bg-transparent px-2.5 py-3 rounded-full">
                  {whyUsData[number].icon}
                </div>
                <div className="flex flex-col gap-3">
                  <h6 className="font-semibold text-gray-700">
                    {whyUsData[number].title}
                  </h6>
                  <p className="text-gray-700 text-xs md:text-base">
                    {whyUsData[number].description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-40 md:h-full flex items-center w-full">
          <Image
            src={"/assets/why_us_nobg.png"}
            alt="Image"
            fill
            sizes="100%,100%"
            className="object-contain"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 h-full">
        <div className="order-2 md:order-1 relative h-40 md:h-full flex items-center w-full">
          <Image
            src={"/assets/why_us_nobg.png"}
            alt="Image"
            fill
            sizes="100%,100%"
            className="object-contain"
          />
        </div>
        <div className="order-1 md:order-2 flex flex-col gap-8 md:pl-20 py-10 md:py-30">
          {[3, 4, 5].map((number, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-5"
            >
              <div className="w-16 h-16 bg-primary/20 md:bg-transparent p-2 rounded-full">
                {whyUsData[number].icon}
              </div>
              <div className="flex flex-col gap-3">
                <h6 className="font-semibold text-gray-700">
                  {whyUsData[number].title}
                </h6>
                <p className="text-gray-700 text-xs md:text-base">
                  {whyUsData[number].description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
