import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import SegevLogo from "../assets/logo.png";

const NAV_LINKS = [
  { to: "/", label: "HOME" },
  { to: "/about", label: "ABOUT" },
  { to: "/service", label: "SERVICE" },
  { to: "/blog", label: "BLOG" },
  { to: "/contact", label: "CONTACT" },
];

const Nav = () => {
  const location = useLocation();

  return (
    <div
      className="p-8 border-b-1 border-b-black flex flex-col items-center "
      style={{ backgroundColor: "rgba(237, 235, 228, 1)" }}
    >
      <div className="max-w-[1100px] flex gap-15 justify-between  w-full">
        <Link to="/" className="mt-2" aria-label="Sapir Skincare home">
          <img src={SegevLogo} className="max-h-[40px]" alt="Sapir Skincare logo" />
        </Link>

        <div className="flex md:hidden items-center">
          <Sheet>
            <SheetTrigger asChild>
              <button type="button" aria-label="Open menu" className="cursor-pointer">
                <GiHamburgerMenu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile">
                <ul className="flex flex-col gap-5 p-5">
                  {NAV_LINKS.map(({ to, label }) => (
                    <li key={to}>
                      <SheetClose asChild>
                        <Link
                          to={to}
                          aria-current={location.pathname === to ? "page" : undefined}
                        >
                          <h2 className={`p-2 text-xl ${location.pathname === to ? "text-gray-400" : ""}`}>
                            {label}
                          </h2>
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <nav aria-label="Primary" className="hidden md:flex gap-15">
          {NAV_LINKS.map(({ to, label }) => (
            <Link key={to} to={to} className="cursor-pointer" aria-current={location.pathname === to ? "page" : undefined}>
              <div className={`p-2 ${location.pathname === to ? "border-b-2 border-black" : ""}`}>
                <h2>{label}</h2>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Nav;
