import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contactus() {
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_shheq7z", //YOUR_SERVICE_ID
        "template_599wba7", //YOUR_TEMPLATE_ID
        formRef.current,
        "0_J5WH5_EP2Ogrwi1" //YOUR_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message");
          console.error(error);
        }
      );
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-dark-radial blocks">
      <div className="max-w-3xl p-6 mx-auto bg-white shadow lg:min-w-[50rem] rounded-xl text-slate-500">
        <h2 className="mb-4 text-2xl font-bold">Contact Me</h2>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-3 py-2 border rounded-md"
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contactus;
