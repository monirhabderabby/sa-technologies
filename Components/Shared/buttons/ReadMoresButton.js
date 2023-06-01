"use client";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function ReadMoresButton() {
    return (
        <button className="relative flex items-cente group px-4 text-[#0060af] hover:text-[#044f8d] font-medium">
            Read mores{" "}
            <HiOutlineArrowLongRight className="absolute right-[-10px] top-[6px] content-none group-hover:right-[-25px] group-hover:top-[5px] transition-all duration-300" />
        </button>
    );
}
