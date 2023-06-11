"use client";

import Link from "next/link";
import MainLayout from "../layout/MainLayout";

const TitleHeader = ({ title }) => {
    return (
        <div className="h-[367px] bg-primary/20 w-full">
            <MainLayout>
                <div className="flex flex-col justify-center items-center h-[367px]">
                    <h1 className="text-[#292D33] text-[46px] font-manrope font-bold">{title}</h1>
                    <div className="flex items-center text-[14px] gap-x-[6px] font-manrope mt-[15px]">
                        <Link href="/">
                            <p className="text-[#9497A1] hover:text-[#292D33] duration-300 cursor-pointer">Home</p>
                        </Link>{" "}
                        <span>|</span>
                        <p className="text-[#292D33]">{title}</p>
                    </div>
                </div>
            </MainLayout>
        </div>
    );
};

export default TitleHeader;
