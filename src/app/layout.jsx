import "./globals.css";

export const metadata = {
    title: "MovieDB | Learn With Sumit",
    description: "A movie collection website by LWS!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
