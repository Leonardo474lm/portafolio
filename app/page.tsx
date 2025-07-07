"use client";
import ToolbarComponent from "@/app/component/toolbar";
import {
  Typography,
} from "@mui/joy";
import { useEffect, useRef, useState } from "react";
import PrincipalPage from "./component/page/principal";
import ProyectoTemplate from "./component/page/proyect";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const toolbarRef = useRef<HTMLDivElement>(null);
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
    <div className=" ">
      <header  className="fixed top-0 left-0 w-full z-50 bg-white shadow" ref={toolbarRef}>
        <ToolbarComponent />
      </header>
      <main className="align-center flex-col w-full">
        <PrincipalPage />
        <ProyectoTemplate />
      </main>
      <footer className="flex items-center justify-center border-t p-2">
        <Typography level="body-sm" className="text-center">
          © 2025 Leonardo. Todos los derechos reservados.
        </Typography>
      </footer>
    </div>
  );
}
