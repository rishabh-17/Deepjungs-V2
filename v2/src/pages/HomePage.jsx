import React from "react";

import { Img, Input, List, Text } from "components";

import { CloseSVG } from "../assets";

import { Header, MainContent, FeatureList, CommonList } from "components";

const HomePage = () => {
  return (
    <>
      <div className="bg-gray-100_01 flex flex-col font-notoserif items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header />
        <MainContent />
        <FeatureList />
        <CommonList />
      </div>
    </>
  );
};

export default HomePage;
