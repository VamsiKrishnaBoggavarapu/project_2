import Image from "next/image";
import Link from "next/link";
import logo from "@/asserts/logo.svg";
import profile from "@/asserts/profile.svg";
import whishList from "@/asserts/whishList.svg";
import cart from "@/asserts/cart.svg";

const Header = () => {
  return (
    <div className="flex flex-row justify-between px-24 py-6 shadow-md">
      <Link
        href={"/"}
        className="flex flex-row items-center font-bold uppercase text-2xl">
        <Image src={logo} />
        Spices
      </Link>
      <div className="flex flex-row gap-3">
        <Link href={"/account/login"} className="w-8">
          <Image src={profile} />
        </Link>
        <Link href={"/"} className="w-8">
          <Image src={whishList} />
        </Link>
        <Link href={"/"} className="w-8">
          <Image src={cart} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
