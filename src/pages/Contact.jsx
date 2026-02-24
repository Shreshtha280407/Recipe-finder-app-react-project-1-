import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your query has been submitted!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center px-4">
      
      {/* Card */}
      <div className="w-full max-w-2xl bg-gradient-to-br from-orange-50 via-white to-rose-50 
                      rounded-3xl shadow-2xl p-8 space-y-6">

        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Contact Us
          </h2>
          <p className="text-gray-500 mt-2">
            Have a question or suggestion? We'd love to hear from you.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-sm font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">
              Your Query
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-orange-500 text-white font-semibold 
                       hover:bg-orange-600 transition duration-300 shadow-lg"
          >
            Submit Query
          </button>
        </form>

        {/* Divider */}
        <div className="border-t pt-5 text-center text-sm text-gray-500 space-y-1">
          <p className="font-semibold text-gray-700">Recipe Finder</p>
          <p>Email: support@recipefinder.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>© 2026 Recipe Finder. All rights reserved.</p>
        </div>

      </div>
    </div>
  );
}

export default Contact;