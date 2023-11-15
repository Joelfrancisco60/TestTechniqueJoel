import Image from "next/image";
import RegisterImage from "../../../public/registerImage.png";
import YellowUnderline from "../../../public/yellowDraw"

export default function Register() {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-50 w-full">
            <div className="relative w-full h-screen">
                <div className="w-full text-center px-4 pt-12 pb-14">
                    <h1 className="text-6xl sm:text-[3.5rem] font-bold text-black">Profilr</h1>
                    <p className="text-xl sm:text-[2.25rem] text-gray-500 my-4 sm:mb-8">Talent Intelligence Software</p>
                </div>

                {/* Background Image */}
                <div className="absolute bottom-0 w-full h-full hidden md:flex">
                    <Image 
                        src={RegisterImage}
                        alt="image d'inscription"
                        className="w-full"
                    />
                </div>

                {/* Overlay Container */}
                <div className="inset-0 z-10 flex justify-end pr-4 sm:pr-8 items-center">
                    <div className="bg-white z-10 bg-opacity-90 rounded-lg shadow-md p-6 sm:p-8 w-full max-w-xs sm:max-w-md text-gray-500">
                        <form>
                            <div className="mb-4">
                                <input type="text" name="first_name" placeholder="First Name" className="w-full p-2 border rounded" />
                            </div>
                            <div className="mb-4">
                                <input type="text" name="last_name" placeholder="Last Name" className="w-full p-2 border rounded" />
                            </div>
                            <div className="mb-4">
                                <input type="email" name="email" placeholder="Email Address" className="w-full p-2 border rounded" />
                            </div>
                            <div className="flex items-center mb-6">
                                <input type="checkbox" name="t_and_c" className="mr-2" />
                                <label htmlFor="t_and_c" className="text-sm">T&C</label>
                            </div>
                            <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition duration-300 ease-out hover:ease-in">CTA</button>
                        </form>
                    </div>
                </div>

                {/* Footer Text */}
                <p className="absolute z-10 bottom-0 w-full text-sm text-center p-4 text-black">Sic de isto et tutius perducti act adium ipsum...</p>
            </div>
        </div>
    );
}
