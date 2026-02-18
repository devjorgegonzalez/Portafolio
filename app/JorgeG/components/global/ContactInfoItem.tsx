import React from "react";
import IconButton from "./IconButton";

interface ContactInfoItemProps {
  iconVariant?: "Github" | "LinkedIn" | "Email";
  title: string;
  text: string;
}

export default function ContactInfoItem({
  iconVariant = "Email",
  title = "Title",
  text = "Text",
}: ContactInfoItemProps) {
  return (
    <div className="grid grid-cols-8  ">
      <div className="col-span-2">
        <IconButton variant={iconVariant} />
      </div>
      <div className="grid grid-cols-1 col-span-6">
        <div className="flex items-end text-neutral-100 font-bold">
          {title}:
        </div>
        <div className="flex items-start text-neutral-100">{text}</div>
      </div>
    </div>
  );
}
