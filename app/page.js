import { Banner } from "@/Components/Home/Banner/Banner";
import { BannerFeature } from "@/Components/Home/BannerFeature/BannerFeature";
import { ServicesC } from "@/Components/Home/Services/ServicesC";
import { SuccessHighlight } from "@/Components/Home/Success_highlight/SuccessHighlight";
import { Testmonials } from "@/Components/Home/Testmonials/Testmonials";

// css
import MainLayout from "@/Components/common/layout/MainLayout";
import "./globals.css";

export default function Home() {
    return (
        <div className="h-full relative">
            <Banner />

            <MainLayout>
                <BannerFeature />
                <SuccessHighlight />
                <ServicesC mt={true} header={true} />
                <Testmonials />
            </MainLayout>
        </div>
    );
}
