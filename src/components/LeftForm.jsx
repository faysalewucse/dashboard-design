import FormInput from "./FormInput";

const LeftForm = () => {
  return (
    <div className="w-full">
      <FormInput label={"Job Title"} value={"Frontend Developer"} />
      <FormInput label={"Hiring Manager"} value={"Faysal Ahmed"} />
      <FormInput label={"Department"} value={"Tech"} />
      <FormInput label={"Team"} value={"Team-A"} />
      <FormInput label={"Client"} value={"John Doe"} />
      <FormInput label={"Priority"} value={"High"} />
      <FormInput label={"Status"} value={"Open"} />
      <FormInput label={"Stage"} value={"Initial"} />
    </div>
  );
};

export default LeftForm;
