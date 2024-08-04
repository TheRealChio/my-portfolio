// components
import { Button } from "./ui/button";
import Link from "next/link";
import Navigation from "./navigation";

const Header = () => {
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
          <Navigation />
          <Link href="/contact">
            <Button variant="outline" className="rounded-xl">
              Get in touch
            </Button>
          </Link>
        </div>

        {/* mobile navigation */}
        <div className="xl:hidden">
          <Navigation isMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
