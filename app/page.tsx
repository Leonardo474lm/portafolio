"use client";
import ToolbarComponent from "@/pages/toolbar";
import { animate, Target, utils, waapi, engine } from "animejs";
import {
  AspectRatio,
  Box,
  Button,
  Card,
  Divider,
  Link,
  Skeleton,
  Typography,
} from "@mui/joy";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import imagentexto from "@/public/textoimagentransparente.png";
import imagenfondo from "@/public/imagenfondo.png";
import imagenPerfil from "@/public/perfil.jpeg";
import SkeletonComponent from "./component/skeleton";
import Contacto from "@/pages/contacto";
import { Console } from "console";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const [toolbarHeight, setToolbarHeight] = useState(0);
  const squareRefs = useRef<HTMLDivElement[]>([]);
  const [validateonClick, setvalidateonClick] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const spans = document.querySelectorAll("span");
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
  function handleonMouseEnter() {
    setvalidateonClick(!validateonClick);
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      const square = document.querySelectorAll(".square");
      animate(square, {
        x: (target, index, length) =>
          parseFloat(target.dataset.value || "0") * (length - index),
        y: (_: unknown, i: number) => 50 + -50 * i,
        scale: (_: unknown, i: number, l: number) => (l - i) * 0.75,
        rotate: () => utils.random(-360, 360),
        borderRadius: () => `+=${utils.random(0, 8)}`,
        duration: () => utils.random(1200, 1800),
        delay: () => utils.random(0, 400),
        ease: "outElastic(1, .5)",
      });
    }
  }, [validateonClick]);

  useEffect(() => {
    if (toolbarRef.current) {
      const resizeObserver = new ResizeObserver(([entry]) => {
        setToolbarHeight(entry.contentRect.height);
      });
      resizeObserver.observe(toolbarRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  const handleSendEmail = async () => {
    setLoading(true);
    setSuccess(false);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "arthur123piero123@gmail.com",
          subject: "Correo de prueba",
          message: "Hola desde el botón 📨",
        }),
      });

      if (res.ok) {
        setSuccess(true);
        console.log("Correo enviado con éxito");
      } else {
        console.error("Error al enviar correo");
      }
    } catch (err) {
      console.error("Error de red:", err);
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <div className="bg-[#000000] ">
      <header ref={toolbarRef}>
        <ToolbarComponent />
      </header>
      <main className="container py-10 align-center flex-col">
        <section className="py-20 md:py-28 flex flex-col md:flex-row items-center gap-8  m-5">
          <div className="flex-1 space-y-4">
            <h1 className=" flex text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm
              <h1 className="flex">
                <span>&nbsp;</span>
                <span>L</span>
                <span>E</span>
                <span>O</span>
                <span>N</span>
                <span>A</span>
                <span>R</span>
                <span>D</span>
                <span>O</span>
              </h1>
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
              <Link
                href="https://github.com/Leonardo474lm"
                target="_blank"
                rel="noopener noreferrer"
                bgcolor={"white"}
              >
                <Button variant="plain" size="md" className="bg-amber-200">
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                bgcolor={"white"}
              >
                <Button variant="plain" size="md">
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="" bgcolor={"white"}>
                <Button variant="plain" size="md">
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
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
        </section>

        <section id="projects" className="py-16 scroll-mt-20 m-5">
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl font-bold tracking-tight">My Projects</h2>
            <div className="w-20 h-1 bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="medium row ">
              <div className="square" data-x="170">
                imagen1
              </div>
            </div>
            <div className="medium row ">
              <div className="square" data-x="80">
                imagen2
              </div>
            </div>
            <div className="medium row ">
              <div className="square" data-x="270">
                imagen3
              </div>
            </div>
            <Card
              className="overflow-hidden"
              onMouseEnter={() => {
                handleonMouseEnter();
              }}
            >
              <div className="relative h-48">
                <Image
                  src={imagenfondo.src}
                  alt="Project Image"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              <div className="p-4">
                <Typography level="h4" className="font-bold">
                  Aplicacion de Registro de mensajes de Whatsapp.
                </Typography>
                <Typography level="body-sm">
                  Esta es una aplicación móvil que permite rastrear mensajes de
                  WhatsApp desde un archivo Excel.
                </Typography>
                <h5>(version: 1.0.2)</h5>
                <Button
                  className=""
                  variant="solid"
                  onClick={() => {
                    console.log("Descargar APK");
                    //handleSendEmail();
                  }}
                >
                  Descargar Apk{" "}
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-center border-t p-2">
        <Typography level="body-sm" className="text-center">
          © 2025 Leonardo. Todos los derechos reservados.
        </Typography>
      </footer>
    </div>
  );
}
