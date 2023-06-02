import { Banner } from "@/Components/Home/Banner/Banner";
import { BannerFeature } from "@/Components/Home/BannerFeature/BannerFeature";
import { ServicesC } from "@/Components/Home/Services/ServicesC";
import { SuccessHighlight } from "@/Components/Home/Success_highlight/SuccessHighlight";
import { Testmonials } from "@/Components/Home/Testmonials/Testmonials";
import "./globals.css";

export default function Home() {
    return (
        <div className="h-full ">
            <Banner />

            <div className="max-w-[1200px] mx-auto lg:h-[calc(100vh-74px)] h-auto px-[16px] md:px-[30px] pb-[250px]">
                <BannerFeature />
                <SuccessHighlight />
                <ServicesC />
                <Testmonials />
            </div>
        </div>
    );
}
