// components
import IntroText from "@/components/introText";
import Photo from "@/components/photo";
import Stats from "@/components/stats";

// types
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Daniel Berneisch",
};

const Home = () => {
  return (
    <section className="h-screen flex flex-col justify-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* intro text */}
          <IntroText />
          {/* photo */}
          <div className="order-1 xl-order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
