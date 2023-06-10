import { ContactPage } from "@/Components/common/ContactForm/ContactPage";
import dynamic from "next/dynamic";

const Contact = () => {
    return <ContactPage />;
};

export default dynamic(() => Promise.resolve(Contact), { ssr: false });
