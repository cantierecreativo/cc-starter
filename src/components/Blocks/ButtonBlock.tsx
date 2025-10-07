import CustomIcon from "@/components/Blocks/CustomIcon";
import Modal from "../Layout/Modal";

type ButtonProps = {
  label: string;
  color?: string;
  arrow?: Boolean;
  modal?: Boolean;
};

export default function ButtonBlock({
  label,
  arrow = false,
  color = "light",
  modal = false,
}: ButtonProps) {
  const buttonClass =
    "inline-flex items-center justify-center rounded-md px-7 py-3 text-center motion-safe:transition";
  const colorButton =
    color === "light"
      ? "bg-accent text-accent-content"
      : "bg-primary text-primary-content";
  const classArrow = "size-6 ml-2";

  if (modal)
    return (
      <Modal>
        <div className="px-6 border">Apri la modale</div>
      </Modal>
    );
  else
    return (
      <div className={`${colorButton} ${buttonClass}`}>
        {label}
        {arrow && (
          <CustomIcon classes={`${classArrow}`} fileName="arrow-right" />
        )}
      </div>
    );
}
