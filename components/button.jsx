const Button = ({ text }) => {
  return (
    <button className="w-2/4 py-3 mt-5 text-white bg-black text-base hover:opacity-80 transition-opacity cursor-pointer">
      {text}
    </button>
  );
};

export default Button;
