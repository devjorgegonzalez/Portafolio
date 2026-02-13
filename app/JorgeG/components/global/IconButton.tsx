import { Button } from "@/components/ui/button";
import { ArrowUpIcon, Github, Linkedin, Mail } from "lucide-react";

interface IconButtonProps {
  onClick?: () => void;
  variant?: "Github" | "LinkedIn" | "Email";
  size?: number;
}

export default function IconButton({
  onClick,
  variant,
  size = 40,
}: IconButtonProps) {
  let icono = <ArrowUpIcon size={size} className="text-neutral-100" />;

  switch (variant) {
    case "Github":
      icono = <Github size={size} className="text-neutral-100" />;
      break;
    case "LinkedIn":
      icono = <Linkedin size={size} className="text-neutral-100" />;
      break;
    case "Email":
      icono = <Mail size={size} className="text-neutral-100" />;
      break;
    default:
      icono = <></>;
      break;
  }

  return (
    <div
      className="flex flex-col items-center gap-2 p-3 cursor-pointer"
      onClick={onClick}
    >
      {icono}
    </div>
  );
}
