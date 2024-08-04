"use client";

// utils
import { stats } from "@/constants";
import { cn } from "@/lib/utils";

// components
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.5, duration: 0.5, ease: "easeInOut" },
        }}
        className="container mx-auto"
      >
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              key={stat.text}
            >
              <CountUp
                end={stat.num}
                duration={5}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={cn("leading-snug text-white/80", {
                  "max-w-[100px]": stat.text.length < 15,
                  "max-w-[150px]": stat.text.length > 15,
                })}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
