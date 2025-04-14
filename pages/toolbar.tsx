"use client";
import { Avatar, Button } from "@mui/joy";
import githubLogo from "@/public/logogithub.jpg";
import linkedingLogo from "@/public/linkeding.png";

export default function ToolbarComponent() {
  return (
    <>
      <div className="flex w-full flex-row bg-[#181346]">
        <div
          className="p-4"
          onClick={() => {
            console.log("click");
          }}
        >
          <Avatar color="primary" alt="linieding" src={linkedingLogo.src} />
        </div>
        <div className="p-4">
          <Avatar alt="Leonardo Lliuya" src={githubLogo.src} />
        </div>
      </div>
    </>
  );
}
