import React, { useState } from "react";

export default function Contact() {
  const [guestData, setGuestData] = useState({
    guestName: "",
    guestPhNumber: "",
    guestEmail: "",
    guestMessage: "",
  });

  const guestDataChange = (e) => {
    const {name, value} = e.target;

    setGuestData({...guestData, [name]:value})
  }

  const postData = (e) => {
    e.preventDefault()
    console.log(guestData)
  }

  return (
    <div className="font-SourceCodePro bg-[#222327] border-b-2 border-neutral-600 md:px-16 lg:px-28:px-40">
      <br />
      <br />
      <h2 className="text-[#6343A3] text-2xl md:text-4xl text-center font-semibold">
        Contact Us Here
      </h2>
      <form
        action=""
        method="get"
        id="contactForm"
        className="m-auto w-11/12 my-6 border-[1px] border-neutral-600 flex flex-col lg:text-xl py-6 rounded-lg lg:my-20"
      >
        <div id="formField" className="w-full flex justify-around py-2">
          <label htmlFor="guestName" className="w-1/6 text-[#e5e5e5]">
            Name
          </label>
          <input
            type="text"
            name="guestName"
            id="guestName"
            className="w-4/6 px-2 border-2 border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6343A3] bg-[#222327] text-white box-border"
            placeholder="Enter Your Name Here"
            onChange={guestDataChange}
          />
        </div>
        <div id="formField" className="w-full flex justify-around py-2">
          <label htmlFor="guestEmail" className="w-1/6 text-[#e5e5e5]">
            E-mail
          </label>
          <input
            type="email"
            name="guestEmail"
            id="guestEmail"
            placeholder="Enter Your Email Here"
            className="w-4/6 px-2 border-2 border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6343A3] bg-[#222327] text-white box-border"
            onChange={guestDataChange}
          />
        </div>
        <div id="formField" className="w-full flex justify-around py-2">
          <label htmlFor="guestPhNumber" className="w-1/6 text-[#e5e5e5]">
            Phone Number
          </label>
          <input
            type="number"
            name="guestPhNumber"
            id="guestPhNumber"
            placeholder="Enter Your Phone Number Here"
            className="w-4/6 px-2 border-2 border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6343A3] bg-[#222327] text-white box-border"
            onChange={guestDataChange}
          />
        </div>
        <div id="formField" className="w-full flex justify-around py-2">
          <label htmlFor="guestMessage" className="w-1/6 text-[#e5e5e5]">
            Message
          </label>
          <textarea
            type="text"
            name="guestMessage"
            id="guestMessage"
            placeholder="Enter Your Message Here"
            className="w-4/6 px-2 min-h-28 lg:min-h-40 border-2 border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6343A3] bg-[#222327] text-white box-border"
            onChange={guestDataChange}
          />
        </div>
        <br />
        <button
          type="submit"
          className="bg-[#6343A3] text-white w-1/4 font-semibold rounded-md mx-auto m-2 p-2"
          onClick={postData}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
