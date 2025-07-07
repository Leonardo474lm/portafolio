"use client";
import { Button, Card, Typography } from "@mui/joy";
import imagenfondo from "@/public/imagenfondo.png";
import Image, { StaticImageData } from "next/image";

interface propsValue {
  title: String;
  version: String;
  info: String;
  imagen: StaticImageData;
  reverseAnimation: String;

  handleClick: () => void;
}

export default function CardTemplate({
  version,
  info,
  title,
  reverseAnimation,
  handleClick,
  imagen,
}: propsValue) {
  return (
    <>
      <Card
        className="overflow-hidden h-full transition-all duration-300  bg-gradient-to-t from-[#0b163b] to-[#000000]"
        onMouseLeave={() => {
          reverseAnimation;
        }}
        onMouseEnter={() => {
          handleClick;
        }}
      >
        <div className="relative h-48">
          <Image
            src={imagen}
            alt="Project Image"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4 flex flex-col justify-between h-full" >
          <h2 className="text-1xl font-bold text-gray-300 ">
            {title}
          </h2>
          <h4 className="text-sm text-gray-500">{info}</h4>
          
          <div className="flex h-28 justify-center items-end ">
            <div className="">
            <Button
              className=""
              variant="outlined"
              onClick={() => {

                console.log("Descargar APK");
              }}
            >
              Solicitar Apk{" "}
            </Button>
            </div>
          </div>
          <h5 className="flex justify-end text-gray-800">{version}</h5>
        </div>
      </Card>
    </>
  );
}
