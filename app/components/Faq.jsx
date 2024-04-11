"use client"
import React, { useState } from "react";
import { questions } from "../constants/Questions";
import SingleQuestion from "../shared/SingleQuestion";

export default function Faq() {
  const [cards] = useState(questions);

  return (
    <>
      <section className="sm:max-w-[90%] lg:max-w-[90%] mx-auto py-20 px-4">
        <h1 className="text-center text-3xl  tracking-widest font-bold mb-8">
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