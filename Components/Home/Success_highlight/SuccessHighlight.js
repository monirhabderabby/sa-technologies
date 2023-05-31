export const SuccessHighlight = () => {
    // content
    const data = [
        {
            id: 1,
            percentage: "85%",
            description: "manage communication more efficiently",
        },
        {
            id: 2,
            percentage: "95%",
            description: "improve communication with customers and clients",
        },
        {
            id: 3,
            percentage: "75%",
            description: "average improvement in team efficiently",
        },
    ];
    return (
        <div className=" mt-[100px] w-full lg:w-[1146px] h-auto md:h-[460px] lg:h-[502px] bg-primary rounded-[20px] shadow-hightlighted px-[20px] lg:px-[121px] py-[40px] md:py-[80px] lg:py-[100px]">
            <h1 className="text-[40px] md:text-[60px] font-inter font-semibold text-white text-center">Journey of our Success</h1>
            <section className="w-full flex flex-col gap-y-[40px] md:flex-row justify-evenly items-center mt-[73px]">
                {data?.map(item => {
                    return (
                        <div key={item.id} className="mx-auto">
                            <h1
                                style={{ borderWidth: "0 0 5px 0" }}
                                className="border-b-[5px] w-1/3 border-white md:text-[50px] lg:text-[70px] text-white font-semibold"
                            >
                                {item.percentage}
                            </h1>
                            <p className="font-inter font-normal text-[20px] leading-[28px] max-w-[221px] text-[#FDFDFD] mt-[12px]">
                                Manage communication more efficiently
                            </p>
                        </div>
                    );
                })}
            </section>
        </div>
    );
};
