"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/lib/utils";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="fixed w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl md:text-[1.4em]  mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">
            <HoveredLink href={"/"}>Home</HoveredLink>
          </MenuItem>
        </Link>
        <Link href={"/projects"}>
          <MenuItem setActive={setActive} active={active} item="Projects">
            <HoveredLink href={"projects"}>Projects</HoveredLink>
          </MenuItem>
        </Link>
        <Link href={"/resume"}>
          <MenuItem setActive={setActive} active={active} item="Resume">
            <HoveredLink href="/resume">Resume</HoveredLink>
          </MenuItem>
        </Link>
        <Link href={"/skills"}>
          <MenuItem setActive={setActive} active={active} item="Skills">
            <HoveredLink href={"/skills"}>Skills</HoveredLink>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
