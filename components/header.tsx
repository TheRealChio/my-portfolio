"use client";

// components
import { Button } from "./ui/button";
import Link from "next/link";
import Navigation from "./navigation";

// hooks
import { useState } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState<string>("/");
  return (
    <header className="py-8 text-white fixed top-0 w-full bg-primary z-[10000]">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Daniel<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop navigation & cta */}
        <div className="hidden xl:flex items-center gap-8">
          <Navigation activeLink={activeLink} setActiveLink={setActiveLink} />
          <Link href="/about" onClick={() => setActiveLink("/about")}>
            <Button variant="outline" className="rounded-xl">
              Get in touch
            </Button>
          </Link>
        </div>

        {/* mobile navigation */}
        <div className="xl:hidden">
          <Navigation
            isMobile
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
