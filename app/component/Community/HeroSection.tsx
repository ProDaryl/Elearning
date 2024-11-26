import Image from "next/image";
import heroImage1 from '../../../public/community-image.png'

function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto py-16 md:py-24">
      {/* Left Section */}
      <div className="flex flex-col w-full md:w-[50%]">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-800">
          Join the <span className="text-blue-500">Learning Community</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Connect with learners, share knowledge, and grow together. Explore forums, join groups, and participate in live events to enhance your learning experience.
        </p>
        <div className="mt-6 flex gap-4">
          <button
            className="bg-blue-500 text-white rounded-lg px-6 py-3 font-medium shadow hover:bg-blue-600 transition"
          >
            Get Started
          </button>
          <button
            className="bg-gray-100 text-gray-800 rounded-lg px-6 py-3 font-medium shadow hover:bg-gray-200 transition"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[50%] mt-8 md:mt-0">
        <Image
          src={heroImage1}
          alt="Community Illustration"
          className="w-full h-auto"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default HeroSection;