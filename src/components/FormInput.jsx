const FormInput = ({ label, type = "text", value }) => {
  return (
    <div className="mb-3">
      <h1 className="text-sm mb-1">{label}</h1>
      <input
        className="border border-side rounded-full py-1 px-4 w-full text-formText"
        type={type}
        value={value}
      />
    </div>
  );
};

export default FormInput;
