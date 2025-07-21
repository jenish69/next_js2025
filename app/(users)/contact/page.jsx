"use client";

import { useActionState } from "react";
import { contactAction } from "./contact.action";
import { useFormStatus } from "react-dom";
import { redirect, useRouter } from "next/navigation";

// import { contactAction } from "./contact.action";

// export const metadata = {
//   title: "Contact Page",
//   description: "this is my Contact page",
//   authors: [
//     { name: "vinod thapa" },
//     { name: "thapa technical", url: "thapatechical.com" },
//   ],
//   keywords: ["nextjs", "react_js", "fullstack"],
// };

// const contactAction = (formData) => {
//   const { fullName, email, message } = Object.fromEntries(formData.entries());
//   console.log(fullName, email, message);
// };

const Contact = () => {
  const [state, formAction, isPending] = useActionState(contactAction, null);
  return (
    <>
      <div className="bg-[rgba(0, 0, 0, 1)] text-white">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col items-center mx-auto">
            <h1 className="text-white text-4xl font-bold mb-5 text-center">
              Get In Touch
            </h1>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800 text-[14px]">
              <form className="space-y-6" action={formAction}>
                {/* Full Name Field */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium mb-2 text-gray-300"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-100 px-3 py-[5px] bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200 text-white placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-100 px-3 py-[5px] bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200 text-white placeholder-gray-400"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-100 px-3 py-[5px] bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors duration-200 text-white placeholder-gray-400 resize-y"
                    placeholder="Enter your message..."
                  />
                </div>

                {/* Submit Button */}
                <Submit />
              </form>
            </div>

            <section>
              {state && (
                <p
                  className={` w-112 p-4 mt-5 text-center rounded-lg ${
                    state.success ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {state.message}
                </p>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

const Submit = () => {
  const { pending, method, data, action } = useFormStatus();
  const router = useRouter();

  return (
    <button
      type="submit"
      disabled={pending}
      onClick={() => setTimeout(() => {router.push("/")}, 2000) }
      className="w-100 bg-pink-600 hover:bg-pink-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
    >
      {pending ? <span>Loading...</span> : <span> Send Message</span>}
    </button>
  );
};
