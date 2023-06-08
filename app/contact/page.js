import { ContactFormContainer } from "@/Components/Shared/ContactForm/ContactFormContainer";

const Contact = () => {
    return (
        <>
            <div className="h-full flex flex-col justify-center items-center relative">
                <div className="w-full h-[400px] bg-orange-500">
                    <ContactFormContainer />
                </div>
            </div>
            <section className="max-w-[1200px] mx-auto">
                <div className=" flex flex-col lg:flex-row items-center gap-x-[60px] mt-[60px]">
                    <div>
                        <h2 className="text-[#292D33] font-inter font-semibold">Phone</h2>
                        <p className="text-[#292D33] text-[14px] font-lato font-thin tracking-wider">01956306002</p>
                    </div>
                    <div>
                        <h2 className="text-[#292D33] font-inter font-semibold">Email</h2>
                        <p className="text-[#292D33] text-[14px] font-thin font-lato tracking-wider">monirhrabby.personal@gmail.com</p>
                    </div>
                    <div>
                        <h2 className="text-[#292D33] font-inter font-semibold">Address</h2>
                        <p className="text-[#292D33] text-[14px] font-lato font-thin tracking-wider">Morkun poschim para</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
