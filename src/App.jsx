import MainBody from "./components/MainBody";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <MainBody />
      </div>
    </div>
  );
};

export default App;
