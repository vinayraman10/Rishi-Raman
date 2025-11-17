import React from "react";
import bgImage from "../assets/UltraLinx.jpeg";
import Navbar from "./Navbar";
import Profile from "../assets/profile.jpg";
const About = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Navbar Always on Top */}
      <Navbar />

      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center -z-10" style={{ backgroundImage: `url(${bgImage})` }} />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-red-900/90 backdrop-blur-sm -z-10" />

      <div className="relative z-20 flex flex-col h-full px-6 py-10 md:px-12 lg:px-20">
        <h1 className="text-3xl md:text-5xl font-bold text-center pt-5 md:pt-10 text-white drop-shadow-lg">Get to Know Me</h1>

        {/* Main Container */}
        <div className="mt-10 flex flex-col lg:flex-row items-center gap-10 p-6 md:p-10 rounded-2xl">
          {/* LEFT TEXT */}
          <div className="flex-1">
            <p className="text-gray-200 leading-relaxed tracking-wide text-base md:text-lg lg:text-xl font-light drop-shadow-sm text-center lg:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cum, ipsa, voluptatibus facere perferendis optio, odit dolore laborum voluptates sequi tenetur maxime quas tempora placeat aut quibusdam illo explicabo et architecto aliquam quia at reiciendis assumenda! Fugit praesentium suscipit dignissimos nihil laboriosam eius numquam dolorem cumque a aperiam magnam vel natus recusandae laborum sapiente repellendus, animi optio debitis. In voluptatem reiciendis tempora, esse et est ut sunt nostrum? Ut amet facere dicta accusamus repellat, ipsa mollitia natus aliquid eius illum ab ipsam porro nisi adipisci debitis, blanditiis obcaecati. Autem non quia explicabo beatae pariatur atque minima. Adipisci porro perspiciatis aperiam?</p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center">
            <img className="w-40 h-40 md:w-56 md:h-56 lg:w-60 lg:h-60 rounded-full object-cover border-4 border-white/30 shadow-xl" src={Profile} alt="Profile" />
          </div>
        </div>

        {/* Button (Responsive) */}
        <button className="px-6 py-3 w-64  md:px-8 md:py-4 mt-6 mx-auto md:mx-0 text-white font-semibold text-base md:text-lg bg-gradient-to-r from-red-700 to-black rounded-full shadow-xl shadow-red-900/30 border border-white/10 flex items-center gap-3 hover:scale-105 hover:shadow-2xl hover:shadow-red-700/40 transition-all duration-300">
          <span>📄</span>
          Download Resume
        </button>

        {/* Cards Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {/* Card 1 */}
          <div className="bg-[#16070A]/60 backdrop-blur-xl border border-white/20 rounded-xl py-6 px-4 flex flex-col items-center gap-3 shadow-lg hover:bg-[#2a0e12]/70 hover:shadow-red-900/40 transition-all duration-300">
            <div className="text-2xl md:text-3xl">🎯</div>
            <p className="text-white font-medium text-sm md:text-base tracking-wide">Goal-Oriented</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#16070A]/60 backdrop-blur-xl border border-white/20 rounded-xl py-6 px-4 flex flex-col items-center gap-3 shadow-lg hover:bg-[#2a0e12]/70 hover:shadow-red-900/40 transition-all duration-300">
            <div className="text-2xl md:text-3xl">💡</div>
            <p className="text-white font-medium text-sm md:text-base tracking-wide">Problem Solver</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#16070A]/60 backdrop-blur-xl border border-white/20 rounded-xl py-6 px-4 flex flex-col items-center gap-3 shadow-lg hover:bg-[#2a0e12]/70 hover:shadow-red-900/40 transition-all duration-300">
            <div className="text-2xl md:text-3xl">🤔</div>
            <p className="text-white font-medium text-sm md:text-base tracking-wide">Analytical Thinking</p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#16070A]/60 backdrop-blur-xl border border-white/20 rounded-xl py-6 px-4 flex flex-col items-center gap-3 shadow-lg hover:bg-[#2a0e12]/70 hover:shadow-red-900/40 transition-all duration-300">
            <div className="text-2xl md:text-3xl">🤝</div>
            <p className="text-white font-medium text-sm md:text-base tracking-wide">Collaboration</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
