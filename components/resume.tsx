"use client";

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Icon from "@/components/icon";

// utils
import { about, education, experience, skills } from "@/constants";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.5, ease: "easeIn" },
      }}
      className="xl:h-screen flex items-center justify-center py-12 xl:py-0"
      id="resume"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1, duration: 0.5, ease: "easeIn" },
            }}
            className="min-h-[70vh] w-full"
          >
            <TabsContent value="experience" className="w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeIn" },
                }}
                className="flex flex-col gap-8 text-center xl:text-left"
              >
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="w-full text-white/80 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {experience.items.map((item) => (
                    <li
                      key={item.company}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                        {item.position}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/80">{item.company}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeIn" },
                }}
                className="flex flex-col gap-8 text-center xl:text-left"
              >
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="w-full text-white/80 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {education.items.map((item) => (
                    <li
                      key={item.institution}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                    >
                      <span className="text-accent">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                        {item.degree}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <p className="text-white/80">{item.institution}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeIn" },
                }}
                className="flex flex-col gap-8 text-center xl:text-left"
              >
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="w-full text-white/80 mx-auto xl:mx-0">
                  {skills.description}
                </p>

                <ul className="flex flex-wrap justify-center xl:justify-start gap-4 xl:gap-8">
                  {skills.items.map((item) => (
                    <li key={item.title}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-20 h-20 bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div>
                              {
                                <Icon
                                  icon={[{ name: item.icon }]}
                                  className="w-10 h-10 text-white group-hover:!text-accent transition-all duration-300 ease-in-out"
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
              </motion.div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeIn" },
                }}
                className="flex flex-col gap-8"
              >
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="w-full text-white/80 mx-auto xl:mx-0">
                  {about.description}
                </p>

                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item) => (
                    <li
                      key={item.fieldName}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-accent">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </TabsContent>
          </motion.div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
