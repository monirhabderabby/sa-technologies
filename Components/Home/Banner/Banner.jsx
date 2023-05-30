import { BannerRight } from "./BannerRight";
export const Banner = () => {
    return (
        <div className="h-[calc(100vh-57px)] bg-[linear-gradient(180deg,_#FFFFFF_0%,_#E2F1FF_100%)] flex flex-col justify-evenly items-center lg:flex-row lg:justify-evenly lg:items-center gap-x-[30px]  px-[16px] md:px-[30px]">
            <div className=" font-sans mt-[30px] lg:mt-0 flex flex-col justify-start">
                <p className="text-[16px] font-bold text-primary">Perfect Blend of Technology & Creativity</p>
                <h1 className="text-[30px] lg:text-[48px] font-bold w-full">
                    Web & App Development <br /> Company
                </h1>
                <p className="text-[#7B7B7B] text-[14px] md:text-[16px] md:w-[502px]">
                    Hire Experienced Developers for Web & Mobile App To Facilitate Your Digital Appetite.
                </p>
                <button className="w-[136px] md:w-[182px] h-[37px] lg:h-[47px] bg-primary shadow-[0px_0px_22px_-5px_rgba(225,151,65,0.46)] text-white mt-[30px] hover:bg-[#FE951A] duration-300">
                    Get in touch
                </button>
            </div>
            <div className="md:flex-1 flex justify-center lg:flex-none">
                <BannerRight />
            </div>
        </div>
    );
};
