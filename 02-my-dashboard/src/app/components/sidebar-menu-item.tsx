"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
}

const SidebarMenuItem = ({ path, icon, title, subtitle }: Props) => {
  const pathName = usePathname();
  return (
    <Link
      href={path}
      className={`w-full 
        px-2 
        inline-flex 
        space-x-2 
        items-center 
        border-b 
        border-slate-700 py-3 
        ${pathName === path ? "bg-blue-800" : "bg-transparent"}
        hover:bg-white/5
        transition
        ease-linear
        duration-150`}
      >
      <div>{icon}</div>
      <div className="flex flex-col">
        <h1 className="text-lg font-bold leading-5 text-white">{title}</h1>
        <span className="text-sm text-white/50 hidden md:block">
          {subtitle}
        </span>
      </div>
    </Link>
  );
};

export default SidebarMenuItem;
