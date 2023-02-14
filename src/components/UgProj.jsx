import React from "react";

const UgProj = ({ onClose, visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="w-full h-screen fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      name="UgProj"
    >
      <div className="bg-white max-w-[800px] mx-auto rounded-3xl">
        <div className="m-5 text-black custom-text-font">
          <h1 className="items-center justify-center flex text-xl font-bold text-[#3b82f6]">
            Undergraduate Capstone
          </h1>

          <p className="text-center text-lg font-bold text-[#8892b0]">
            Sketch Based Face Recognition
          </p>

          <ul className="list-disc list-inside m-5">
            <li>
              Developed an application that takes a sketch as an input to
              determine if the person in the sketch is on our database.
            </li>
            <li>
              Extrapolated facial points using openCV and python and ran HOG and
              CNN algorithms to compare input image with images in database.
            </li>
            <li>
              Published a paper in International Journal of Current Research.
              Click on see more to view research paper.
            </li>
            <li>
              Presented at INVATI, a project exhibition held at Nitte Meenakshi
              Institute of Technology.
            </li>
          </ul>

          <div className="text-center mt-8">
            <a
              className="px-6 py-3 border border-black no-underline bg-[#e3e5de] rounded hover:border-[#3b82f6] hover:bg-[#3b82f6] hover:text-white text-black font-bold"
              href="http://www.journalcra.com/article/sketch-based-face-recognition"
              target={"_blank"}
              rel={"noreferrer"}
            >
              See Publication
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UgProj;
