import Image from "next/image";
import monir from "../../assets/ourteam/monir.jpg";
export const OurTeamC = () => {
    const teams = [
        {
            id: 1,
            name: "Saidur Rahman",
            designation: "Founder",
            imageUrl: monir,
        },
        {
            id: 2,
            name: "Solaiman",
            designation: "Co-founder",
            imageUrl: monir,
        },
        {
            id: 3,
            name: "Monir Hossain",
            designation: "Manager",
            imageUrl: monir,
        },
        {
            id: 4,
            name: "Faruk",
            designation: "Branch Manager, Manikganj",
            imageUrl: monir,
        },
    ];
    return (
        <div className={`pt-[25px]`}>
            <h1 className="text-[32px] font-semibold">Meet our team</h1>

            <div className="mt-[20px] grid-cols-1 grid md:grid-cols-3 lg:grid-cols-4 gap-[20px]">
                {teams?.map(member => {
                    return (
                        <div key={member.id} className=" ring-gray-200 ring-[1px] w-full md:w-[260px] h-[400px] overflow-hidden">
                            <div className="">
                                <Image className="hover:scale-110 duration-300 cursor-pointer" src={member.imageUrl} alt="profile image" />
                            </div>
                            <div className="flex flex-col justify-between items-center mt-[15px]">
                                <h3 className="text-[20px] text-gray-600">{member.name}</h3>
                                <p className="text-[16px] text-gray-400">{member.designation}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
