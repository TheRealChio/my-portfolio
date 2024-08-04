"use client";

// hooks
import { useState } from "react";

// utils
import { links } from "@/constants";
import { cn } from "@/lib/utils";

// components
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

// icons
import { CiMenuFries } from "react-icons/ci";

interface NavigationProps {
  isMobile?: boolean;
}

const Navigation = ({ isMobile = false }: NavigationProps) => {
  const [activeLink, setActiveLink] = useState<string>("#home");

  return (
    <>
      {/* desktop navigation */}
      {!isMobile && (
        <nav className="flex gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={cn(
                "capitalize font-medium hover:text-accent-hover transition-all duration-300 ease-in-out",
                {
                  "text-accent border-b-2 border-accent":
                    link.path === activeLink,
                }
              )}
              onClick={() => setActiveLink(link.path)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}

      {/* mobile navigation */}
      {isMobile && (
        <Sheet>
          <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-3xl text-accent" />
          </SheetTrigger>
          <SheetContent className="flex flex-col">
            <div className="mt-40 mb-20 text-center text-2xl">
              <Link href="#home" onClick={() => setActiveLink("#home")}>
                <h2 className="text-2xl font-semibold">
                  Daniel<span className="text-accent">.</span>
                </h2>
              </Link>
            </div>
            <nav className="flex flex-col gap-10 items-center justify-center">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={cn(
                    "capitalize font-medium hover:text-accent-hover transition-all duration-300 ease-in-out",
                    {
                      "text-accent border-b-2 border-accent":
                        link.path === activeLink,
                    }
                  )}
                  onClick={() => setActiveLink(link.path)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
};

export default Navigation;
