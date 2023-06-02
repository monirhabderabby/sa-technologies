import Image from "next/image";
import profile from "../../../assets/testmonials/Profile.png";
import union from "../../../assets/testmonials/Union.png";

export const Testmonials = () => {
    return (
        <div className={` h-auto bg-white mt-[100px] relative`}>
            <div className="absolute bottom-6 right-6">
                <Image src={union} width={180} loading="lazy" className="opacity-40" />
            </div>
            <div className="">
                <h1 className="text-[24px] md:text-[48px] lg:text-[60px] text-[#2C3847] font-inter font-semibold text-center">
                    What our Customers say
                </h1>
            </div>
            <section className="flex flex-col items-center gap-y-[32px] mt-[30px] md:mt-[60px]">
                <h3 className="max-w-[600px] text-center text-[#160637] text-[16px] md:text-[20px] lg:text-[24px] font-lato">
                    "What I have Qubly is the easy way we can collaborate even if there is a lot of perople involed in the process"
                </h3>
                <Image src={profile} width={80} height={80} loading="lazy" />
                <div>
                    <p className="text-[16px] text-black font-lato font-semibold text-center">Monir hossain</p>
                    <p className="text-center text-black font-lato font-medium">
                        Director at <span>WeDevs</span>
                    </p>
                </div>
            </section>
        </div>
    );
};
