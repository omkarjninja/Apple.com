import React from "react";
// 
// Shop and Learn
// Store
// Mac
// iPad
// iPhone
// Watch
// Vision
// AirPods
// TV & Home
// AirTag
// Accessories
// Gift Cards
const Footer = () => {
    return (
        <div className="bg-white px-4 py-9 md:px-6 md:py-12 lg:px-20 lg:py-12">

            <div className="pt-10 flex flex-col xl:flex-row justify-between">
                <div className="flex flex-col md:gap-10">
                    <div className="flex items-start w-full">
                        <div className="pb-10 md:pb-0">
                            <h3 className="text-xl cursor-default font-semibold leading-tight text-black mb-8">Shop and Learn</h3>
                            <p className="text-sm cursor-pointer leading-none text-gray-700 mb-6">Store</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-700 mb-6">Mac</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-700 mb-6">iPad</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-700 mb-6">iPhone</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-700 mb-6">Watch</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-700 mb-6">Vision</p>
                        </div>
                        <div className="pb-10 md:pb-0 2xl:pl-20 pl-16">
                            <h3 className="text-xl cursor-default font-semibold leading-tight text-black mb-8">Account</h3>
                            <p className="text-sm cursor-pointer leading-none text-gray-700 mb-6">Account Info</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-700 mb-6">Manage Your Account</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-700 mb-6">Apple ID</p>
                        </div>
                        <div className="pb-10 md:pb-0 2xl:pl-20 pl-16 md:block hidden">
                            <h3 className="text-xl cursor-default font-semibold leading-tight text-black mb-8">Apple Store</h3>
                            <p className="text-sm cursor-pointer leading-none text-gray-700 mb-6">Find store near Me</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-700 mb-6">Genius Bar</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-700 mb-6">Work from home</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-700 mb-6">Apple customers</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-700 mb-6">Apple online sales</p>
                        </div>
                        <div className="pb-10 md:pb-0 2xl:pl-20 pl-16 md:block hidden">
                            <h3 className="text-xl cursor-default font-semibold leading-tight text-black mb-8">Visit us</h3>
                            <p className="text-sm cursor-pointer leading-none text-gray-700 mb-6">About us</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-700 mb-6">Contact Us</p>
                            <p className="text-sm cursor-pointer leading-none text-gray-700 mb-6">Apple.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
