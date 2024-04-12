"use client"
import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";

export default function SingleQuestion({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div className="border-2  text-2xl rounded-lg bg-white">
        <article className="flex items-center justify-between p-2 lg:p-2">
          <h2 className="cursor-pointer" onClick={() => setShowAnswer(!showAnswer)}>
            {question}
          </h2>
          <ul>
            {!showAnswer && (
              <li>
                <button
                  onClick={() => setShowAnswer(true)}
                  className="transition-transform duration-300"
                >
                  <BsPlusLg />
                </button>
              </li>
            )}
            {showAnswer && (
              <li>
                <button
                  onClick={() => setShowAnswer(false)}
                  className="transition-transform duration-300 rotate-45"
                >
                  <BiMinus />
                </button>
              </li>
            )}
          </ul>
        </article>
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
            showAnswer ? "max-h-96" : "max-h-0"
          }`}
        >
          <article
            className={`border-t border-gray-400 p-4 lg:p-6 transition-opacity duration-300 ${
              showAnswer ? "opacity-100" : "opacity-0"
            }`}
          >
            {showAnswer && <p>{answer}</p>}
          </article>
        </div>
      </div>
    </>
  );
}