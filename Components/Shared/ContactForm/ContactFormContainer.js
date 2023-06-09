"use client";
import { Input } from "@material-tailwind/react";
import { PrimaryBtn } from "../buttons/PrimaryBtn";
export const ContactFormContainer = () => {
    return (
        <div className="h-[493px] w-full lg:w-[445px] bg-white shadow-[0px_4px_12px_rgba(12,68,204,0.1)] rounded-[6px] absolute top-[300px] lg:top-[100px] right-[0px] lg:right-[150px] py-[120px] px-[50px] flex flex-col gap-y-[30px]">
            <Input variant="standard" label="Name" />
            <Input variant="standard" label="Email" />
            <Input variant="standard" label="Messasge" />
            <section className="w-full flex justify-end mt-[50px]">
                <PrimaryBtn>Send</PrimaryBtn>
            </section>
        </div>
    );
};
