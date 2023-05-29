import Image from "next/image";
import team from "../../../assets/Banner/team.jpg";
import "./bannerC.css";
export const BannerRight = () => {
    return (
        <div>
            <div className="relative md:w-[578px] md:h-[512px] lg:w-[528px] lg:h-[612px] flex items-center">
                <Image src={team} width={600} height={800} alt="team image" className="hover:scale-105 duration-300"></Image>
            </div>
        </div>
    );
};
