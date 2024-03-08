"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const paths = [
  { path: "/test-api", name: "Probar API YouTube" },
  {
    path: "/watch",
    name: "Ver video",
  },
  {
    path: "/create",
    name: "Crear",
  },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <div className="flex justify-start gap-3 m-2">
      {
        paths.map((item) => (
          <Link
          key={item.path}
          href={item.path}
          className={`${path === item.path && "border-b-2 border-blue-900"} p-3 transition-all ease-in-out`}>
            {item.name}
          </Link>
        ))
      }
    </div>
  );
}
