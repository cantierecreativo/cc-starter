import translate from "@/labels";
import React, { useEffect, useRef, useState } from "react";
import CustomIcon from "../Blocks/CustomIcon";
import { SiteLocale } from "@/graphql/generated";
import Form from "@/components/Form/Form";

type Props = {
  locale?: SiteLocale;
  children: any;
};

const Modal = ({ locale, children }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef(null);
  const modal = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <button
        className="cursor-pointer mt-6"
        onClick={() => setModalOpen(true)}
        ref={trigger}
      >
        {children}
      </button>

      <div
        className={`fixed left-0 top-0 bottom-0 flex w-full items-center justify-center bg-black/70 z-50 ${
          modalOpen ? "block" : "hidden"
        }`}
      >
        <div
          ref={modal}
          className="w-full max-w-[700px] mt-16 h-[90vh] overflow-auto p-8 bg-secondary text-secondary-content relative"
        >
          <button
            onClick={() => setModalOpen(false)}
            className="text-sm transition absolute top-4 right-4 left-auto uppercase flex items-center justify-center"
          >
            {translate("layout.close", locale)}
            <CustomIcon
              classes="bg-primary size-8 transform transition-transform scale-150 ml-1"
              fileName="close"
            />
          </button>
          <Form locale={locale} />
        </div>
      </div>
    </>
  );
};

export default Modal;
