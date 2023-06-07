import { Banner } from "@/Components/Home/Banner/Banner";
import { BannerFeature } from "@/Components/Home/BannerFeature/BannerFeature";
import { ServicesC } from "@/Components/Home/Services/ServicesC";
import { SuccessHighlight } from "@/Components/Home/Success_highlight/SuccessHighlight";
import { Testmonials } from "@/Components/Home/Testmonials/Testmonials";
import Footer from "@/Components/Shared/Footer";
import "./globals.css";

export default function Home() {
    return (
        <div className="h-full relative">
            <Banner />

            <div className="max-w-[1200px] mx-auto  h-auto px-[16px] md:px-[30px] pb-[250px] relative">
                <BannerFeature />
                <SuccessHighlight />
                <ServicesC />
                <Testmonials />
            </div>
            <Footer />
        </div>
    );
}
