import brand from "../assets/Logo.png";
import miniBrand from "../assets/mini_logo.png";
import msg from "../assets/msg.png";
import notify from "../assets/notify.png";
import avatar from "../assets/avatar.png";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";
import { AiOutlineMinus } from "react-icons/ai";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="shadow">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between p-5">
        <div className="w-1/2 flex items-center gap-5 md:text-md text-xs">
          <img src={brand} alt="brand" className="hidden md:block" />
          <img src={miniBrand} alt="brand" className="md:hidden" />
          <GoChevronLeft className="hidden md:block text-3xl border p-1 rounded" />
          <p>My Jobs &gt; Frontend Developer &gt; Job Management</p>
        </div>
        <div className="flex items-center gap-5">
          <img src={msg} alt="brand" className="bg-gray-100 p-2 rounded-full" />
          <img src={notify} alt="brand" className="bg-light p-2 rounded-full" />
          <AiOutlineMinus className="text-3xl rotate-90 text-light hidden md:block" />
          <div className="flex items-center gap-5">
            <img
              src={avatar}
              alt="avatar"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full"
            />
            <div className="hidden md:block">
              <h1 className="text-primary font-semibold">Faysal Ahmed</h1>
              <p className="text-sm text-darkGray">Software Engineer</p>
            </div>
            <GoChevronDown className="hidden md:block" />
            <MdMenu className="text-2xl md:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
