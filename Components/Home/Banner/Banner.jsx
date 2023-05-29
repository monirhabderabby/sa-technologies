import { BannerRight } from "./BannerRight";
export const Banner = () => {
    return (
        <div className="h-full flex flex-col justify-evenly items-center lg:flex-row lg:justify-evenly lg:items-center bg-[#FFFFFF] gap-x-[30px]">
            <div className=" font-sans mt-[30px] lg:mt-0">
                <p className="text-[20px] font-bold">Perfect Blend of Technology & Creativity</p>
                <h1 className="text-[30px] lg:text-[60px] font-bold">
                    Web & App Development <br /> Company
                </h1>
                <p className="text-[#7B7B7B] text-[14px] md:text-[20px]">
                    Hire Experienced Developers for Web & Mobile App To Facilitate Your Digital Appetite.
                </p>
                <button className="w-[136px] md:w-[182px] h-[37px] lg:h-[47px] bg-[#fe941ac5] shadow-[0px_0px_22px_-5px_rgba(225,151,65,0.46)] text-white mt-[30px] hover:bg-[#FE951A] duration-300">
                    Get in touch
                </button>
            </div>
            <div className="md:flex-1 flex justify-center lg:flex-none">
                <BannerRight />
            </div>
        </div>
    );
};
