import "../style/index.css";

import Header from "@/components/Header";
import Navbar from "@/components/navigation/Navbar";
import Widgetpanel from "@/components/Widgetpanel";
import Footer from "@/components/Footer";

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
        <Widgetpanel/>
        <Footer/>
      </body>
    </html>
  );
}
