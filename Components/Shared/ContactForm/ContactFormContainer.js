"use client";
import { Input } from "@material-tailwind/react";
import { PrimaryBtn } from "../buttons/PrimaryBtn";
export const ContactFormContainer = () => {
    return (
        <div className="h-[493px] w-[445px] bg-white shadow-[0px_4px_12px_rgba(12,68,204,0.1)] rounded-[6px] absolute top-[100px] right-[200px] py-[120px] px-[50px] flex flex-col gap-y-[20px]">
            <Input variant="standard" label="Name" />
            <Input variant="standard" label="Email" />
            <Input variant="standard" label="Messasge" />
            <div className="w-full flex justify-end mt-[50px]">
                <PrimaryBtn>Send</PrimaryBtn>
            </div>
        </div>
    );
};
