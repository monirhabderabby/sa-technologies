import { Spinner } from "@/Components/Shared/loader/Spinner";
import Footer from "@/Components/common/Footer/Footer";
import SANavbar from "@/Components/common/Navbar/Navbar";
import { Suspense } from "react";
import "./globals.css";

export const metadata = {
    title: "SA Technologies",
    description:
        "SA Technologies is a company that offers services related to Indian medical visas and website cloning. When it comes to medical visas, SA Technologies assists individuals who require medical treatment in India by providing comprehensive support throughout the visa application process. They have a team of experienced professionals who are well-versed in the documentation requirements, guidelines, and procedures for obtaining a medical visa in India. Promany aims to simplify the visa application process, ensuring a smooth and hassle-free experience for their clients.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <SANavbar />
                <Suspense fallback={<Spinner />}>
                    <main className=" h-auto bg-[linear-gradient(180deg,_#F3F9F9_0%,_rgba(238,246,253,0)_100%)]">{children}</main>
                </Suspense>
                <Footer />
            </body>
        </html>
    );
}
