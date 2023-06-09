"use client";

import { ContactFormContainer } from "@/Components/Shared/ContactForm/ContactFormContainer";
import { ContactInfo } from "@/Components/Shared/ContactForm/ContactInfo";

export const ContactPage = () => {
    return (
        <>
            <section className="h-full flex flex-col justify-center items-center relative">
                <div className="w-full h-[400px] bg-orange-500">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.701213236658!2d89.99691432599664!3d23.864741384375854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c42f389adeb7%3A0x5fbe3bdc9214a83c!2sSA%20TECH!5e0!3m2!1sen!2sbd!4v1686282529010!5m2!1sen!2sbd"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowfullscreen={true}
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <ContactFormContainer />
                </div>
            </section>
            <ContactInfo />
        </>
    );
};
