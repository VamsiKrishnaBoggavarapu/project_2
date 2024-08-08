const TextBox = ({ id, type, label }) => {
  return (
    <div className="relative w-96">
      <input
        id={id}
        name={id}
        type={type}
        placeholder="xyz"
        className="text-base border-2 border-gray-400 focus:outline-none focus:border-gray-950 transition-colors w-full p-2 placeholder-transparent peer"
      />
      <label
        for={id}
        className="absolute left-0 -top-5 text-xs 
          peer-placeholder-shown:left-2 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base 
          peer-focus:left-0 peer-focus:-top-5 peer-focus:text-gray-950 peer-focus:text-xs transition-all">
        {label}
      </label>
    </div>
  );
};

export default TextBox;
