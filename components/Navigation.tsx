"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setIsRouting] = useState(false);
  const path = usePathname();
  const [isActive, setIsActive] = useState(false);
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);
  return (
    <div
      style={{ left: "40%" }}
      className="absolute w-[20%] md:w-[20%] rounded-full flex justify-between items-center border bg-transparent border-white px-4 py-2"
    >
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link
          key={nav.name}
          href={nav.link}
          className="mb-1 mt-1 pl-4 min-w-[20%]"
        >
          <nav.icon
            className={`w-[24px] h-[24px] ${
              path === nav.name ? "text-purple-800" : "text-white"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
