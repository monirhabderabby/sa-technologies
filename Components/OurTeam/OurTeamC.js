import Image from "next/image";

// third party packages
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

// components
import monir from "../../assets/ourteam/monir.jpg";
import saidur from "../../assets/ourteam/saidur.jpg";

export const OurTeamC = () => {
    // content
    const teams = [
        {
            id: 1,
            name: "Saidur Rahman",
            designation: "Founder",
            imageUrl: saidur,
            facebook: "https://www.facebook.com/saidurrahmanfb",
        },
        {
            id: 2,
            name: "Solaiman",
            designation: "Co-founder",
            imageUrl: monir,
            facebook: "https://www.facebook.com/saidurrahmanfb",
        },
        {
            id: 3,
            name: "Monir Hossain",
            designation: "Manager",
            imageUrl: monir,
            facebook: "https://www.facebook.com/monirhabderabby/",
        },
        {
            id: 4,
            name: "Faruk",
            designation: "Branch Manager, Manikganj",
            imageUrl: monir,
            facebook: "https://www.facebook.com/monirhabderabby/",
        },
    ];
    return (
        <div className={`pt-[25px]`}>
            <h1 className="text-[32px] font-semibold text-center">Meet Our Talented Team Members</h1>
            <p className="text-[12px] text-center w-full md:w-1/3 lg:w-1/2 mx-auto text-gray-400">
                we believe in the strength of teamwork and collaboration. Our dedicated team members bring together diverse backgrounds, skills, and
                expertise to drive innovation and deliver exceptional results. With a shared passion for excellence, we foster an environment where
                ideas thrive, creativity blossoms, and challenges are conquered.
            </p>

            <div className="grid-cols-1 grid md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-[100px]">
                {teams?.map(member => {
                    return (
                        <div
                            key={member.id}
                            className=" bg-gray-100 hover:bg-primary w-full md:w-[260px] h-[190px] duration-300 hover:h-[260px] overflow-hidden flex flex-col items-center p-[12px] py-[20px] rounded-[6px] group cursor-pointer relative"
                            style={{ transition: "height 0.5s ease-in-out" }}
                        >
                            <div className="w-[80px] h-[80px] rounded-full border-[3px] border-primary group-hover:border-[#2f7aeb] duration-300">
                                <Image
                                    className="hover:scale-110 duration-300 h-full w-full rounded-full cursor-pointer"
                                    src={member.imageUrl}
                                    alt="profile image"
                                    width={80}
                                    height={80}
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex flex-col justify-between items-center mt-[15px] ">
                                <h3 className="text-[20px] font-semibold text-gray-600 group-hover:text-white">{member.name}</h3>
                                <p className="text-[16px] text-gray-400">{member.designation}</p>
                            </div>
                            <div
                                className="absolute bottom-[20px] w-full hidden group-hover:flex px-[12px] justify-evenly"
                                style={{
                                    transitionDelay: "1s",
                                }}
                            >
                                <a
                                    target="_blank"
                                    href={member?.facebook}
                                    className="hover:bg-white/25 duration-300 w-[40px] h-[40px] flex justify-center items-center rounded-full"
                                >
                                    <FaFacebookF className="text-white" />
                                </a>
                                <a
                                    target="_blank"
                                    href={member?.facebook}
                                    className="hover:bg-white/25 duration-300 w-[40px] h-[40px] flex justify-center items-center rounded-full"
                                >
                                    <AiFillInstagram className="text-white" />
                                </a>
                                <a
                                    target="_blank"
                                    href={member?.facebook}
                                    className="hover:bg-white/25 duration-300 w-[40px] h-[40px] flex justify-center items-center rounded-full"
                                >
                                    <FaLinkedinIn className="text-white" />
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
