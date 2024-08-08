import Image from "next/image";
import Link from "next/link";
import fb from "@/asserts/fb.svg";
import instagram from "@/asserts/instagram.svg";
import youtube from "@/asserts/youtube.svg";

export const LinkStyled = ({ children, href }) => {
  return (
    <Link
      href={href}
      className="hover:underline hover:scale-105 transition-all">
      {children}
    </Link>
  );
};

const Footer = () => {
  return (
    <div className="flex flex-row justify-between mt-20 px-24 py-8 shadow-[rgba(0,0,0,0.1)_0px_-2px_2px_0px]">
      <div className="flex flex-row gap-4 font-black">
        <LinkStyled href={"/"}>About Us</LinkStyled>
        <LinkStyled href={"/"}>Contact Us</LinkStyled>
        <LinkStyled href={"/"}>Blog</LinkStyled>
        <LinkStyled href={"/"}>Privacy Policy</LinkStyled>
      </div>

      <div className="flex flex-row gap-3">
        <LinkStyled href={"/"}>
          <Image src={fb} className="w-8" />
        </LinkStyled>

        <LinkStyled href={"/"}>
          <Image src={instagram} className="w-8" />
        </LinkStyled>

        <LinkStyled href={"/"}>
          <Image src={youtube} className="w-8" />
        </LinkStyled>
      </div>
    </div>
  );
};

export default Footer;
