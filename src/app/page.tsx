import Footer from "@/components/footer";
import About from "@/sections/about";
import Category from "@/sections/category";
import Frame01 from "@/sections/home_frame_01";
import Landing from "@/sections/landing";
import WhyUs from "@/sections/why_us";

const Home = () => {
  return (
    <main className="">
      <Landing />
      <Category />
      <About />
      <Frame01 />
      <WhyUs />
      <Footer />
    </main>
  );
};

export default Home;
