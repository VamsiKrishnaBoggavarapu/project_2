import Button from "@/components/button";
import TextBox from "@/components/textbox";
import Link from "next/link";

const Register = () => {
  async function createAccount(formData) {
    "use server";

    console.log(formData?.get("firstName"));
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-3xl">Create account</h1>
      <form
        action={createAccount}
        className="flex flex-col items-center gap-8 mt-12">
        <TextBox id="firstName" type="text" label="First Name" />
        <TextBox id="lastName" type="text" label="Last Name" />
        <TextBox id="emailId" type="email" label="Email" />
        <TextBox id="password" type="password" label="Password" />
        <Button type="submit" text="Create" />
      </form>
      <Link href="/account/login" className="text-black underline mt-3">
        Cancel
      </Link>
    </div>
  );
};

export default Register;
