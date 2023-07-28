import { GoChevronDown } from "react-icons/go";
import { AiFillSetting } from "react-icons/ai";

const Info = () => {
  return (
    <div className="bg-white w-full mx-auto rounded-xl justify-between grid xl:grid-cols-7 grid-cols-4 p-4">
      <div className="flex justify-between xl:col-span-3 xl:justify-around col-span-4">
        <div className="p-2">
          <h3 className="text-lg">Job Title</h3>
          <h4 className="mt-2 font-semibold flex items-center gap-2">
            <h1>Frontend Developer</h1>
            <GoChevronDown />
            <AiFillSetting />
          </h4>
        </div>
        <div className="p-2">
          <h3 className="text-lg">Hiring Manager</h3>
          <h4 className="mt-2 font-semibold">Faysal Ahmed</h4>
        </div>
        <div className="p-2">
          <h3 className="text-lg">Department</h3>
          <h4 className="mt-2 font-semibold">Techn</h4>
        </div>
      </div>
      <div className="p-2">
        <h3 className="text-lg">Team</h3>
        <h4 className="mt-2 font-semibold">Team-A </h4>
      </div>
      <div className="p-2">
        <h3 className="text-lg">Client</h3>
        <h4 className="mt-2 font-semibold">John Doe</h4>
      </div>
      <div className="p-2">
        <h3 className="text-lg">Status</h3>
        <h4 className="mt-2 font-semibold text-success">Open</h4>
      </div>
      <div className="p-2">
        <h3 className="text-lg">Priority</h3>
        <h4 className="mt-2 font-semibold text-red-500">Hight</h4>
      </div>
    </div>
  );
};

export default Info;
