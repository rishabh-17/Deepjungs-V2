import React from "react";
import { Img, Text } from "components";
import { flying, teeth, beingchased } from "../assets";
import {useNavigate} from "react-router-dom"


const features = [
  {
    id: 1,
    title: "Flying",
    description: "uncover the meaning of the dream of flying",
    imageUrl: `${flying}`,
  },
  {
    id: 2,
    title: "Teeth Falling Out",
    description: "Explore the symbolism of teeth falling out in dreams",
    imageUrl: `${teeth}`,
  },
  {
    id: 3,
    title: "Being Chased",
    description: "Understand the significance of being chased in dreams.",
    imageUrl: `${beingchased}`,
  },
];

const CommonList = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Common Dreams
        </h2>
        <h3 className="mb-5 text-base text-[#BE6EA0] ">
          Explore the hidden meaning of Common Dreams
        </h3>
        <div className="flex flex-wrap gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center max-w-sm"
              onClick={() => {
                navigate("/blogs")
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

export default CommonList;
