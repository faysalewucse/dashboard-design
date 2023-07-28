import Button from "./Button";
import dash from "../assets/dash.png";
import folder from "../assets/folder.png";
import candidate from "../assets/candidate.png";
import search from "../assets/search.png";
import interview from "../assets/interview.png";
import handshake from "../assets/handshake.png";
import desc from "../assets/desc.png";
import { BiPlus } from "react-icons/bi";

const sideBarItems = [
  {
    label: "My Jobs",
    icon: folder,
  },
  {
    label: "Dashboard",
    icon: dash,
  },
  {
    label: "Candidate R3achout",
    icon: candidate,
  },
  {
    label: "Search Assistant",
    icon: search,
  },
  {
    label: "Interview",
    icon: interview,
  },
  {
    label: "Intake",
    icon: handshake,
  },
  {
    label: "Job Description",
    icon: desc,
  },
];
const Sidebar = () => {
  return (
    <div className="hidden w-96 lg:flex flex-col items-center p-10 bg-white justify-between">
      <div>
        <Button>
          Create New Job <BiPlus className="text-xl" />
        </Button>
        <div className="flex flex-col gap-5 mt-10">
          {sideBarItems.map((item, index) => (
            <div
              className="flex items-center gap-2 hover:bg-light py-4 px-10 rounded-full cursor-pointer"
              key={index}
            >
              <img src={item.icon} alt="" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
      <div className="w-4/5 rounded-lg text-center bg-primary text-white p-4">
        <h3 className="text-lg">Upgrade Your Account</h3>
        <p className="mb-5 text-sm p-2">
          Increase your usage and get early access to new features
        </p>
        <Button>Upgrade</Button>
      </div>
    </div>
  );
};

export default Sidebar;
