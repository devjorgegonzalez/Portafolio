import { Separator } from "@/components/ui/separator";
import IconButton from "../global/IconButton";
import ContactInfoItem from "../global/ContactInfoItem";

export default function InformationSideBar() {
  return (
    <>
      <h1
        className="font-bold text-[70px] mx-6 text-neutral-100"
        style={{ lineHeight: "1" }}
      >
        Jorge Gonzalez
      </h1>

      <h1 className="text-[30px] mx-6 mt-4 text-neutral-100">
        Full Stack Developer
      </h1>

      <div className="flex justify-around mx-6 mt-20">
        <IconButton variant="Github" />
        <IconButton variant="LinkedIn" />
        <IconButton variant="Email" />
      </div>

      <h1 className="text-[30px] font-semibold mx-6 mt-4 text-neutral-100">
        Contact
      </h1>

      <Separator className="w-1/4 " />

      <div className="flex flex-col my-5 ">
        <ContactInfoItem
          iconVariant="Email"
          title="Email"
          text="ing.jorge.gonzalez92@gmail.com"
        />
        <ContactInfoItem
          iconVariant="LinkedIn"
          title="LinkedIn"
          text="linkedin.com/in/jorge-gonzalez"
        />
        <ContactInfoItem
          iconVariant="Github"
          title="Github"
          text="github.com/jorge-gonzalez"
        />
      </div>
    </>
  );
}
