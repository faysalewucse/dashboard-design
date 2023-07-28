import { AiOutlineCloudUpload } from "react-icons/ai";

const RightForm = () => {
  return (
    <div className="w-full">
      <h1>Upload Your Job Description</h1>
      <div className="my-2">
        <input type="file" className="hidden" />
        <button className="text-success border border-dashed border-success py-10 px-16 rounded-xl flex flex-col items-center w-full">
          <AiOutlineCloudUpload />
          Drop or Upload your File
        </button>
      </div>
      <h1>Job Description</h1>
      <div className="mt-2">
        <textarea
          className="border border-dashed border-side w-full rounded-lg p-2"
          placeholder="Copy/Paste your job description"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="flex mt-5 justify-end gap-5">
        <button className="border py-3 px-6  rounded-full">Cancel</button>
        <button className="bg-success text-white py-3 px-8  rounded-full">
          Save
        </button>
      </div>
    </div>
  );
};

export default RightForm;
