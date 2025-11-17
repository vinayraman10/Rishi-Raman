import React from "react";
import profile from "../assets/profile.jpg";
import bgImage from "../assets/UltraLinx.jpeg";
import Navbar from "./Navbar";
import { HiArrowDown } from "react-icons/hi";

export default function HRHero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Navbar />
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }} />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-red-900/90 backdrop-blur-sm" />

      {/* Hero content */}
      <div  className="relative z-10 flex flex-col justify-center h-full">
        <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center px-6 md:px-10 py-20">
          {/* Left text */}
          <section className="md:col-span-7 mt-10 text-white">
            <p className="text-2xl md:text-3xl  font-medium">I'm</p>
            <h1 className="mt-2 text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-red-400 drop-shadow-lg">John Doe,</h1>

            <p className="mt-6 text-3xl md:text-4xl max-w-xl leading-snug">
              and I believe HR <br /> is the key to every company's <span className="text-green-400">success.</span>
            </p>

            <p className="mt-6 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">The best businesses are built on great people. I created this site to connect top HR talent with the companies that are ready to lead the future. Let's find your role in that vision.</p>

            <div className="mt-8">
              <a href="#contact" className="inline-block transition-transform duration-300 hover:scale-110 bg-gradient-to-r from-red-800 to-red-600 hover:from-red-700 hover:to-red-500  text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-red-900/50">
                Let's Collaborate
              </a>
            </div>

            {/* Down arrow */}
            {/* <div className="absolute top-200  left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <HiArrowDown className="text-white text-3xl " />
              <span className="text-white/70 text-sm mt-1">Scroll Down</span>
            </div> */}
          </section>

          {/* Right profile image */}
          <aside className="md:col-span-5 flex flex-col items-center md:items-end">
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl"
              style={{
                boxShadow: "0 20px 60px rgba(0,0,0,0.8), inset 0 0 40px rgba(255,0,0,0.15)",
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-red-900 opacity-20"></div>

              <img src={profile} alt="Profile" className="w-full h-full object-cover object-top rounded-full border-4 border-gray-800/60" />

              <div className="absolute -inset-2 rounded-full pointer-events-none" style={{ boxShadow: "0 0 25px rgba(255,0,0,0.15)" }} />
            </div>

            {/* Signature under the image */}
            <div className="mt-4 mx-[22%]">
              <span className="text-red-300 font-script opacity-[32%] text-2xl drop-shadow-lg">Rishi Raman</span>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
