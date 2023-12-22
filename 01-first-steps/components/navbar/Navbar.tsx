import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import React from "react";
import { ActiveLink } from "..";

const navitems = [
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/pricing",
    text: "Pricing",
  },
  {
    path: "/contact",
    text: "Contact",
  },
];

export const Navbar = () => {
  return (
    <div className="flex bg-blue-800 bg-opacity-30 p-3 m-2 rounded">
      <Link href={"/"} className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>

      <div className="flex flex-1"></div>

      {
        navitems.map((item) => (
          <ActiveLink key={item.path} {...item}/>
        ))
      }
    </div>
  );
};
