import Image from "next/image";
import { barlow } from "../../../../assets/Fonts/fonts";
import ReadMoresButton from "../../buttons/ReadMoresButton";
import styles from "./ServiceCard.module.css";

export const ServiceCard = ({ service }) => {
    const { title, icon, description, id } = service || {};
    return (
        <div
            className={`${styles.service_item} ${barlow.className} mx-auto flex flex-col items-center gap-y-[20px] font-barlow hover:shadow-[5px_5px_35px_#00000026]`}
        >
            <Image src={icon} loading="lazy" width={100} height={100} />
            <h3 className="text-[20px] leading-[30px] overflow-hidden  font-medium text-center text-[#212529]">{title}</h3>
            <p className="text-[14px] text-center">{description}</p>
            <div className="absolute bottom-[30px]">
                <ReadMoresButton navigateTo={`/services/${id}`} />
            </div>
        </div>
    );
};
