export const PrimaryBtn = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="py-[10px] px-[50px] bg-primary flex justify-center items-center hover:bg-[#0066ff] duration-300 text-white rounded-[6px]"
        >
            {children}
        </button>
    );
};
