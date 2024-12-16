"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Send the email when the form is submitted
  const send = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Your inquiry has been sent successfully!");
      } else {
        setStatus(result.error || "Error sending message.");
      }

      // Optionally, clear the form after submission
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <>
      {/* Contact Us Section */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-32 mx-auto">
        <div className="max-w-xl mx-auto ">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Contact us
            </h1>
            <p className="mt-1 text-gray-600">
              We are here to always support you.
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          {/* Card */}
          <div className="flex flex-col border border-yellow-300 rounded-xl p-4 sm:p-6 lg:p-8">
            <h2 className="mb-8 text-xl font-semibold text-gray-800">
              Fill in the form
            </h2>

            <form onSubmit={send}>
              <div className="grid gap-4 lg:gap-6">
                {/* Full Name */}
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-firstname-contacts-1"
                      className="block mb-2 text-sm text-gray-700 font-medium"
                    >
                      Fullname
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      id="hs-firstname-contacts-1"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="py-3 px-4 block w-full border border-yellow-300 rounded-lg text-sm focus:border-yellow-500 focus:ring-yellow-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-email-contacts-1"
                      className="block mb-2 text-sm text-gray-700 font-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="hs-email-contacts-1"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className="py-3 px-4 block w-full border border-yellow-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="hs-about-contacts-1"
                    className="block mb-2 text-sm text-gray-700 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="hs-about-contacts-1"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="py-3 px-4 block w-full border border-yellow-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>

              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
                >
                  Send inquiry
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">{status}</p>
              </div>
            </form>
          </div>
          {/* End Card */}
        </div>
      </div>
      {/* End Contact Us */}
    </>
  );
}
