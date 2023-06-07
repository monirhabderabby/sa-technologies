"use client";
import { Typography } from "@material-tailwind/react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="w-full bg-white p-8">
            <hr className="my-8 border-blue-gray-50" />
            <Typography color="blue-gray" className="text-center font-normal">
                &copy; <span>SA TECH |</span> <span className="cursor-pointer">TERMS |</span>
                <span className="cursor-pointer hover:text-blue-600"> Privacy Policy</span>
            </Typography>
            <div className="w-full flex justify-center mt-[12px] gap-x-[12px]">
                <div>
                    <BsFacebook className="text-[28px] hover:text-blue-800 cursor-pointer duration-300" />
                </div>
                <div>
                    <BsYoutube className="text-[28px] hover:text-red-500 cursor-pointer duration-300" />
                </div>
                <div>
                    <AiFillInstagram className="text-[28px] hover:text-pink-500 cursor-pointer duration-300" />
                </div>
            </div>
        </footer>
    );
}
