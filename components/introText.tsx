"use client";

// components
import { Button } from "@/components/ui/button";
import Socials from "@/components/socials";
import { motion } from "framer-motion";

// icons

import { FiDownload } from "react-icons/fi";
import Link from "next/link";

const IntroText = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
      }}
      className="text-center xl:text-left order-2 xl:order-none"
    >
      <span className="text-xl">Frontend Developer</span>
      <h2 className="h1 mb-6">
        Hello I&apos;m <br /> <span className="text-accent">Daniel B.</span>
      </h2>
      <p className="max-w-[500px] mb-9 text-white/80">
        I excel at crafting elegant digital experiences and I am proficient in
        various programming languages and technologies.
      </p>

      {/* cta & socials */}
      <div className="flex flex-col xl:flex-row items-center gap-8">
        <Link
          target="_blank"
          href="/assets/resume/Daniel-Berneisch-CV.pdf"
          download="Daniel-Berneisch-CV.pdf"
        >
          <Button
            variant="outline"
            size="lg"
            className="uppercase flex items-center gap-2 rounded-xl"
          >
            <span>Download CV</span>
            <FiDownload className="text-xl" />
          </Button>
        </Link>

        <div className="mb-8 xl:mb-0">
          <Socials
            containerStyles="flex gap-3"
            iconStyles="w-14 h-14 border border-accent rounded-xl flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-300 ease-in-out"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default IntroText;
