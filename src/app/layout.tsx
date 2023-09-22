import "../style/index.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/navigation/Navbar";

export const metadata = {
  title: "DevWeb",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
