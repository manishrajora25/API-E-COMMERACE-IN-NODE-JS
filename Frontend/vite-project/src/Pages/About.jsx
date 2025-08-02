import React from 'react';
import Header from '../component/Header';
import Footer
 from '../component/Footer';
const About = () => {
  return (
    <>
    <Header/>

    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 py-16 px-6 sm:px-12 lg:px-24 mt-[70px]">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-blue-700 mb-6">
          About <span className="text-purple-600">Us</span>
        </h1>
        <p className="text-gray-700 text-center max-w-3xl mx-auto text-lg mb-12">
          Welcome to <span className="font-bold text-blue-600">E-COMMERCE</span>, your trusted online store for high-quality products and exceptional service. We're passionate about delivering convenience and value directly to your doorstep.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-600">🚀 Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is simple — to provide a seamless shopping experience with quality assurance, fair prices, and top-notch customer care. We aim to bring the best products from across categories to one convenient online destination.
            </p>

            <h2 className="text-2xl font-semibold text-purple-600">💡 Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Wide range of carefully selected products</li>
              <li>Fast & reliable delivery</li>
              <li>Secure payments & easy checkout</li>
              <li>24/7 customer support</li>
              <li>Hassle-free returns & refunds</li>
            </ul>
          </div>

          <div>
            <img
              src="https://img.freepik.com/free-vector/online-shopping-concept-landing-page_52683-24610.jpg"
              alt="About us"
              className="w-full h-auto rounded-2xl shadow-lg hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        <div className="mt-16 bg-blue-100 p-6 rounded-2xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            🧑‍💻 Built with ❤️ by a passionate team
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We’re constantly evolving and improving our platform to serve you better. Your satisfaction drives our innovation.
          </p>
        </div>
      </div>
    </div>

<Footer/>

    </>

  );
};

export default About;
