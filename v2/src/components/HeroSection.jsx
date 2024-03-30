import React from 'react';
import { Img, Text } from 'components'; // Assuming these are custom components

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 py-10 w-full">
      <Img
        className="md:flex-1 h-64 w-full md:w-1/2 object-cover rounded-lg"
        src="images/hero-image.png"
        alt="Dreamy Landscape"
      />
      <div className="flex flex-col gap-8 mt-8 md:mt-0 md:ml-10">
        <Text
          className="text-5xl text-gray-900 font-bold"
          size="txtNotoSerifBlack48"
        >
          Unlock the Secrets of Your Dreams
        </Text>
        <Text
          className="text-base text-gray-700"
          size="txtNotoSerifRegular16"
        >
          Explore the hidden meanings and insights behind your nightly adventures.
        </Text>
        <button
          className="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition-colors"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
