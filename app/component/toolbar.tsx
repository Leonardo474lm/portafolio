"use client";
import { Avatar, Button, IconButton, Link } from "@mui/joy";
import Image from "next/image";
import imagenfondo from "@/public/logoLeo.png";
import { color } from "bun";
export default function ToolbarComponent() {
  return (
    <>
      <div className=" flex h-16 items-center justify-between bg-stone-950 w-full ">
        <div className="relative w-max md:w-15 md:h-15 rounded-full overflow-hidden border-4 border-primary/20 mr-6 bg-amber-300 ml-4">
          <Image
            src={imagenfondo.src}
            alt="Project Image"
            fill
            objectFit="cover"
            className="rounded-t-lg "
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
        <Button className="relative mr-10" color="primary">
          <Link href="/contacto" >Contact Me</Link>
        </Button>
      </div>
    </>
  );
}
