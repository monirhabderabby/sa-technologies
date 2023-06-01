import Image from "next/image";
import { barlow } from "../../../../assets/Fonts/fonts";
import styles from "./ServiceCard.module.css";

export const ServiceCard = ({ service }) => {
    const { title, icon, description } = service || {};
    return (
        <div className={`${styles.service_item} ${barlow.className} mx-auto flex flex-col items-center gap-y-[20px] font-barlow`}>
            <Image src={icon} loading="lazy" width={100} height={100} />
            <h3 className="text-[20px] leading-[30px] overflow-hidden  font-medium text-center text-[#212529]">{title}</h3>
            <p className="text-[14px] text-center">{description}</p>
        </div>
    );
};
