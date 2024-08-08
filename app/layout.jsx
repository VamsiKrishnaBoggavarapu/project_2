import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const firaSans = Fira_Sans({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Spices",
  description: "Spices brings taste to your kitchen",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={firaSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
