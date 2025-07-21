import React from "react";

const About = () => {
  return (
    <div className="text-white px-6 py-12 my-5">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600">
          About Us
        </h1>
        <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
          Welcome to our platform! We're dedicated to providing students with
          easy access to academic resources, textbooks, and tools that empower
          their learning journey.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-500">
              Our Mission
            </h2>
            <p className="text-black text-[14px]">
              Our mission is to make quality educational materials easily
              accessible to students around the globe. We believe that knowledge
              should be free and open for everyone who seeks it.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-500">
              What We Do
            </h2>
            <p className="text-black text-[14px]">
              We provide a platform where students can find and share books, get
              help from peers, and build a community of learning. From science
              to computer programming, we cover a wide range of subjects.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-indigo-500">Join Us</h2>
          <p className="mt-2">
            Be a part of our journey and help shape the future of education.
            Share, learn, and grow with our community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
