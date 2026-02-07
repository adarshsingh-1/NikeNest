const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth = false,
}) => {
  const baseClasses =
    "flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full";
  const colorClasses = backgroundColor
    ? `${backgroundColor} ${textColor || ""} ${borderColor || ""}`
    : "bg-coral-red text-white border-coral-red";

  return (
    <button
      className={`${baseClasses} ${colorClasses} ${fullWidth ? "w-full" : ""}`}
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
