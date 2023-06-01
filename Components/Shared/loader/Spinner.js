"use client";
import { RotatingLines } from "react-loader-spinner";

export const Spinner = () => {
    return (
        <div className="fixed w-full h-full duration-300 inset-0 z-10 bg-black/50 cursor-pointer ">
            <div className="fixed top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <RotatingLines strokeColor="white" strokeWidth="5" animationDuration="0.75" width="56" visible={true} />
            </div>
        </div>
    );
};
