import Image from "next/image";
import style from "./service.module.css";
import jenish from "@/public/jenish.jpg";

export const metadata = {
  title: "Service Page",
  description: "This is sevice page.",
  authors: [
    {name: "jenish Patel"},
    {name: "Thapa Technical", url: "youtube.com"},
  ],
  keywords: ["nextjs", "reactjs","fullstack"],
};

const Services = async () => {
  return (
    <section className="font-creepster">
      <div className="max-w-4xl mx-auto px-6 mt-5">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Team
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {/* <!-- Team Member 1 --> */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Image
                src="/jenish.jpg"
                width={500}
                height={500}
                alt="jenish"
                className="w-full h-full rounded-full "
              />
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Thapa Technical
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Frontend Developer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              React & TypeScript
            </p>
          </div>

          {/* <!-- Team Member 2 --> */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-full h-full relative bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Image
                src={jenish}
                alt="thapa technical"
                fill={true}
                quality={100}
                priority={false}
                placeholder="blur"
                blurDataURL=""
                className="rounded-lg"
              />
            </div>
          </div>

          {/* <!-- Team Member 3 --> */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Image 
                    src={jenish}
                    width={500}
                    height={500}
                    alt="jeish"
                    className="w-full h-full rounded-full"
                />
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Mike Johnson
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Backend Developer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Node.js & Python
            </p>
          </div>

          {/* <!-- Team Member 4 --> */}
          <div className="bg-white rounded-lg relative shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Image
                    src={jenish}
                    fill={true}
                    alt="jenish"
                    priority={false}
                    placeholder="blur"
                    quality={100}
                    blurDataURL=""
                    className="rounded-lg object-cover"
                />
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Emily Wilson
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              Product Manager
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Strategy & Analytics
            </p>
          </div>

          {/* <!-- Team Member 5 --> */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-orange-600">DL</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              David Lee
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              DevOps Engineer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              AWS & Docker
            </p>
          </div>

          {/* <!-- Team Member 6 --> */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            <div className="w-24 h-24 bg-teal-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-teal-600">AB</span>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800">
              Anna Brown
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              QA Engineer
            </p>
            <p className="text-xs text-gray-500 text-center mt-1">
              Testing & Automation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;