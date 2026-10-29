import SBKbuilding from "/src/assets/SBKbuilding.JPG";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "6f905f24-f9fb-45c1-84e4-736449d19e1d",
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    const result = await response.json();
    console.log("API Response:", result);
    if (result.success) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div>
      <div className="bg-[url(/src/assets/background6.jpg)] bg-no-repeat bg-cover bg-center p-6 pb-12 md:px-8 md:pt-12">
        <div>
          <h1 className="heading text-center">Contact Us</h1>
        </div>

        {/* scrollable map */}
        <div className="mt-12 mb-15 mx-auto max-w-300 overflow-hidden rounded-sm ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3819.6920551269714!2d106.68710707499268!3d-6.493685693498381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMjknMzcuMyJTIDEwNsKwNDEnMjIuOSJF!5e1!3m2!1sen!2sid!4v1793074117598!5m2!1sen!2sid"
            className="w-full h-85 border-0 "
          ></iframe>
        </div>

        {/* address and form */}
        <div className="flex max-w-300 mx-auto">
          <div className="flex-1 border-r-2 border-slate-300 pr-4 md:pr-8">
            <img
              src={SBKbuilding}
              alt="SBK Building"
              className="rounded-sm mb-4"
            />
            <p className="font-bold text-md mb-4">
              PT. Semesta Building Konstruksi
            </p>
            <p className="font-bold text-sm">Head Office</p>
            <p className="text-sm">Cidodol</p>
            <p className="text-sm">Kel. Grogol Selatan</p>
            <p className="text-sm">Kec. Kebayoran Lama</p>
            <p className="text-sm">Jakarta Selatan</p>
            <p className="text-sm">12220</p>
          </div>
          <div className="flex-2 pl-4 md:pl-8">
            <form onSubmit={handleSubmit}>
              <div className="w-20 mb-2">
                <label htmlFor="name">Name:</label>
              </div>
              <input
                id="name"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border px-2 rounded-sm py-1 md:w-60 mb-6"
              />
              <div className="w-20 mb-2">
                <label htmlFor="email">Email:</label>
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
                className="border px-2 rounded-sm py-1 md:w-60 mb-6"
              />
              <div className="w-20 mb-2">
                <label htmlFor="message">Message:</label>
              </div>
              <textarea
                id="message"
                placeholder="Type here..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="border h-50 px-2 rounded-sm w-5/5 max-w-100 py-1"
              />
              <br />
              <button
                type="submit"
                className="mt-6 border rounded-lg px-2 bg-sky-950 text-white py-1 hover:cursor-pointer transition-all hover:scale-105 active:scale-100"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="flex-1">
            <a
              href="https://wa.me/+6287770705006?text=Hello,%20PT.%20Semesta%20Building%20Konstruksi."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on Whatsapp"
              className="fixed bottom-6 right-6 w-15 h-15 bg-[#25d366] text-white rounded-full z-99 items-center flex justify-center hover:cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-10 h-10 text-white transition-all hover:scale-105 active:scale-100"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[url(/src/assets/background3.jpg)] w-full h-30 bg-center"></div>
    </div>
  );
}

export default Contact;
