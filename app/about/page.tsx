// components
import Resume from "@/components/resume";

// types
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Daniel Berneisch",
};

const About = () => {
  return <Resume />;
};

export default About;
