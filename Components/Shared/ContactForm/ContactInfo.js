"use client";
export const ContactInfo = () => {
    return (
        <section className="max-w-[1200px] mx-auto">
            <div className=" flex flex-col lg:flex-row items-center gap-x-[60px] mt-[60px]">
                <section>
                    <h2 className="text-[#292D33] font-inter font-semibold">Phone</h2>
                    <p className="text-[#292D33] text-[14px] font-lato font-thin tracking-wider">01956306002</p>
                </section>
                <section>
                    <h2 className="text-[#292D33] font-inter font-semibold">Email</h2>
                    <p className="text-[#292D33] text-[14px] font-thin font-lato tracking-wider">monirhrabby.personal@gmail.com</p>
                </section>
                <section>
                    <h2 className="text-[#292D33] font-inter font-semibold">Address</h2>
                    <p className="text-[#292D33] text-[14px] font-lato font-thin tracking-wider">Morkun poschim para</p>
                </section>
            </div>
        </section>
    );
};
