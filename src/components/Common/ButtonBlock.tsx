import Image from "next/image";
import CustomIcon from "@/components/Common/CustomIcon";

export default function ButtonBlock({
  label,
  type,
  uppercase = false,
  color = "dark",
}) {
  switch (type) {
    case "underline":
      return (
        <div
          className={`${
            uppercase ? "uppercase text-sm" : ""
          } inline-block relative`}
        >
          {label && label}
          <CustomIcon
            classes={`${
              color === "light" ? "bg-base-100" : "bg-base-content"
            } w-[14px] h-[14px] ml-2 group-hover:ml-6 inline-block motion-safe:duration-300`}
            fileName="arrow-oblique"
          />
          <Image
            className="mt-1 w-full"
            src={`/assets/${
              color === "light" ? "underlineLight" : "underline"
            }.svg`}
            alt={label}
            width={50}
            height={10}
          />
        </div>
      );
    case "standard":
      return (
        <div
          className={`${
            uppercase ? "uppercase" : ""
          } inline-block relative px-5 py-2 bg-base-100 rounded-full`}
        >
          <CustomIcon
            classes="w-[14px] h-[14px] bg-base-content group-hover:px-3 inline-block motion-safe:duration-200"
            fileName="arrow-right"
          />
        </div>
      );
  }
}
