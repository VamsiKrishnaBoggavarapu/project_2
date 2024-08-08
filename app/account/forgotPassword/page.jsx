import Button from "@/components/button";
import TextBox from "@/components/textbox";
import Link from "next/link";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-3xl">Reset your password</h1>
        <h3 className="text-base text-gray-500 mt-3">
          We will send you an email to reset your password
        </h3>
        <form className="flex flex-col items-center gap-8 mt-12">
          <TextBox id="emailId" type="email" label="Email" />
          <Button type="submit" text="Submit" />
        </form>
        <Link href="/account/login" className="text-black underline mt-3">
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
