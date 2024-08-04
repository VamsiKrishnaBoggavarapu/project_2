import dbConnect from "@/lib/dbConnect";

const Page = async () => {
  await dbConnect();
  await new Promise((res, rej) =>
    setTimeout(() => {
      res();
    }, 5000)
  );
  //throw new Error();
  return <h1>Hello</h1>;
};
export default Page;
