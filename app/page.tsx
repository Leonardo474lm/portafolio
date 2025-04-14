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

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const [toolbarHeight, setToolbarHeight] = useState(0);

  animate("span", {
    // Property keyframes
    y: [
      { to: "-2.75rem", ease: "outExpo", duration: 600 },
      { to: 0, ease: "outBounce", duration: 800, delay: 100 },
    ],
    // Property specific parameters
    rotate: {
      from: "-1turn",
      delay: 0,
    },
    delay: (_, i) => i * 50, // Function based value
    ease: "inOutCirc",
    loopDelay: 1000,
    loop: true,
  });
  useEffect(() => {
    if (toolbarRef.current) {
      const resizeObserver = new ResizeObserver(([entry]) => {
        setToolbarHeight(entry.contentRect.height);
      });
      resizeObserver.observe(toolbarRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);
  engine.defaults.playbackEase = "inOut";
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
                layout="fill"
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
            <Card className="overflow-hidden">
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
                <Typography level="body-xs">(version: 1.0.2)</Typography>
                <Button
                  className=""
                  variant="solid"
                  onClick={() => {
                    handleSendEmail();
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
