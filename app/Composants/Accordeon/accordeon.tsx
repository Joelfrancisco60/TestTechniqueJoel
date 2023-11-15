import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { Collapse } from "react-collapse";

interface AccordionCustomProps {
    open: boolean;
    toggle: () => void;
    title: string;
    desc: string;
  }

const AccordionCustom: React.FC<AccordionCustomProps> = ({ open, toggle, title, desc }) => {
    return(
        <div className="pt[10px]">
            <div className="bg-gray-100 py-[25px] px-[50px] flex justify-between items-center cursor-pointer border border-black" 
            onClick={toggle}>
                <p className="text-[22px] font-semibold">{title}</p>
                <div className="text-[30px]">
                    {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
            </div>
            <Collapse isOpened={open}>
                <div className="bg-gray-100 border border-black px-[50px] pb[20px] p-6">{desc}</div>
            </Collapse>
        </div>
    );
}

export default AccordionCustom