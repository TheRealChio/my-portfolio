"use client";

// commponents
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Icon from "./icon";
import Link from "next/link";
import { motion } from "framer-motion";
import SliderButtons from "./sliderButtons";
import { BsArrowUpRight } from "react-icons/bs";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

// hooks
import { useState } from "react";

// utils
import Image from "next/image";
import { projects } from "@/constants";

// styles
import "swiper/css";

const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;
    setActiveSlide(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.5, ease: "easeIn" },
      }}
      className="h-screen flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-7">
          <div className="group w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-7">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline text-outline-hover transition-all duration-300 ease-in-out flex justify-between">
                {activeSlide.num}
                <Link
                  href={activeSlide.link}
                  target="_blank"
                  className="w-14 h-14 rounded-xl bg-[#232329] flex items-center justify-center group/link"
                >
                  <BsArrowUpRight className="w-8 h-8 text-white group-hover/link:text-accent-hover xl:rotate-90 xl:group-hover/link:rotate-0 transition-all duration-300 ease-in-out" />
                </Link>
              </div>

              <h2 className="text-[42px] font-bold leading-none text-accent transition-all duration-300 ease-in-out capitalize">
                {activeSlide.title}
              </h2>

              <p className="text-white/60">{activeSlide.description}</p>
            </div>

            <ul className="mt-10 xl:mt-0 flex flex-wrap gap-4 border-b border-white/20 pb-5">
              {activeSlide.stack.map((item) => (
                <li key={item.title}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-12 h-12 bg-[#232329] rounded-xl flex justify-center items-center group/icon">
                        <div>
                          {
                            <Icon
                              icon={[{ name: item.icon }]}
                              className="w-7 h-7 text-white group-hover/icon:!text-accent transition-all duration-300 ease-in-out"
                            />
                          }
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">{item.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full rounded-xl">
                  <div className="h-[370px] xl:h-[460px] relative group flex justify-center items-center">
                    <div></div>
                    <div>
                      <Image
                        src={project.image}
                        fill
                        className="object-cover rounded-xl"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-[#232329] text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center group rounded-xl"
                iconStyles="text-white group-hover:text-accent transition-all duration-300 ease-in-out"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
