"use client";
import React, { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");
  const [amount, SetAmount] = useState("1");
  const [resolution, setResolution] = useState("");
  const [images, setImages] = useState([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (!text) {
        alert("Please enter your text");
        return;
      }

      const promptValue = {
        text,
        amount,
        resolution,
      };

      //post to api/image
      const reponse = await fetch("/api/image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(promptValue),
      });
      const data = await reponse.json();
      console.log(data);
      setText("");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between flex-col lg:flex-row bg-white border border-slate-500 px-3 py-3 rounded-lg sm:font-medium md:px-6 md:py-5 "
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="Enter your text..."
        className="focus:outline-none w-full lg:mr-10 mb-10 lg:mb-0"
      />
      <div className="flex items-center gap-2 sm:gap-5 justify-between ">
        <select
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => SetAmount(e.target.value)}
          className=" border border-slate-500  text-sm rounded-lg sm:p-3 p-1 cursor-pointer"
        >
          <option value="1">1 Photo</option>
          <option value="2">2 Photos</option>
          <option value="3">3 Photos</option>
        </select>
        <select
          name="resolution"
          id="resolution"
          value={resolution}
          onChange={(e) => setResolution(e.target.value)}
          className=" border border-slate-500  text-sm rounded-lg sm:p-3 p-1 cursor-pointer"
        >
          <option value="256x256">256x256</option>
          <option value="512x512">512x512</option>
          <option value="1024x1024">1024x1024</option>
        </select>
        <button
          type="submit"
          className="bg-slate-500 text-white sm:px-5 sm:py-2.5 px-2 py-1 rounded-lg hover:bg-slate-700"
        >
          Generate
        </button>
      </div>
    </form>
  );
};

export default Form;
