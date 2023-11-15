"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import questionMark from "../../../public/questionMark.png"
import AccordionCustom from "@/app/Composants/Accordeon/accordeon";

export default function App() {
  
  const data = [
    {
      title: "Ponam in culpa idiota aliis privatatis ?",
      desc: "Ponam in culpa idiota aliis privatatis. Principium ponere culpam in se justum praeceptum. Neque improperes et aliis"
    },
    {
      title: "Ponam in culpa idiota aliis privatatis ?",
      desc: "Ponam in culpa idiota aliis privatatis. Principium ponere culpam in se justum praeceptum. Neque improperes et aliis"
    },
    {
      title: "Ponam in culpa idiota aliis privatatis ?",
      desc: "Ponam in culpa idiota aliis privatatis. Principium ponere culpam in se justum praeceptum. Neque improperes et aliis"
    }
  ]

  const [open, setOpen] = useState<number | null>(null)


  const toggle = (index: number) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  }

  return (
    <div className="flex flex-col justify-between bg-white text-black border-t border-black py-14 px-11">
        <h1 className="flex justify-center text-5xl font-medium pb-11">FAQS</h1>
        <div className="flex w-100 justify-center">
          <div className="flex justify-center flex-col max-w-[550px]">
            {data.map((data, index) => (
              <div key={index} className="pb-10">
                <AccordionCustom  
                  open={index === open} 
                  title={data.title} 
                  desc={data.desc} 
                  toggle={() => {toggle(index)}} />
                </div>
            ))}
          </div>
        </div>
        <div className="flex self-center flex-col w-[100%]">
          <span className="pb-6 flex justify-center">Some text explaining why you should sign up</span>
          <div className="flex flex-row justify-center">
            <input type="text" name="email_address" placeholder="Email address" className="p-2 border rounded w-[450px]" />
            <button type="submit" className="bg-purple-600 text-white p-2 rounded hover:bg-purple-700 px-7">Get started</button>
          </div>
        </div>
    </div>
  );
}
