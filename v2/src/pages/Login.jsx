import React, { useState } from "react";

import { Img, Input, Text } from "components";
import { Header } from "components";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState({
    emailEmpty: false,
    passwordEmpty: false,
  });

  // if (localStorage.getItem('token')){
  //           navigate("/");
  // }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email) {
      seterror({ ...error, emailEmpty: true });
      return;
    }
    if (!password) {
      seterror({ ...error, passwordEmpty: true });
      return;
    }
    try {
      await axios
        .post("/api/v1/auth/login", {
          email,
          password,
        })
        .then((res) => {
          if (res.data?.login) {
            localStorage.setItem("token", res.data?.token);
            navigate("/");
            // window.location.reload();
          } else if (!res.data?.login) {
            alert("User does not exist, Please Sign Up");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-notoserif items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-gray-100_01 flex flex-col h-[800px] md:h-auto items-start justify-start  w-full">
          <div className="flex flex-col h-[800px] md:h-auto items-start justify-start  w-full">
            <div className="flex flex-col h-[735px] md:h-auto items-start justify-center  md:px-10 px-40 sm:px-5 py-5 w-full">
              <div className="flex flex-col h-[695px] md:h-auto items-start justify-start py-5 m-auto w-[512px] sm:w-full">
                <div className="flex flex-col items-start justify-start p-4 w-full">
                  <div className="flex flex-col h-[45px] md:h-auto items-start justify-start w-72">
                    <div className="flex flex-col h-[45px] md:h-auto items-start justify-start w-72">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-1.19px] w-auto"
                          size="txtNotoSerifBlack36"
                        >
                          Log in
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-28 md:h-auto items-center justify-start px-4 py-3 w-[512px] sm:w-full">
                  <div className="flex flex-col h-[88px] md:h-auto items-end justify-start w-[480px] sm:w-full">
                    <div className="flex flex-col h-[88px] md:h-auto items-start justify-start w-[480px] sm:w-full">
                      <div className="flex flex-col h-8 md:h-auto items-start justify-start pb-2 w-[480px] sm:w-full">
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtNotoSerifMedium16"
                        >
                          Email
                        </Text>
                      </div>
                      <div className="flex flex-col h-14 md:h-auto items-center justify-start w-[480px] sm:w-full">
                        <Input
                          name="depth8frameZero"
                          placeholder="Your email"
                          className="md:h-auto p-0 placeholder:text-purple-500_03 sm:h-auto text-base text-left w-full"
                          wrapClassName="rounded-[12px] w-full"
                          type="email"
                          size="sm"
                          onChange={(e) => setEmail(e)}
                        ></Input>
                      </div>
                      {error.emailEmpty && (
                        <span className="text-red-500">! Enter a Email</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-28 md:h-auto items-center justify-start px-4 py-3 w-[512px] sm:w-full">
                  <div className="flex flex-col h-[88px] md:h-auto items-end justify-start w-[480px] sm:w-full">
                    <div className="flex flex-col h-[88px] md:h-auto items-start justify-start w-[480px] sm:w-full">
                      <div className="flex flex-col h-8 md:h-auto items-start justify-start pb-2 w-[480px] sm:w-full">
                        <Text
                          className="text-base text-gray-900 w-full"
                          size="txtNotoSerifMedium16"
                        >
                          Password
                        </Text>
                      </div>
                      <div className="flex flex-col h-14 md:h-auto items-center justify-start w-[480px] sm:w-full">
                        <Input
                          name="depth8frameZero_One"
                          placeholder="Your password"
                          className="md:h-auto p-0 placeholder:text-purple-500_03 sm:h-auto text-base text-left w-full"
                          wrapClassName="rounded-[12px] w-full"
                          type="password"
                          size="sm"
                          onChange={(e) => setPassword(e)}
                        ></Input>
                      </div>
                      {error.emailEmpty && (
                        <span className="text-red-500">! Enter a Email</span>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className="flex flex-col h-[72px] md:h-auto items-start justify-start px-4 py-3 w-[512px] sm:w-full"
                  onClick={handleSubmit}
                >
                  <div className="bg-purple-500_04 flex flex-col h-12 md:h-auto items-center justify-center px-5 rounded-[24px] w-[480px] sm:w-full">
                    <div className="bg-purple-500_04 flex flex-col h-6 md:h-auto items-start justify-start w-auto  min-h-[40px] justify-center">
                      <div className="flex flex-col items-start justify-start">
                        <div
                          href="javascript:"
                          className="text-base text-gray-100 tracking-[0.24px] w-full"
                        >
                          <Text size="txtNotoSerifBold16" className="w-full">
                            Log in
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-[37px] md:h-auto items-center justify-start pb-3 pt-1 px-4 w-[512px] sm:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-center text-purple-500_03 text-sm w-auto"
                      size="txtNotoSerifRegular14Purple50003"
                    >
                      <Link to="/signup">
                        Don&#39;t have an account? Sign up now
                      </Link>
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

export default Login;
