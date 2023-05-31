import { Banner } from "@/Components/Home/Banner/Banner";
import { BannerFeature } from "@/Components/Home/BannerFeature/BannerFeature";
import { SuccessHighlight } from "@/Components/Home/Success_highlight/SuccessHighlight";

export default function Home() {
    return (
        <div className="h-full">
            <Banner />

            <div className="max-w-[1200px] mx-auto lg:h-[calc(100vh-74px)] h-auto px-[16px] md:px-[30px]">
                <BannerFeature />
                <SuccessHighlight />
            </div>
        </div>
    );
}
