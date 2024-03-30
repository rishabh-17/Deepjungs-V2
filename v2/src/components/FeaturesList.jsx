import React from "react";
import { Img, Text } from "components";
import { commondreams, nightmare, recurring } from "../assets";
import { ChatIcon, BookOpenIcon, LightBulbIcon } from '@heroicons/react/outline';
import { useNavigate } from "react-router-dom";


const features = [
  {
    id: 1,
    title: "Chat with Morpheus",
    description: "Engage in interactive conversations to explore the meanings of your dreams with our AI-powered bot, Morpheus",
    imageUrl: `${commondreams}`,
    
  },
  {
    id: 2,
    title: "Educational Blogs",
    description:
      "Read and learn with our extensive collection of articles and blogs on dream interpretation and related subjects.",
    imageUrl: `${nightmare}`,
  },
  {
    id: 3,
    title: "Insightful Analyses",
    description:
      "Gain deep insights into your subconscious mind with detailed analyses of common themes and symbols in dreams.",
    imageUrl: `${recurring}`,
  },
];

const FeatureList = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-6 pb-3">
          What makes Morpheus unique?
        </h2>
        <div className="flex flex-wrap gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center max-w-sm"
              onClick={() => {
                navigate("/chat")
              }}
            >
              <Img
                className="h-64 w-[400px] object-cover rounded-lg shadow-lg"
                src={feature.imageUrl}
                alt={feature.title}
              />
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-base text-[#BE6EA0] ">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureList;
