import Button from "@/components/button";
import TextBox from "@/components/textbox";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-3xl">Login</h1>
        <form className="flex flex-col items-center gap-8 mt-12">
          <TextBox id="emailId" type="email" label="Email" />
          <TextBox id="password" type="password" label="Password" />
          <Link
            href="/account/forgotPassword"
            className="text-black underline mr-auto -mt-5">
            Forgot your password?
          </Link>
          <Button text="Login" type="submit" />
          <Link href="/account/register" className="text-black underline -mt-5">
            Create account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
