const Button = ({ label, iconURL, backgroudColor, textColor, borderColor }) => {
  return (
    <button
      className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg rounded-full bg-coral-red leading-none text-white border-coral-red
          ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"}`}
    
    
    
    '
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow-right icon"
          className="w-5 h-5 ml-2 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
