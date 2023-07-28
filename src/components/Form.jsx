import LeftForm from "./LeftForm";
import Navigation from "./Navigation";
import RightForm from "./RightForm";

const Form = () => {
  return (
    <div className="mt-10">
      <Navigation />
      <div className="bg-white mt-1 p-10 rounded-lg md:flex gap-5">
        <LeftForm />
        <RightForm />
      </div>
    </div>
  );
};

export default Form;
