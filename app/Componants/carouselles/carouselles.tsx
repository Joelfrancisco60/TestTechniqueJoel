'use client'
import Image from "next/image";
import avisImage from "../../../public/avis.webp"
import heartAvis from "../../../public/heartAvis.png"
import etoile from "../../../public/étoile.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import Carousel from "@/app/Composants/Carousel/carousel";

export default function Register() {

    const images = [
        "\"I love this product so much ! It rocks!\"",
        "\"Lorem ipsum dolor sit amet, consectetur\"",
      ];

    return (
        <div className="flex flex-col bg-white text-gray-500 p-24 border-t border-black">
            {/* Carousel */}
            <div className="pb-11 flex flex-col z-50">
                <Image src={heartAvis} alt="" className="flex self-center w-24" />
                <Carousel loop>
                    {images.map((src, i) => {
                    return (
                        <div className="relative md:h-24 h-28 flex-[0_0_100%] w-100 flex justify-center" key={i}>
                            <span className="flex items-center justify-center w-100 font-medium text-xl text-center">{src}</span>
                        </div>
                    );
                    })}
                </Carousel>
            </div>
            {/* Avis */}
            <div className="flex flex-col">
                <div className="relative h-0 -top-32">
                    <div className="hidden md:flex justify-end z-0">
                        <Image src={etoile} alt="" className="flex w-28 rotate-12" />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-around">
                    <div className="flex flex-col border-2 border-black p-4 bg-gray-200 w-72 text-black rounded-lg md:mb-0 mb-11">
                        <Image 
                            src={avisImage}
                            alt="image d'avis"
                        />
                        <span className="flex justify-center font-bold text-2xl pt-5 pb-4" >Heading</span>
                        <p className="flex justify-center text-center italic" >Sic de isto et tutius perducit ad actum ipsum, ut si dico Ego</p>
                    </div>
                    <div className="flex flex-col border-2 border-black p-4 bg-gray-200 w-72 text-black rounded-lg md:mt-20 md:mb-0 mb-11">
                        <Image 
                            src={avisImage}
                            alt="image d'avis"
                        />
                        <span className="flex justify-center font-bold text-2xl pt-5 pb-4" >Heading</span>
                        <p className="flex justify-center text-center italic" >Sic de isto et tutius perducit ad actum ipsum, ut si dico Ego</p>
                    </div>
                    <div className="flex flex-col border-2 border-black p-4 bg-gray-200 w-72 text-black rounded-lg">
                        <Image 
                            src={avisImage}
                            alt="image d'avis"
                        />
                        <span className="flex justify-center font-bold text-2xl pt-5 pb-4" >Heading</span>
                        <p className="flex justify-center text-center italic" >Sic de isto et tutius perducit ad actum ipsum, ut si dico Ego</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
