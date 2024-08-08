import AccountHeader from "@/components/accountHeader";

const Template = ({ children }) => {
  return (
    <>
      <AccountHeader />

      {children}
    </>
  );
};

export default Template;
