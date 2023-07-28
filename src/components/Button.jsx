const Button = ({ children, type = "button" }) => {
  return (
    <button
      type={type}
      className="flex items-center gap-2 bg-success text-white py-4 px-10 rounded-full hover:bg-successHover transition-all duration-200 w-fit mx-auto"
    >
      {children}
    </button>
  );
};

export default Button;
