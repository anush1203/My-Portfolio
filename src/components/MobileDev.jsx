import React from "react";
import mad from "../assets/mad.jpg";

const MobileDev = ({ onClose, visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="bg-[#0A1B32] w-full h-screen fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      name="MobileDev"
    >
      <div className="bg-white max-w-[800px] mx-auto rounded-3xl">
        <div className="grid grid-cols-3">
          <div>
            <img className="w-60 h-96 m-5" src={mad} alt="" />

            <p className="text-black mt-2 mb-2 ml-5 text-center font-bold">
              Quizz section for technical section
            </p>
          </div>

          <div className="col-span-2 m-5 text-black custom-text-font">
            <h1 className="items-center justify-center flex text-xl font-bold text-[#3b82f6]">
              Mobile Application Development
            </h1>

            <p className="text-lg font-bold text-[#8892b0] text-center">
              theRightPrep
            </p>

            <ul className="list-disc list-inside m-5">
              <li className="pt-2">
                Developed an android mobile application on Android Studio using
                Java for backend and XML for frontend. Retrieved data from
                Firebase Realtime database and set up FirebaseAuth to verify
                users
              </li>
            </ul>

            <p className="font-bold m-5">Some of the features are,</p>
            <ul className="list-disc list-inside m-5">
              <li>
                Users are able to create their own account where they can track
                progress
              </li>
              <li>
                Users can now choose to prepare between technical and behavioral
                rounds
              </li>
              <li>
                Technical content is provided based on category choosen. Quizzes
                are available to test user skills.
              </li>
              <li>
                Users can also prepare for behaviroal rounds by going over FAQs.
                can record themselves while answering curated questions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDev;
