import React from "react";
import lap from "../../images/lap.jpg"
const Hero3 = () => {
    return (
        <div className="dark:bg-white">
            <div className="container mx-auto py-9 md:py-12 lg:py-24">
                <div className="relative mx-4">
                    <img src={lap} alt="A work table with house plants" className="w-full h-full hidden lg:block" />
                    <img src={lap} alt="A work table with house plants" className="hidden sm:block lg:hidden w-full h-full" />
                    <img src={lap} alt="A work table with house plants" className="sm:hidden w-full h-full" />

                    <div className="absolute z-10 top-0 left-0 mx-4 sm:mx-0 mt-36 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 flex flex-col sm:justify-start items-start">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white sm:w-8/12">Minimalist Furniture Design</h1>
                        <p className="text-base leading-normal text-slate-300 mt-4 sm:mt-5 sm:w-5/12">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="meet">
                        <button className="hidden flex sm:flex bg-slate-100 py-4 px-8 text-base font-medium text-black mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 rounded-full hover:bg-white">Learn More</button>
                        <button className="hidden flex sm:flex bg-slate-100 py-4 px-8 text-base font-medium text-black mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 rounded-full hover:bg-white ml-3">Buy</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero3;
