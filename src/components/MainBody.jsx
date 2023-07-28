import Form from "./Form";
import Info from "./Info";

const MainBody = () => {
  return (
    <div className="bg-body flex-grow min-h-screen p-10">
      <Info />
      <Form />
    </div>
  );
};

export default MainBody;
