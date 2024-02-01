"use client";
import React, { useRef, useState } from "react";

type Props = {};
const faqs = [
  {
    id: 1,
    header: "What is AI?",
    text: `AI stands for artificial intelligence. It's the ability of a computer to learn from data and make predictions based on it without being specifically programmed to do so.`,
  },
  {
    id: 2,
    header: "What are the pros of AI?",
    text: `The advantages range from streamlining, saving time, eliminating biases, and automating repetitive tasks, just to name a few. `,
  },
  {
    id: 3,
    header: "What are the cons of AI?",
    text: `AI lacks human qualities like creativity and empathy, limiting its ability to understand emotions or produce original ideas. `,
  },
  {
    id: 4,
    header: "Is AI a real danger?",
    text: `Some of the biggest risks today include things like consumer privacy, biased programming, danger to humans, and unclear legal regulation.`,
  },
];
const Questions = (props: Props) => {
  const [active, setActive] = useState<number | null>(null);
  const contentEl = useRef<any>();
  const handleToggle = (id: number) => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  };
  console.log(contentEl);

  return (
    <section className="max-w-[1260px] m-auto my-32 ">
      <div className="w-[90%] md:w-[70%] m-auto bg-white rounded-lg shadow-xl">
        <div className="py-8 px-6">
          <h4 className="text-center mb-4 font-bold text-xl">
            Frequently Asked Questions
          </h4>
          {faqs.map((el) => (
            <div key={el.id} className="rc-accordion-card text-lg">
              <div className="rc-accordion-header">
                <div
                  className={`rc-accordion-toggle p-3 ${
                    active === el.id ? "active" : ""
                  }`}
                  onClick={() => handleToggle(el.id)}
                >
                  <h5 className="rc-accordion-title">{el.header}</h5>
                  <i className="fa fa-chevron-down rc-accordion-icon"></i>
                </div>
              </div>
              <div
                ref={contentEl}
                className={`rc-collapse ${active === el.id ? "show" : ""}`}
                style={
                  active === el.id
                    ? { height: contentEl.current.scrollHeight  }
                    : { height: "0px" }
                }
              >
                <div className="rc-accordion-body">
                  <p>{el.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
