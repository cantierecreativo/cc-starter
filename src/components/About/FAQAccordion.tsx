"use client";

import { useState } from "react";
import { StructuredText } from "react-datocms/structured-text";
import { motion } from "framer-motion";
import { QuestionRecord } from "@/graphql/generated";
import { Maybe } from "graphql/jsutils/Maybe";
import ReactMarkdown from "react-markdown";
import Highlighter from "../Common/Highlighter";

const closeIcon = (
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 md:h-12 md:w-12"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".8"
        d="M18 12H6"
      />
    </svg>
  </span>
);

const openIcon = (
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 md:h-12 md:w-12"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="0.8"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  </span>
);

type Props = {
  title: Maybe<string>;
  subtitle: Maybe<string>;
  questions: Array<QuestionRecord>;
};

const FAQAccordion = ({ title, subtitle, questions }: Props) => {
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  function toggleQuestion(id: string) {
    if (openQuestions.includes(id)) {
      setOpenQuestions((openQuestions) => {
        return [...openQuestions.filter((qID) => qID !== id)];
      });
    } else {
      setOpenQuestions((openQuestions) => [...openQuestions, id]);
    }
  }

  return (
    <div className="container mx-auto px-6 md:w-10/12">
      <h2 className="text-md uppercase max-w-prose mx-auto font-serif mb-4 md:text-lg md:mb-8 lg:text-2xl xl:mb-12">
        {title}
      </h2>
      <h3 className="block mb-3">
        <ReactMarkdown>{subtitle || ""}</ReactMarkdown>
      </h3>

      <div className="mt-12 border-t border-primary-content/20">
        {questions.map((question, n: number) => {
          const isOpen = openQuestions.includes(question.id);
          return (
            <motion.div
              layout="position"
              key={question.id}
              className={
                "py-8 hover:cursor-pointer border-b border-primary-content/20"
              }
              onClick={() => {
                toggleQuestion(question.id);
              }}
            >
              <button className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3 md:gap-6">
                  <div className="bg-base-100 rounded-full text-center w-[30px] h-[30px] md:w-10 md:h-10 flex items-center justify-center font-serif translate-y-1 md:text-md">
                    {n + 1}
                  </div>
                  <div className="uppercase font-serif md:text-md">
                    {question.question}
                  </div>
                </div>
                {isOpen ? closeIcon : openIcon}
              </button>

              <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: { opacity: 1 },
                  closed: { opacity: 0 },
                }}
                transition={{ duration: 0.5 }}
                className={"mt-6 text-sm pl-16" + (isOpen ? "" : " hidden")}
              >
                <StructuredText
                  data={question.answer.value as any}
                  renderNode={Highlighter}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQAccordion;
