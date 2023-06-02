import { ServiceCard } from "@/Components/Shared/cards/service/ServiceCard";
import Accountability from "../../../assets/services/account.png";
import ecommerceSolution from "../../../assets/services/ecommerce_solution.png";
import websiteDevelopemt from "../../../assets/services/website_development.png";

export const ServicesC = () => {
    const data = [
        {
            id: 1,
            title: "Website Development",
            description: "We offer One-Of-A-Kind web development solutions to businesses all around the world. Our team is dedicated to letting y...",
            icon: websiteDevelopemt,
        },
        {
            id: 2,
            title: "E-commerce Solution",
            description: "E-commerce websites need to be user-friendly, but attractive at the same time. Enriched with cutting-edge technology,...",
            icon: ecommerceSolution,
        },
        {
            id: 3,
            title: "Accountability Solution",
            description:
                "Promote transparency and responsibility within organizations. Set goals, track progress, and evaluate performance. Foster a culture of accountability and excellence...",
            icon: Accountability,
        },
    ];
    return (
        <div className=" mt-[100px] mb-[100px]">
            <div>
                <h1 className="text-[36px] leading-[50px] font-medium font-inter text-[#0a0a0a] text-center">Services</h1>
                <p className="text-center font-thin text-[#0a0a0a] text-[16px] mt-[12px]">We are offering All kinds of IT Solutions Services</p>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[50px]">
                {data?.map(service => {
                    return <ServiceCard key={service?.id} service={service} />;
                })}
            </section>
        </div>
    );
};
