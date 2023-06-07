import { ContactFormContainer } from "@/Components/Shared/ContactForm/ContactFormContainer";

const Contact = () => {
    return (
        <div className="h-full flex justify-center items-center relative">
            <div className="w-full h-[400px] bg-orange-500">
                <ContactFormContainer />
            </div>
        </div>
    );
};

export default Contact;
