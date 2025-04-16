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
        className="overflow-hidden transition-all duration-300"
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
        <div className="p-4">
          <Typography level="h4" className="font-bold">
            {title}
          </Typography>
          <Typography level="body-sm">{info}</Typography>
          <h5 className="flex justify-end">{version}</h5>
          <div className="items-center justify-center flex ">
            <Button
              className=" "
              color="neutral"
              variant="solid"
              onClick={() => {

                console.log("Descargar APK");
              }}
            >
              Solicitar Apk{" "}
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}
