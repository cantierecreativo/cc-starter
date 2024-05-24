import CustomIcon from "@/components/Blocks/CustomIcon";

export default function ButtonBlock({
  label,
  type = "standard",
  uppercase = false,
  color = "dark",
}) {
  return (
    <div className="inline-flex items-center justify-center rounded-md px-7 py-3 text-center text-base font-medium transition bg-accent text-accent-content">
      {label}
    </div>
  );
}
