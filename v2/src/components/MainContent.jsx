import React from "react";
import { Img, Text } from "components"; // Assuming these are custom components
import { useNavigate } from "react-router-dom";

const MainContent = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-start justify-center md:px-10 px-5 sm:px-5 py-5 w-full">
      {/* This could be further broken down into smaller components as needed */}
      <div className="flex flex-col items-start justify-start max-w-[1260px] mx-auto w-full">
        {/* Section for "Unlock the Secrets of Your Dreams" */}
        <div className="flex md:flex-col flex-row gap-8 items-start justify-start max-w-[1260px] px-4 py-10 w-full">
          <Img
            className="md:flex-1 w-[800px] h-[416px] sm:h-auto object-fill rounded-[12px]  md:w-full"
            src="images/img_depth6frame0.png"
            alt="Unlock the Secrets of Your Dreams"
          />
          <div className="flex sm:flex-1 flex-col gap-8 h-[316px] md:h-auto items-start w-full">
            <Text
              className="leading-[60.00px] max-w-full text-7xl sm:text-[38px] md:text-[44px] text-gray-900 tracking-[-1.58px]"
              size="txtNotoSerifBlack48"
            >
              <span className="text-[#AB34BC]">Unlock</span> the Secrets of Your{" "}
              <span className="text-[#AB34BC]">Dreams</span>
            </Text>
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtNotoSerifRegular16"
            >
              Explore the hidden meanings and insights behind your nightly
              adventures.
            </Text>
            <button
              className="bg-purple-500 text-[#ffffff] font-bold py-2 px-4 rounded hover:bg-purple-700 transition-colors"
              onClick={() => {
                if (!localStorage.getItem("token")) {
                  navigate("/login");
                } else {
                  navigate("/chat");
                }
              }}
            >
              Talk to Morpheus
            </button>
          </div>
        </div>

        {/* Featured Categories Section */}
        <div className="flex flex-col h-auto items-start justify-start max-w-[960px] pb-3 pt-5 px-4 w-full">
          {/* Dynamic list of categories */}
        </div>

        {/* Additional sections can be added here */}
      </div>
    </div>
  );
};

export default MainContent;
