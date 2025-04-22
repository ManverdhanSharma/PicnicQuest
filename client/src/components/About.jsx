import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-12">About Picnic Quest</h1>

        <div className="mb-12">
          <img
            alt="Chennai cityscape"
            className="w-[856px] h-[462px] object-cover rounded-lg mb-8"
            src="/images/chennai.jpg"
          />

          <p className="text-lg text-gray-700 mb-6">
            Welcome to Picnic Quest, your go-to destination for planning hassle-free, memorable picnics in and around Chennai. Born out of a love for the outdoors and a need for easy, well-organized outings, our platform is designed to help you enjoy the perfect picnic without the stress of planning.
          </p>

          <p className="text-lg text-gray-700 mb-6">
            Our website brings together everything you need in one place—from finding the perfect picnic spots to exploring nearby restaurants, checking local events, and even booking curated picnic packages tailored to different tastes and group sizes. Whether you're planning a spontaneous day out or a weekend getaway with friends or family, Picnic Quest has your back.
          </p>

          <p className="text-lg text-gray-700">
            We’ve built this platform with convenience and community in mind, combining smart technology with local expertise to guide you through Chennai’s best green spaces, food joints, cultural hotspots, and hidden gems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To make outdoor experiences effortless and joyful by offering a one-stop solution for picnic planning, local exploration, and curated experiences.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Experience</h3>
            <p className="text-gray-600">
              We are TEAM LEAGUE — a passionate group of developers, designers, and local explorers who are Undergraduates in Chennai, combining tech and tradition to build something unique for modern explorers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Commitment</h3>
            <p className="text-gray-600">
              We’re committed to delivering an intuitive and inspiring platform that helps you spend less time planning.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="mt-16 py-6 border-t border-gray-200">
        <div className="flex justify-center space-x-12 text-gray-700 text-sm">
          <span>Mohammed Zaid</span>
          <span>Manverdhan Sharma</span>
          <span>Mohammed Sibgathullah</span>
        </div>
      </footer>
    </div>
  );
}

export default About;
