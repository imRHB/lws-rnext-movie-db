import React from "react";

import Footer from "@/app/(components)/Footer";
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";

export const metadata = {
    title: "MovieDB | Learn With Sumit",
    description: "A movie collection website by LWS!",
};

export default function MainLayout({ children, movieModal, params: { lang } }) {
    return (
        <React.Fragment>
            <div className="content">{movieModal}</div>

            <div className="sticky top-0 bg-body">
                <Navbar lang={lang} />
            </div>

            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem] mx-auto my-4">
                <Sidebar lang={lang} />
                <main className="content">{children}</main>
            </div>

            <Footer />
        </React.Fragment>
    );
}
