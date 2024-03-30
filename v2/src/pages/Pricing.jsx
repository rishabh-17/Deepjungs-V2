import React from "react";

import { Header, Img, Input, List, Text } from "components";

import { CloseSVG } from "../assets";

const PricingPage = () => {
  const [depth4framezerovalue, setDepth4framezerovalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-notoserif items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-100 flex flex-col h-[993px] md:h-auto items-start justify-start w-full">
          <div className="flex flex-col h-[993px] md:h-auto items-start justify-start w-full">
            <Header />
            <div className="flex flex-col h-[756px] md:h-auto items-center justify-center px-40 md:px-5 py-5 w-full">
              <div className="flex flex-col h-[736px] md:h-auto items-start justify-start max-w-[977px] w-full">
                <div className="flex flex-col h-[59px] md:h-auto items-start justify-start max-w-[960px] pb-3 pt-5 px-4 w-full">
                  <div className="flex flex-col h-7 md:h-auto items-start justify-start w-[77px]">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-[22px] text-gray-900 sm:text-lg md:text-xl tracking-[-0.33px] w-auto"
                        size="txtNotoSerifBold22"
                      >
                        Pricing
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-[11px] items-center justify-start pl-[11px] py-[11px] w-[99%] md:w-full">
                  <div className="bg-gray-100_01 border border-purple-100 border-solid flex flex-col gap-4 h-[310px] md:h-auto items-start justify-start ml-1 md:ml-[0] p-6 sm:px-5 rounded-[12px] w-[302px]">
                    <div className="flex flex-col gap-1 h-[73px] md:h-auto items-start justify-start w-[252px]">
                      <div className="flex flex-row h-6 md:h-auto items-center justify-between w-[252px]">
                        <div className="flex flex-col h-5 md:h-auto items-start justify-start w-[42px]">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-base text-gray-900 w-auto"
                              size="txtNotoSerifBold16"
                            >
                              Basic
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col h-6 md:h-auto items-start justify-start w-[113px]">
                          <div className="bg-purple-500 flex flex-col h-6 md:h-auto items-start justify-center px-3 py-[3px] rounded-[12px] w-[113px]">
                            <div className="flex flex-col h-[18px] md:h-auto items-start justify-start w-[89px]">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-white-A700 text-xs tracking-[0.18px] w-auto"
                                  size="txtNotoSerifMedium12"
                                >
                                  Popular choice
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[252px]">
                        <div className="flex flex-col h-[45px] md:h-auto items-start justify-start w-[81px]">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-1.19px] w-auto"
                              size="txtNotoSerifBlack36"
                            >
                              Free
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col h-10 md:h-auto items-start justify-start w-[252px]">
                      <div className="bg-purple-50 flex flex-col h-10 md:h-auto items-center justify-center px-4 rounded-[20px] w-[252px]">
                        <div className="bg-deep_purple-50 flex flex-col h-[21px] md:h-auto items-start justify-start w-[90px]">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-gray-900 text-sm tracking-[0.21px] w-full"
                              size="txtNotoSerifBold14Gray900"
                            >
                              Get Started
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 h-[67px] md:h-auto items-start justify-start w-[252px]">
                      <div className="flex flex-row gap-3 h-10 md:h-auto items-start justify-start w-[252px]">
                        <Img
                          className="h-[39px] w-5"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                        <div className="flex flex-col h-10 md:h-auto items-start justify-start w-[220px]">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-[13px] text-gray-900 w-auto"
                              size="txtNotoSerifRegular13"
                            >
                              Access to common dream categories
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-3 h-5 md:h-auto items-start justify-start w-[252px]">
                        <Img
                          className="h-5 w-5"
                          src="images/img_checkmark.svg"
                          alt="checkmark_One"
                        />
                        <div className="flex flex-col h-5 md:h-auto items-start justify-start w-[107px]">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-[13px] text-gray-900 w-auto"
                              size="txtNotoSerifRegular13"
                            >
                              One user account
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[9px] grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-gray-100_01 border border-purple-100 border-solid flex flex-col gap-4 h-[310px] md:h-auto items-start justify-start p-6 sm:px-5 rounded-[12px] w-[302px]">
                      <div className="flex flex-col gap-1 h-[84px] md:h-auto items-start justify-start w-[273px]">
                        <div className="flex flex-col h-5 md:h-auto items-center justify-between w-[252px]">
                          <div className="flex flex-col h-5 md:h-auto items-start justify-start w-[74px]">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-base text-gray-900 w-auto"
                                size="txtNotoSerifBold16"
                              >
                                Standard
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-1 h-[60px] md:h-auto items-start justify-start w-[273px]">
                          <div className="flex flex-col h-[45px] md:h-auto items-start justify-start w-[216px]">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-1.19px] w-auto"
                                size="txtNotoSerifBlack36"
                              >
                                $9.99/month
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col h-10 md:h-auto items-start justify-start w-[53px]">
                            <div className="flex flex-col items-start justify-start w-[53px]">
                              <Text
                                className="leading-[20.00px] max-w-[53px] md:max-w-full text-base text-gray-900"
                                size="txtNotoSerifBold16"
                              >
                                per month
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col h-10 md:h-auto items-start justify-start w-[252px]">
                        <div className="bg-purple-50 flex flex-col h-10 md:h-auto items-center justify-center px-4 rounded-[20px] w-[252px]">
                          <div className="bg-deep_purple-50 flex flex-col h-[21px] md:h-auto items-start justify-start w-[123px]">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-gray-900 text-sm tracking-[0.21px] w-auto"
                                size="txtNotoSerifBold14Gray900"
                              >
                                Choose Standard
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 h-[104px] md:h-auto items-start justify-start w-[252px]">
                        <div className="flex flex-row gap-3 h-5 md:h-auto items-start justify-start w-[252px]">
                          <Img
                            className="h-5 w-5"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                          <div className="flex flex-col h-5 md:h-auto items-start justify-start w-[120px]">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-[13px] text-gray-900 w-auto"
                                size="txtNotoSerifRegular13"
                              >
                                Everything in Basic
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-3 h-5 md:h-auto items-start justify-start w-[252px]">
                          <Img
                            className="h-5 w-5"
                            src="images/img_checkmark.svg"
                            alt="checkmark_One"
                          />
                          <div className="flex flex-col h-5 md:h-auto items-start justify-start w-[120px]">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-[13px] text-gray-900 w-auto"
                                size="txtNotoSerifRegular13"
                              >
                                Nightmare analysis
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-3 h-5 md:h-auto items-start justify-start w-[252px]">
                          <Img
                            className="h-5 w-5"
                            src="images/img_checkmark.svg"
                            alt="checkmark_Two"
                          />
                          <div className="flex flex-col h-5 md:h-auto items-start justify-start w-[161px]">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-[13px] text-gray-900 w-auto"
                                size="txtNotoSerifRegular13"
                              >
                                Recurring dream patterns
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-3 h-5 md:h-auto items-start justify-start w-[252px]">
                          <Img
                            className="h-5 w-5"
                            src="images/img_checkmark.svg"
                            alt="checkmark_Three"
                          />
                          <div className="flex flex-col h-5 md:h-auto items-start justify-start w-[132px]">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-[13px] text-gray-900 w-auto"
                                size="txtNotoSerifRegular13"
                              >
                                Up to 3 user accounts
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100_01 border border-purple-100 border-solid flex flex-col gap-4 h-[310px] md:h-auto items-start justify-start p-6 sm:px-5 rounded-[12px] w-[319px]">
                      <div className="flex flex-col gap-1 h-[84px] md:h-auto items-start justify-start w-[295px]">
                        <div className="flex flex-col h-5 md:h-auto items-center justify-between w-[252px]">
                          <div className="flex flex-col h-5 md:h-auto items-start justify-start w-[75px]">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-base text-gray-900 w-auto"
                                size="txtNotoSerifBold16"
                              >
                                Premium
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-1 h-[60px] md:h-auto items-start justify-start w-[295px]">
                          <div className="flex flex-col h-[50px] md:h-auto items-start justify-start w-[235px]">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-1.19px] w-auto"
                                size="txtNotoSerifBlack36"
                              >
                                $19.99/month
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col h-10 md:h-auto items-start justify-start w-[55px]">
                            <div className="flex flex-col h-10 md:h-auto items-start justify-start w-[55px]">
                              <Text
                                className="leading-[20.00px] max-w-[55px] md:max-w-full text-base text-gray-900"
                                size="txtNotoSerifBold16"
                              >
                                per month
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col h-10 md:h-auto items-start justify-start w-auto">
                        <div className="bg-purple-50 flex flex-col h-10 md:h-auto items-center justify-center px-4 rounded-[20px] w-[252px]">
                          <div className="bg-deep_purple-50 flex flex-col h-[21px] md:h-auto items-start justify-start w-[95px]">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-gray-900 text-sm tracking-[0.21px] w-auto"
                                size="txtNotoSerifBold14Gray900"
                              >
                                Go Premium
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 h-[104px] md:h-auto items-start justify-start w-[252px]">
                        <div className="flex flex-row gap-3 h-5 md:h-auto items-start justify-start w-[252px]">
                          <Img
                            className="h-5 w-5"
                            src="images/img_checkmark.svg"
                            alt="checkmark"
                          />
                          <div className="flex flex-col h-5 md:h-auto items-start justify-start w-36">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-[13px] text-gray-900 w-auto"
                                size="txtNotoSerifRegular13"
                              >
                                Everything in Standard
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-3 h-5 md:h-auto items-start justify-start w-[252px]">
                          <Img
                            className="h-5 w-5"
                            src="images/img_checkmark.svg"
                            alt="checkmark_One"
                          />
                          <div className="flex flex-col h-5 md:h-auto items-start justify-start w-[147px]">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-[13px] text-gray-900 w-auto"
                                size="txtNotoSerifRegular13"
                              >
                                Personal dream journal
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-3 h-5 md:h-auto items-start justify-start w-[252px]">
                          <Img
                            className="h-5 w-5"
                            src="images/img_checkmark.svg"
                            alt="checkmark_Two"
                          />
                          <div className="flex flex-col h-5 md:h-auto items-start justify-start w-[171px]">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-[13px] text-gray-900 w-auto"
                                size="txtNotoSerifRegular13"
                              >
                                Dream interpretation guide
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-3 h-5 md:h-auto items-start justify-start w-[252px]">
                          <Img
                            className="h-5 w-5"
                            src="images/img_checkmark.svg"
                            alt="checkmark_Three"
                          />
                          <div className="flex flex-col h-5 md:h-auto items-start justify-start w-[150px]">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-[13px] text-gray-900 w-auto"
                                size="txtNotoSerifRegular13"
                              >
                                Unlimited user accounts
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;
