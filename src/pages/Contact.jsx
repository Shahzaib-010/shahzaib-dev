import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", form);
      alert("Message Sent!");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="w-full min-h-screen relative">
      <div className="w-full flex flex-col items-center pt-10 md:pt-16 z-10 relative">
        {/* TITLE */}
        <h1 className="text-[18vw] sm:text-[14vw] lg:text-[8vw] font-extrabold uppercase leading-none text-center lg:text-left">
          <span className="bg-gradient-to-r from-red-600 to-orange-500 text-transparent bg-clip-text font-switzer2">
            Contact
          </span>
        </h1>

        {/* CONTENT */}
        <div className="w-full max-w-[92%] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 p-4 pt-10">
          {/* LEFT SIDE INFO */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6">
            <div className="flex items-start gap-3">
              <span className="text-[10vw] sm:text-[6vw] text-orange-600 font-wix2 leading-none">
                "
              </span>
              <p className="text-base sm:text-lg lg:text-xl text-white font-clash-medium leading-relaxed">
                Got an idea in mind? Let’s <span className="text-orange-600">Connect</span> and explore how I can bring
                it to life.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="./images/pfp.jpeg"
                alt="pfp"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
              />
              <div className="font-clash-medium text-white">
                <p>Shahzaib Anwar</p>
                <p className="text-white/70">Creative Developer</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-[55%] flex flex-col gap-6 font-switzer"
          >
            {/* NAME */}
            <div className="flex flex-col w-full text-white">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                value={form.name}
                onChange={handleChange}
                className={`w-full bg-transparent outline-none border-b border-b-neutral-400 
                  ${
                    errors.name
                      ? "border-red-500"
                      : "border-transparent focus:border-orange-500"
                  }
                  text-base sm:text-lg pb-3 placeholder-gray-500 transition-all duration-300`}
              />

              {errors.name && (
                <p className="text-red-500 text-sm mt-2">{errors.name}</p>
              )}
            </div>

            {/* EMAIL */}
            <div className="flex flex-col w-full">
              <input
                type="email"
                name="email"
                placeholder="Your Email*"
                value={form.email}
                onChange={handleChange}
                className={`w-full bg-transparent outline-none border-b border-b-neutral-400  
                  ${
                    errors.email
                      ? "border-red-500"
                      : "border-transparent focus:border-orange-500"
                  }
                  text-base sm:text-lg pb-3 placeholder-gray-500 transition-all duration-300`}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-2">{errors.email}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col w-full">
              <textarea
                type="text-area"
                name="message"
                placeholder="Your Message*"
                value={form.message}
                onChange={handleChange}
                rows="5"
                className={`w-full bg-transparent outline-none border-b border-b-neutral-400   
                  ${
                    errors.message
                      ? "border-red-500"
                      : "border-transparent focus:border-orange-500"
                  }
                  text-base sm:text-lg pb-3 placeholder-gray-500 transition-all duration-300`}
              />

              {errors.message && (
                <p className="text-red-500 text-sm mt-2">{errors.message}</p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-black font-clash-medium
              text-sm sm:text-base px-6 py-3 rounded-md w-fit transition-all duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
