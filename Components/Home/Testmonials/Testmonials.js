"use client";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import profile from "../../../assets/testmonials/Profile.png";
import union from "../../../assets/testmonials/Union.png";

//css
import "swiper/css";
import "swiper/css/pagination";

export const Testmonials = () => {
    const testimonials = [
        {
            id: 1,
            image: profile,
            testimonial:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet purus sed quam scelerisque, in pharetra mi volutpat.",
            designation: "Senior Developer",
            company: "ABC Company",
        },
        {
            id: 2,
            image: profile,
            testimonial:
                "Vivamus blandit mauris et finibus dignissim. Quisque consequat, lacus ac feugiat bibendum, justo purus auctor metus, in malesuada nulla ante ac odio.",
            designation: "Product Manager",
            company: "XYZ Corporation",
        },
        {
            id: 3,
            image: profile,
            testimonial:
                "Fusce id erat gravida, pulvinar tellus vitae, gravida elit. Sed ullamcorper, elit eget consequat dapibus, turpis turpis gravida est, et maximus lectus ante in ante.",
            designation: "Marketing Specialist",
            company: "PQR Solutions",
        },
    ];
    return (
        <div className={` h-auto bg-white mt-[100px] relative`}>
            <div className="absolute bottom-6 right-6">
                <Image src={union} width={180} loading="lazy" className="opacity-40" />
            </div>
            <div className="">
                <h1 className="text-[24px] md:text-[48px] lg:text-[60px] text-[#2C3847] font-inter font-semibold text-center">
                    What our Customers say
                </h1>
            </div>
            <Swiper
                loop={true}
                pagination={true}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 7500,
                }}
                className="mySwiper"
            >
                {testimonials?.map(item => {
                    return (
                        <SwiperSlide key={item?.id} className="pb-[60px]">
                            <section className="flex flex-col items-center gap-y-[32px] mt-[30px] md:mt-[60px]">
                                <h3 className="max-w-[600px] text-center text-[#160637] text-[16px] md:text-[20px] lg:text-[24px] font-lato">
                                    "{item?.testimonial}"
                                </h3>
                                <Image src={profile} width={80} height={80} loading="lazy" />
                                <div>
                                    <p className="text-[16px] text-black font-lato font-semibold text-center">Monir Hossain</p>
                                    <p className="text-center text-black font-lato font-medium">
                                        {item?.designation} at <span>{item?.company}</span>
                                    </p>
                                </div>
                            </section>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};
