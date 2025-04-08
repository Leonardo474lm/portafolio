"use client";
import ToolbarComponent from "@/pages/toolbarComponent";
import { AspectRatio, Box, Button, Card, Skeleton, Typography } from "@mui/joy";
import { useEffect, useRef, useState } from "react";
import imagentexto from "@/public/textoimagentransparente.png";
import imagenfondo from "@/public/imagenfondo.png";
export default function Home() {
  const toolbarRef = useRef<HTMLDivElement>(null);
  const [toolbarHeight, setToolbarHeight] = useState(0);
  useEffect(() => {
    if (toolbarRef.current) {
      const resizeObserver = new ResizeObserver(([entry]) => {
        setToolbarHeight(entry.contentRect.height);
      });

      resizeObserver.observe(toolbarRef.current);

      // Limpieza
      return () => resizeObserver.disconnect();
    }
  }, []);
  return (
    <div className="bg-[#000000] ">
      <div ref={toolbarRef}>
        <ToolbarComponent />
      </div>
      <section
        className="flex h-screen flex-col items-center justify-center bg-cyan-950"
        style={{
          height: `calc(100vh - ${toolbarHeight}px)`,
          backgroundImage: `url(${imagenfondo.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Card variant="soft" color="primary" className="w-96 p-4">
          <Typography level="h1">Hola, Soy Leonardo</Typography>
          <Typography level="body-sm">
            Soy un desarrollador web y este es mi portafolio personal para ver
            mi avance.
          </Typography>
        </Card>
      </section>

      <section className="flex flex-col sm:flex-row items-center justify-center bg-[#ffffff] h-screen p-4">
        {/* Imagen Card */}
        <div className="w-full sm:w-1/2 p-4">
          <Card variant="outlined" className="w-full p-4">
            <AspectRatio ratio="1" sx={{ width: "100%", height: "auto" }}>
              <img
                src={imagentexto.src}
                loading="lazy"
                alt="Rastreo de Mensajes"
                className="object-cover"
              />
            </AspectRatio>
          </Card>
        </div>

        {/* Texto Card */}
        <div className="w-full sm:w-1/2 p-4">
          <Card
            variant="outlined"
            color="primary"
            className="h-full flex flex-col justify-center"
          >
            <Typography level="h2" className="text-center">
              Rastreo de Mensajes
            </Typography>
            <Typography level="h4" className="text-center">
              (version: 1.0.2)
            </Typography>

            <Typography level="body-sm" className="mt-4 text-center">
              Esta es una aplicación móvil que permite rastrear mensajes de
              WhatsApp desde un archivo Excel.
            </Typography>
            <Button>Descargar Apk</Button>
          </Card>
        </div>
      </section>
      <section className="flex flex-col sm:flex-row items-center justify-center bg-[#2e2899] h-screen p-4">
        <Card variant="outlined" sx={{ width: 343, display: "flex", gap: 2 }}>
          <AspectRatio ratio="21/9">
            <Skeleton variant="overlay">
              <img
                alt=""
                src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
              />
            </Skeleton>
          </AspectRatio>
          <Typography>
            <Skeleton>
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries.
            </Skeleton>
          </Typography>
        </Card>
      </section>
      <footer className="flex items-center justify-center border-t p-2">
        <Typography level="body-sm" className="text-center">
          © 2025 Leonardo. Todos los derechos reservados.
        </Typography>
      </footer>
    </div>
  );
}
