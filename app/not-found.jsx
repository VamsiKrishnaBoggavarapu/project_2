import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center flex-col gap-4">
        <h1 className="text-xs uppercase font-bold"></h1>
        <h2 className="text-5xl">Page not found</h2>
        <h3 className="text-xl">
          Oops! The page your looking for does not exist.
        </h3>
        <Link
          href={"/"}
          className="bg-black text-white rounded -8 pt-3 pb-3 pl-6 pr-6 font-bold">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
