"use client";
import { Avatar, Button, IconButton, Link } from "@mui/joy";
import Image from "next/image";
import imagenfondo from "@/public/xd.png";
import { color } from "bun";
export default function ToolbarComponent() {
  return (
    <>
      <div className=" flex h-16 items-center justify-between bg-[#102158] w-full px-4">
        <div className="relative w-max md:w-32 md:h-15 overflow-hidden  mr-6 ">
          <Image
            src={imagenfondo.src}
            alt="Project Image"
            fill
            className=" "
          />
        </div>
        <nav className="hidden md:flex gap-6 ">
          <Link
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>
        <Button className="relative mr-10" variant="outlined">
          <Link href="/contacto">Contact Me</Link>
        </Button>
      </div>
    </>
  );
}
