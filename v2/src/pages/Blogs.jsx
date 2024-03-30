import React, { useEffect, useState } from "react";

import { Button, Img, Input, List, Text } from "components";
import { Header } from "components";
import { CloseSVG } from "../assets";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AtomSpinner } from "react-epic-spinners";
const BlogPage = () => {
  const navigate = useNavigate();
  const [depth4framezerovalue, setDepth4framezerovalue] = React.useState("");
  const [data, setData] = useState(null);
  const [filtered, setfiltered] = useState(null);
  const [search, setsearch] = useState("");
  const [category, setcategory] = useState([

    
  ]);
  const [selectedCategory, setselectedCategory] = useState("All");

  useEffect(() => {
    axios.get("/api/v1/blog/getblogs").then((res) => {
      setData(res?.data?.data);
      setfiltered(res?.data?.data);
    });
  }, []);

  function compare(a, b) {
    if (a.createdAt < b.createdAt) {
      return -1;
    }
    if (a.createdAt > b.createdAt) {
      return 1;
    }
    return 0;
  }

  useEffect(() => {
    if (selectedCategory === "All") {
      setfiltered(
        data?.filter((i) =>
          i.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setfiltered(
        data
          ?.filter((i) => i.title.toLowerCase().includes(search.toLowerCase()))
          ?.filter((i) => {
            console.log(i?.category, selectedCategory);
            return i?.category === selectedCategory;
          })
      );
    }
  }, [search, selectedCategory]);

  return !data ? (
    <div className="w-full h-[90vh] flex items-center bg-gray-100_01 justify-center">
      <AtomSpinner color="red" style={{ width: "200px", height: "200px" }} />
    </div>
  ) : (
    <>
      <div className="bg-gray-100 flex flex-col font-notoserif items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-100 flex flex-col h-[1743px] md:h-auto items-start justify-start w-full">
          <div className="flex flex-col h-[1743px] md:h-auto items-start justify-start w-full">
            <Header blogPage search={search} setsearch={setsearch} />
            <div className="flex flex-col h-[1678px] md:h-auto items-start justify-center md:px-10 px-40 sm:px-5 py-5 w-full">
              <div className="flex flex-col h-[1638px] md:h-auto items-start justify-start max-w-[960px] mx-auto w-full">
                <div className="flex flex-row items-center justify-start p-3 w-full">
                  {category.map((item) => (
                    <Button
                      className={`cursor-pointer font-medium h-8 py-1.5 rounded-[16px] text-center text-pink-800 text-sm w-[400px] h-12 mx-1 ${
                        item === selectedCategory
                          ? "bg-purple-500 text-black"
                          : "bg-purple-50"
                      }`}
                      onClick={() => setselectedCategory(item)}
                    >
                      {item}
                    </Button>
                  ))}
                </div>
                <List
                  className="sm:flex-col flex-row gap-[11px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center p-[15px] w-full"
                  orientation="horizontal"
                >
                  {data &&
                    filtered?.map((item) => (
                      <div className="flex flex-col gap-3 h-[262px] md:h-auto items-start justify-start w-[301px]">
                        <div className="flex flex-col h-[169px] md:h-auto items-start justify-start w-[301px]">
                          <Img
                            className="h-[169px] sm:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-[301px] md:w-full"
                            src={item.thumbnail}
                            alt="depth7frameZero"
                          />
                        </div>
                        <div className="flex flex-col h-[81px] md:h-auto items-start justify-start pb-3 w-[301px]">
                          <div className="flex flex-col h-12 md:h-auto items-start justify-start w-[301px]">
                            <Text
                              className="leading-[24.00px] max-w-[301px] md:max-w-full text-base text-gray-900"
                              size="txtNotoSerifMedium16"
                              onClick={() => {
                                localStorage.setItem("blogId", item._id);
                                navigate("/blog");
                              }}
                            >
                              {item.title}
                            </Text>
                          </div>
                          <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[301px]">
                            <Text
                              className="text-pink-800 text-sm w-full"
                              size="txtNotoSerifRegular14"
                            >
                              {item.author}
                            </Text>
                          </div>
                        </div>
                      </div>
                    ))}
                </List>
                {/* <div className="flex flex-col h-[59px] md:h-auto items-start justify-start max-w-[960px] pb-3 pt-5 px-4 w-full">
                  <div className="flex flex-col h-7 md:h-auto items-start justify-start w-[100px]">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.33px] w-auto"
                        size="txtNotoSerifBold22"
                      >
                        Be social
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  className="h-14 w-[960px]"
                  src="images/img_depth4frame3.svg"
                  alt="depth4frameThree"
                /> */}
                {/* <div className="flex flex-col h-[59px] md:h-auto items-start justify-start max-w-[960px] pb-3 pt-5 px-4 w-full">
                  <div className="flex flex-col h-7 md:h-auto items-start justify-start w-[150px]">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.33px] w-auto"
                        size="txtNotoSerifBold22"
                      >
                        Most Viewed
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[11px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center p-[15px] w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-3 h-[494px] md:h-auto items-start justify-start w-[301px]">
                    <div className="flex flex-col h-[401px] md:h-auto items-start justify-start w-[301px]">
                      <Img
                        className="h-[401px] sm:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-[301px] md:w-full"
                        src="images/img_depth7frame0_401x301.png"
                        alt="depth7frameZero"
                      />
                    </div>
                    <div className="flex flex-col h-[81px] md:h-auto items-start justify-start pb-3 w-[301px]">
                      <div className="flex flex-col h-12 md:h-auto items-start justify-start w-[301px]">
                        <Text
                          className="leading-[24.00px] max-w-[301px] md:max-w-full text-base text-gray-900"
                          size="txtNotoSerifMedium16"
                        >
                          Countries Should Adopt Sugar Tax, Says World Health
                        </Text>
                      </div>
                      <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[301px]">
                        <Text
                          className="text-pink-800 text-sm w-full"
                          size="txtNotoSerifRegular14"
                        >
                          Michael Smith
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 h-[494px] md:h-auto items-start justify-start w-[301px]">
                    <div className="flex flex-col h-[401px] md:h-auto items-start justify-start w-[301px]">
                      <Img
                        className="h-[401px] sm:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-[301px] md:w-full"
                        src="images/img_depth7frame0_7.png"
                        alt="depth7frameZero"
                      />
                    </div>
                    <div className="flex flex-col h-[81px] md:h-auto items-start justify-start pb-3 w-[301px]">
                      <div className="flex flex-col h-12 md:h-auto items-start justify-start w-[301px]">
                        <Text
                          className="leading-[24.00px] max-w-[301px] md:max-w-full text-base text-gray-900"
                          size="txtNotoSerifMedium16"
                        >
                          What Lies Beneath the Veneer of Narcissism?
                        </Text>
                      </div>
                      <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[301px]">
                        <Text
                          className="text-pink-800 text-sm w-full"
                          size="txtNotoSerifRegular14"
                        >
                          Ani Sargsyan
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 h-[494px] md:h-auto items-start justify-start w-[301px]">
                    <div className="flex flex-col h-[401px] md:h-auto items-start justify-start w-[301px]">
                      <Img
                        className="h-[401px] sm:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-[301px] md:w-full"
                        src="images/img_depth7frame0_8.png"
                        alt="depth7frameZero"
                      />
                    </div>
                    <div className="flex flex-col h-[81px] md:h-auto items-start justify-start pb-3 w-[301px]">
                      <div className="flex flex-col h-12 md:h-auto items-start justify-start w-[301px]">
                        <Text
                          className="leading-[24.00px] max-w-[301px] md:max-w-full text-base text-gray-900"
                          size="txtNotoSerifMedium16"
                        >
                          Watching Cooking Shows Help Kids Eat Healthy Foods
                        </Text>
                      </div>
                      <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[301px]">
                        <Text
                          className="text-pink-800 text-sm w-full"
                          size="txtNotoSerifRegular14"
                        >
                          Ani Sargsyan
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex flex-col h-[59px] md:h-auto items-start justify-start max-w-[960px] pb-3 pt-5 px-4 w-full">
                  <div className="flex flex-col h-7 md:h-auto items-start justify-start w-[149px]">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.33px] w-auto"
                        size="txtNotoSerifBold22"
                      >
                        Controversial
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[11px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center p-[15px] w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-3 h-[494px] md:h-auto items-start justify-start w-[301px]">
                    <div className="flex flex-col h-[401px] md:h-auto items-start justify-start w-[301px]">
                      <Img
                        className="h-[401px] sm:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-[301px] md:w-full"
                        src="images/img_depth7frame0_9.png"
                        alt="depth7frameZero"
                      />
                    </div>
                    <div className="flex flex-col h-[57px] md:h-auto items-start justify-start pb-3 w-[301px]">
                      <div className="flex flex-col h-6 md:h-auto items-start justify-start w-[301px]">
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtNotoSerifMedium16"
                        >
                          Is There Hope For Migraine Sufferers?
                        </Text>
                      </div>
                      <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[301px]">
                        <Text
                          className="text-pink-800 text-sm w-full"
                          size="txtNotoSerifRegular14"
                        >
                          Michael Smith
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 h-[494px] md:h-auto items-start justify-start w-[301px]">
                    <div className="flex flex-col h-[401px] md:h-auto items-start justify-start w-[301px]">
                      <Img
                        className="h-[401px] sm:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-[301px] md:w-full"
                        src="images/img_depth7frame0_10.png"
                        alt="depth7frameZero"
                      />
                    </div>
                    <div className="flex flex-col h-[81px] md:h-auto items-start justify-start pb-3 w-[301px]">
                      <div className="flex flex-col h-12 md:h-auto items-start justify-start w-[301px]">
                        <Text
                          className="leading-[24.00px] max-w-[301px] md:max-w-full text-base text-gray-900"
                          size="txtNotoSerifMedium16"
                        >
                          <>
                            Living &#39;Sugar-Free&#39; Where
                            &#39;Artificial&#39; Is A Fine Line
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[301px]">
                        <Text
                          className="text-pink-800 text-sm w-full"
                          size="txtNotoSerifRegular14"
                        >
                          Ani Sargsyan
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 h-[494px] md:h-auto items-start justify-start w-[301px]">
                    <div className="flex flex-col h-[401px] md:h-auto items-start justify-start w-[301px]">
                      <Img
                        className="h-[401px] sm:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] w-[301px] md:w-full"
                        src="images/img_depth7frame0_11.png"
                        alt="depth7frameZero"
                      />
                    </div>
                    <div className="flex flex-col h-[81px] md:h-auto items-start justify-start pb-3 w-[301px]">
                      <div className="flex flex-col h-12 md:h-auto items-start justify-start w-[301px]">
                        <Text
                          className="leading-[24.00px] max-w-[301px] md:max-w-full text-base text-gray-900"
                          size="txtNotoSerifMedium16"
                        >
                          What Lies Beneath the Veneer of Narcissism?
                        </Text>
                      </div>
                      <div className="flex flex-col h-[21px] md:h-auto items-start justify-start w-[301px]">
                        <Text
                          className="text-pink-800 text-sm w-full"
                          size="txtNotoSerifRegular14"
                        >
                          Ani Sargsyan
                        </Text>
                      </div>
                    </div>
                  </div>
                </List> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
