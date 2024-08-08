"use client";
const { usePathname } = require("next/navigation");

const AccountHeader = () => {
  const pathname = usePathname();
  let path = "";
  if (pathname?.includes("register")) {
    path = "register";
  } else if (pathname?.includes("login")) {
    path = "register";
  } else if (pathname?.includes("forgotPassword")) {
    path = "forgot password";
  }

  return (
    <h1 className="flex justify-center uppercase text-base font-bold mt-10">
      {`Account | ${path}`}
    </h1>
  );
};

export default AccountHeader;
