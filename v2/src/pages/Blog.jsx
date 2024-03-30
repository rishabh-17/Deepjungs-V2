import React, { useState, useEffect } from "react";
import { Img, Input, Text } from "components";
import { Header } from "components";
import closeIcon from "../assets/closeIcon.png";
import axios from "axios";
import { AtomSpinner } from "react-epic-spinners";
const Blog = () => {
  const [depth4framezerovalue, setDepth4framezerovalue] = React.useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "/api/v1/blog/getblog/" +
          localStorage.getItem("blogId")
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return !data ? (
    <div className="w-full h-[90vh] flex items-center bg-gray-100_01 justify-center">
      <AtomSpinner color="red" style={{ width: "200px", height: "200px" }} />
    </div>
  ) : (
    <>
      <div className="bg-gray-100_01 flex flex-col font-notoserif items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-100 flex flex-col items-start justify-start w-full">
          <Header className="fixed top-0 left-0 right-0 z-50" />
          <div className="flex flex-col items-center justify-center w-[80%] m-auto">
            {data && (
              <div
                className="my-5"
                dangerouslySetInnerHTML={{ __html: data?.blog }}
              />
            )}
            <div className="flex flex-col items-start justify-center w-full md:px-10 px-40 sm:px-5">
              <div className="flex flex-col items-start justify-start max-w-[960px] mx-auto">
                <div className="flex flex-col items-start justify-start max-w-[960px] px-5 py-10 w-full">
                  <div className="flex items-center justify-start max-w-[920px] w-full">
                    <Text
                      className="text-base text-center text-purple-500_03 w-auto"
                      size="txtNotoSerifRegular16Purple50003"
                    >
                      © 2024 DeepJung
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
