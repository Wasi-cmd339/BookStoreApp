import React from "react";

const Contact = () => {
  return (
    <>
      <div className=" justify-center items-center h-screen mt-20 flex">
        <form>
          <h1 className="mb-4 text-xl ">Contact Us</h1>
          <div className="mt-2 space-y-2">
            <span>Name</span>
            <br />
            <input
              className="w-96 px-4 py-1 border rounded-md outline-none"
              type="text"
              name="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mt-2 space-y-2">
            <span>Email</span>
            <br />
            <input
              className="w-96 px-4 py-1 border rounded-md outline-none"
              type="email"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <div className="mt-2 space-y-2">
            <span>Password</span>
            <br />
            <input
              className="w-96 px-4 py-1 border rounded-md outline-none"
              type="password"
              name="password"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="mt-2 space-y-2">
            <span>Message</span>
            <br />
            <textarea
              className=" px-4 py-1 border rounded-md outline-none w-96"
              placeholder="your message to us"
              type="Message"
              name="Message"
              id="Message"
              cols="8"
              rows="10"
            ></textarea>
          </div>
          <button className="bg-blue-500 text-xl border rounded-lg text-white px-2 py-1 mt-2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
