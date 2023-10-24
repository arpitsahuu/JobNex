"use client"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { asynaddaccomplishmentsRes} from "@/Store/Actions/StudentActions";

const Addaditional = ({ isVisible, onClose }) => {
    const dispatch = useDispatch();
  if (!isVisible) return null;
  const [description, setdescription] = useState("");
 
  const henderclose = (e) => {
    if (e.target.id === "wrapper") onClose();

  };
  const hendelSubmit = (e) => {
    e.preventDefault();
    const position = {
      description
    };
    dispatch(asynaddaccomplishmentsRes(position));
    onClose();
  };
//   useEffect(() => {
//     // Add the 'modal-open' class to the body element when the component mounts
//     document.body.classList.add('modal-open');

//     // Remove the 'modal-open' class from the body element when the component unmounts
//     return () => {
//       document.body.classList.remove('modal-open');
//     };
//   }, []);

  return (
    <div
      className="absolute inset-0 bg-black bg-opacity-50 "
      id="wrapper" onClick={henderclose}
    >
      <div className=" bg-white relative w-[40%]  m-auto mt-16 px-14">
          <button className=" text-2xl absolute top-1 right-2" onClick={() => onClose()}>X</button>
        <form className="flex flex-col items-center justify-center" action="" method="Post" onSubmit={hendelSubmit}>
          <h1 className=" text-2xl text-gray-800 text-center py-10">Additional details</h1>

          <label className="flex flex-col text-xl" >
            <span className="text-sm text-gray-500 my-2">Add your accomplishments such as rewards, recognitions, test scores, certifications, etc. here. You may also add information such as seminars/workshops you have attended or any interests/hobbies you have pursued.</span>
          </label>
          
          <textarea
            className=" bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2 mx-5 rounded-xl"
            placeholder="Short description of work done (max 250 word)"
            name="description"
            value={description}
            id=""
            cols="60"
            rows="8"
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>
          <button className="py-3 px-5 m-8 bg-gray-800 text-white">ADD</button>
        </form>
      </div>
    </div>
  );
};

export default Addaditional;
