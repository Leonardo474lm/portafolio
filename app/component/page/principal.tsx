"use client";
import { Button, Link } from "@mui/joy";
import Image from "next/image";
import imagenfondo from "@/public/logoLeonardo.png";
import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

export default function PrincipalPage() {
  const [handleCard, sethandleCard] = useState(false);
  const squareRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const spans = document.querySelectorAll(".spant");
      animate(spans, {
        y: [
          { to: "-2.75rem", ease: "outExpo", duration: 600 },
          { to: 0, ease: "outBounce", duration: 800, delay: 100 },
        ],
        rotate: {
          from: "-1turn",
          delay: 0,
        },
        delay: (_, i) => i * 50,
        ease: "inOutCirc",
        loopDelay: 1000,
        loop: true,
      });

      if (squareRefs.current.length > 0) {
        animate(squareRefs.current, {
          /* ... */
        });
      }
    }
  }, []);
    useEffect(() => {
        animate(".square", { x: "17rem" });
        animate("#css-selector-id", { rotate: "1turn" });
        animate(".row:nth-child(3) .square", { scale: [1, 0.5, 1] });
      }, [handleCard]);
      //h-[calc(100vh-4rem)]
  return (
    <div className=" flex flex-col md:flex-row items-center w-full h-screen overflow-auto p-4  bg-gradient-to-b from-[#102158] to-[#000000]">
      <div className="flex-1 max-h-max justify-items-center  pt-30 pl-4 pr-4 ">
        <h1 className=" flex text-4xl md:text-6xl font-bold tracking-tight notranslate z-10 text-[#ff3c00]">
       Hi, I'm
       
          <div className="flex text-[#ffffff]">
            <span>&nbsp;</span>
            <span className="spant notranslate">L</span>
            <span className="spant notranslate">E</span>
            <span className="spant notranslate">O</span>
            <span className="spant notranslate">N</span>
            <span className="spant notranslate">A</span>
            <span className="spant notranslate">R</span>
            <span className="spant notranslate">D</span>
            <span className="spant notranslate">O</span>
          </div>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Fullstack Developer
        </p>
        <p className="text-muted-foreground max-w-md"></p>
        <div className="flex gap-4 pt-4 ">
          <Button>View Projects</Button>
          <Button variant="outlined">Download CV</Button>
        </div>
        <div className="flex gap-4 pt-4 bg">
          <Link href="">
            <Button variant="plain" size="sm">
              <span className="">GitHub</span>
            </Button>
          </Link>
          <Link href="https://linkedin.com">
            <Button variant="plain" size="sm">
              <span className="">LinkedIn</span>
            </Button>
          </Link>
          <Link href="https://linkedin.com">
            <Button variant="plain" size="sm">
              <span className="">Email</span>
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center  ">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
          <Image
            src={imagenfondo.src}
            alt="Project Image"
            fill
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
      </div>
    </div>
  );
}
