import CardTemplate from "./card-template";
import imagenfondo from "@/public/imagenfondo.png";
import imagenproyectowsp from "@/public/textoimagen.png";
export default function ProyectoTemplate() {
  return (
    <div id="projects" className="py-16 scroll-mt-20 bg-white w-full">
      <div className="space-y-4 mb-8">
        <h2 className="text-3xl font-bold tracking-tight">My Projects</h2>
        <div className="w-20 h-1 bg-primary"></div>
      </div>

      <div className="grid md:grid-rows-2 md:grid-cols-3 gap-4">
        <CardTemplate
          version="(version: 1.0.2)"
          imagen={imagenproyectowsp}
          info="Esta es una aplicación móvil que permite rastrear mensajes de
                  WhatsApp desde un archivo Excel."
          title=" Aplicacion de Registro de mensajes de Whatsapp."
          reverseAnimation="reverseAnimationFunction"
          handleClick={() => console.log("Solicitar APK")}
        />
        <CardTemplate
          version="(version: 1.0.0)"
          imagen={imagenfondo}
          info="This is a sample project description."
          title="Sample Project"
          reverseAnimation="reverseAnimationFunction"
          handleClick={() => console.log("Card clicked")}
        />
        <CardTemplate
          imagen={imagenfondo}
          version="(version: 1.0.0)"
          info="This is a sample project description."
          title="Sample Project"
          reverseAnimation="reverseAnimationFunction"
          handleClick={() => console.log("Card clicked")}
        />
        <CardTemplate
          imagen={imagenfondo}
          version="(version: 1.0.0)"
          info="This is a sample project description."
          title="Sample Project"
          reverseAnimation="reverseAnimationFunction"
          handleClick={() => console.log("Card clicked")}
        />
      </div>
    </div>
  );
}
