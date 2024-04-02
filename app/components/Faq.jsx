"use client"
import React, { useState } from "react";
import { questions } from "../utils/Questions";
import SingleQuestion from "../(static)/SingleQuestion";

export default function Faq() {
  const [cards] = useState(questions);

  return (
    <>
      <section className="sm:max-w-[80%] lg:max-w-[50%] mx-auto py-20 px-4">
        <h1 className="text-center  tracking-widest font-bold mb-8">
          Frequently Asked Questions
        </h1>

        <section className="grid grid-cols-1 gap-4">
          {cards.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>
      </section>
    </>
  );
}