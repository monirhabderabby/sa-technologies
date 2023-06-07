"use client";

//Configuration
import Image from "next/image";
import Link from "next/link";
import React from "react";

//Third party package
import { IconButton, MobileNav, Navbar, Typography } from "@material-tailwind/react";

// Components
import logo from "../../assets/logo/resizedLogo.jpg";

export default function SANavbar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 px-3 duration-200 rounded-sm hover:bg-secondary/50 font-normal text-primary/75  cursor-pointer"
            >
                <Link href="/">Home</Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 px-3 duration-200 rounded-sm hover:bg-secondary/50 font-normal text-primary/75"
            >
                <Link href="/services">Services</Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 px-3 duration-200 hover:bg-secondary/50 rounded-sm font-normal text-primary/75 cursor-pointer"
            >
                <Link href="/our_team">Our Team</Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 px-3 duration-200 rounded-sm hover:bg-secondary/50 font-normal text-primary/75 cursor-pointer"
            >
                <Link href="/about">About</Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1  px-3 duration-200 rounded-sm hover:bg-secondary/50 font-normal text-primary/75 cursor-pointer"
            >
                <Link href="/contact">Contact Us</Link>
            </Typography>
        </ul>
    );

    return (
        <>
            <Navbar className="sticky inset-0 z-10 h-max max-w-full mx-auto shadow-none bg-primary/20 rounded-none py-2 px-4 lg:px-8 lg:py-4 ">
                <div className="flex items-center justify-between text-black max-w-[1400px] mx-auto ">
                    <Typography className="mr-4 cursor-pointer py-1.5 font-medium">
                        <Link href="/">
                            <Image src={logo} loading="lazy" width={145} height={40} />
                        </Link>
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>{navList}</MobileNav>
            </Navbar>
        </>
    );
}
