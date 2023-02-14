import React, { useEffect } from "react";

const Contact = () => {
  return (
    <div className="bg-white w-full h-screen " name="contact" id="contactId">
      <form
        method="POST"
        className="max-w-[600px] mx-auto p-4 flex flex-col justify-center w-full h-full"
        action="https://getform.io/f/f49e4d78-4caf-4e5f-8210-3f690de274e8"
      >
        <div className="pb-8 ">
          <span className="text-4xl font-bold text-black custom-heading-font">
            Contact
          </span>
          <span className="text-4xl font-bold text-[#3b82f6] custom-heading-font pl-2">
            Me
          </span>
          {/* <p className="text-4xl font-bold inline text-[#3b82f6] custom-heading-font">
            Contact Me
          </p> */}
        </div>

        <input
          className="bg-white border border-black p-2 rounded-sm"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 border border-black rounded-sm"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className=" border border-black p-2 rounded-sm"
          name="message"
          cols="20"
          rows="5"
          placeholder="Message"
        ></textarea>
        <button className="text-white font-bold bg-[#3b82f6] px-4 py-3 my-8 mx-auto flex rounded">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
