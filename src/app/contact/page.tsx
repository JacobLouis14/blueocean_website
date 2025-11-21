import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="min-dvh">
      <div className="bg-primary">
        <Header />
      </div>
      <div className="grid md:grid-cols-2 py-20 gap-8 md:gap-0 h-full">
        <div className="flex flex-col gap-10 px-4 md:px-10">
          <div>
            <h6 className="text-primary text-6xl font-odorMeanChey">
              Contact Us
            </h6>
            <p className="text-gray-400">
              Get in touch with us for your enquries and questions
            </p>
          </div>
          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                className="bg-gray-200 rounded-sm px-3 py-2 outline-none"
                placeholder="Full name"
              />
              <input
                type="text"
                className="bg-gray-200 rounded-sm px-3 py-2 outline-none"
                placeholder="Email"
              />
            </div>
            <input
              type="text"
              className="bg-gray-200 rounded-sm px-3 py-2 outline-none"
              placeholder="Company / Organisation"
            />
            <input
              type="text"
              className="bg-gray-200 rounded-sm px-3 py-2 outline-none"
              placeholder="Phone number"
            />
            <textarea
              name=""
              id=""
              placeholder="Message"
              className="bg-gray-200 rounded-sm px-3 py-2 outline-none"
            ></textarea>
            <button className="bg-primary px-10 py-1.5 rounded-sm text-white w-min cursor-pointer">
              Send
            </button>
          </form>
          <ul className="flex flex-col gap-2 mt-10 px-4 md:px-12 py-4 text-gray-400 list-disc">
            <li>
              The deliveries are effected within two weeks of getting orders.
            </li>
            <li>
              Depending on the type of products (glass/pet bottles, Aseptic
              Packs, cans), stuffing will be either in 20’ or 40’ container.
            </li>
            <li>Minimum order accepted is one container load of a brand.</li>
            <li>
              One 20’ container will carry about 1150 cases of 750 ml glass
              bottles. In the case of pouches or pet bottles, one container can
              carry up to 1,800 cases.
            </li>
            <li>The shipping is made from the nearby Murmugoa port.</li>
          </ul>
        </div>
        <div className="flex flex-col px-4 md:px-10 gap-5">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-2xl">Address</h3>
              <p className="text-sm">
                Blue Ocean Beverages Private Limited <br />
                Plot No. A1, Phase II,
                <br />
                Margao Industrial Estate,
                <br />
                St. Jose De Areal, Salcete,
                <br />
                Goa – 403709
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-2xl">Mobile</h3>
              <p className="text-sm">
                +91-98220 40174 <br />
                +91-93261 02392
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-2xl">Email</h3>
              <p className="text-sm">info@blueoceanbeverages.com</p>
            </div>
          </div>
          <div className="relative h-full w-full">
            <Image
              src={"/assets/vodka_thumbnail.png"}
              alt="image"
              fill
              sizes="100%,100%"
              className="object-cover object-bottom"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
