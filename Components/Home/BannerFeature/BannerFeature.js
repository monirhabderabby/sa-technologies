import Image from "next/image";

// components
import audience from "../../../assets/Banner/icon/audience.svg";
import knowledge from "../../../assets/Banner/icon/knowledge.svg";
import market from "../../../assets/Banner/icon/onlineMarket.svg";

export const BannerFeature = () => {
    // content
    const data = [
        {
            id: 1,
            title: "Grow your audience",
            description: "Find new customers and build your email list with lead generation ..",
            icon: audience,
        },
        {
            id: 2,
            title: "Boost online sales",
            description: "Market your ecommerce business and deliver experiences",
            icon: market,
        },
        {
            id: 3,
            title: "Effortlessly Clone Websites",
            description: "Unlock the power of website cloning with our expert services using Elementor and WordPress",
            icon: knowledge,
        },
    ];
    return (
        <div className="h-[250px] mt-[100px] max-w-[1070px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[100px]">
            {data?.map(item => {
                return (
                    <div key={item.id} className="flex flex-col items-center">
                        <Image src={item.icon} loading="lazy" className="mb-[40px]" />
                        <h1 className="text-[#424242] text-[24px] font-medium leading-[24px] mb-[20px]">{item.title}</h1>
                        <p className="text-[#757575] text-[18px] leading-[28px] font-medium text-center">{item.description}</p>
                    </div>
                );
            })}
        </div>
    );
};
