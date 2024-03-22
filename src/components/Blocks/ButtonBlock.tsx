import CustomIcon from "@/components/Blocks/CustomIcon";

export default function ButtonBlock({
  label,
  type = "standard",
  uppercase = false,
  color = "dark",
}) {
  return (
    <div className="inline-flex items-center justify-center rounded-md border border-primary px-7 py-3 text-center text-base font-medium transition hover:border-primary bg-primary text-base-100">
      {label}
    </div>
  );
}
