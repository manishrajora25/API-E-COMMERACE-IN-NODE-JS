import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';

const Contact = () => {
  return (
    <>
<Header/>
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 py-16 px-6 sm:px-12 lg:px-24 mt-[70px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-purple-700 mb-6">
          Contact <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-center text-gray-600 mb-10 text-lg">
          We'd love to hear from you! Whether you have a question about your order, feedback, or business inquiries—our team is ready to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="text-xl font-semibold text-blue-600">📍 Address</h2>
              <p>123, E-Commerce Street,<br />Jaipur Rajastna, India 110001</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-blue-600">📞 Phone</h2>
              <p>+91 8619201862</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-blue-600">✉️ Email</h2>
              <p>Manishrajora453@gmail.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white p-6 rounded-2xl shadow-lg space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>

<Footer/>
    </>

  );
};

export default Contact;
