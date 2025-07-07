import CardTemplate from "../card-template";
import nexttosoon from "@/public/nexttosoon.jpg";
import imagenproyectowsp from "@/public/Gemini_Generated_Image_wserzvwserzvwser2.png";
export default function ProyectoTemplate() {
  return (
    <div id="projects" className="p-8 scroll-mt-20 bg-black w-full">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-[#102158] justify-center items-center text-center sm:text-left">My Projects</h2>
      </div>

      <div className="grid md:grid-rows-2 md:grid-cols-3 gap-4  my-8">
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
          imagen={nexttosoon}
          info="Descripcion . . ."
          title="Aplicacion de Registro de PAGOS de Yape y Plin y depositos bancarios"
          reverseAnimation="reverseAnimationFunction"
          handleClick={() => console.log("Card clicked")}
        />
        <CardTemplate
          imagen={nexttosoon}
          version="(version: 1.0.0)"
         info="Descripcion . . ."
          title="Sample Project"
          reverseAnimation="reverseAnimationFunction"
          handleClick={() => console.log("Card clicked")}
        />
        <CardTemplate
          imagen={nexttosoon}
          version="(version: 1.0.0)"
       info="Descripcion . . ."
           title="Sample Project"
          reverseAnimation="reverseAnimationFunction"
          handleClick={() => console.log("Card clicked")}
        />
      </div>
    </div>
  );
}
