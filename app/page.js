import { Banner } from "@/Components/Home/Banner/Banner";
import { BannerFeature } from "@/Components/Home/BannerFeature/BannerFeature";

export default function Home() {
    return (
        <div className="h-full">
            <Banner />
            <BannerFeature />
        </div>
    );
}
