import backgroundImage from "../../../public/headlineImage.jpeg"
import Image from "next/image";


export default function Headline() {
    return (
        <div className="text-gray-500 bg-white md:bg-none ">
            <div className="relative flex-col text-center w-full flex">
                <div className="absolute bottom-0 w-full hidden md:flex">
                    <Image 
                        src={backgroundImage}
                        alt="image d'inscription"
                        className="w-full blur-[3px] max-h-[317px]"
                    />
                </div>
                <h1 className="z-10 pt-16 text-6xl sm:text-8xl font-medium text-white">Headline</h1>
                <p className="z-10 text-xl sm:text-3xl text-gray-50 pb-4 mt-4">Subheading</p>
                {/* <div className="flex justify-center mb-4r sm:mb-8 pb-10">
                    <YellowUnderline />
                </div> */}
                <div className="z-10 flex justify-center w-full pb-16">
                    <button type="submit" className="w-1/4 bg-purple-600 text-white p-2 rounded hover:bg-purple-700">CTA</button>
                </div>
            </div>
        </div>
    );
}
