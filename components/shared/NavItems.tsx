"use client";
import Link from "next/link";
import { headerLinks } from "./../../constants/index";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className="md:flex-between md:flex-row flex flex-col  gap-5 justify-between items-start">
      {headerLinks.map((navlink) => {
        const isActive = pathname === navlink.route;
        return (
          <li
            key={navlink.route}
            className={`${
              isActive && "text-primary-500"
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={navlink.route}>{navlink.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
