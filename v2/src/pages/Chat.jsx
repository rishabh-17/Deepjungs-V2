import React, { useState, useEffect } from "react";
import { Img, Input, List, Text } from "components";
import { Header } from "components";
import axios from "axios";
import { LoopingRhombusesSpinner } from "react-epic-spinners";
import { useNavigate } from "react-router-dom";
const Chat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I am Morpheus, the Lord of Dreams, what do you seek Mortal?",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [resLoading, setresLoading] = useState(false);

  const handleSendMessage = async () => {
    if (newMessage.trim() === "") return;
    setresLoading(true);
    const message = {
      role: "user",
      content: newMessage,
    };
    setMessages([...messages, message]);
    setNewMessage("");
    const result = await axios.post("/api/v1/dalle/chat", {
      messages: [...messages, message],
    });
    setresLoading(false);

    console.log(result.data.choices[0].message);
    setMessages([...messages, message, result.data.choices[0].message]);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
    axios
      .post("/api/v1/dalle/chat", {
        messages: [],
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bg-gray-100_01 flex flex-col font-notoserif items-center justify-center h-screen">
      <Header />
      <div className="flex flex-col items-center justify-start w-full max-w-[960px] flex-1 overflow-y-auto">
        <div className="flex flex-col items-start justify-start p-4 w-full font-bold text-xl">
          Chat with Morpheus
        </div>
        <List
          className="flex flex-col gap-1 w-full overflow-auto"
          orientation="vertical"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "assistant" ? "justify-start" : "justify-end"
              } gap-3 items-end p-4 w-full`}
            >
              {message.role === "assistant" && (
                <Img
                  className="h-10 md:h-auto rounded-[50%] w-10"
                  src={
                    "https://img.freepik.com/free-vector/cute-robot-wearing-hat-flying-cartoon-vector-icon-illustration-science-technology-icon-isolated_138676-5186.jpg?w=740&t=st=1709573192~exp=1709573792~hmac=24d011e6a23c40fb29f15c133811dab25088ec0c585602a15d8801d83e8d1f81"
                  }
                  alt={message.role}
                />
              )}
              <div
                className={`flex flex-1 flex-col gap-1 items-${
                  message.role === "assistant" ? "start" : "end"
                } max-w-[876px] w-full`}
              >
                <Text className="text-[13px] text-purple-500_03 w-auto">
                  {message.role}
                </Text>
                <div
                  className={`${
                    message.role === "assistant"
                      ? "bg-white-100 text-gray-900"
                      : "bg-purple-500_04 text-gray-100"
                  } flex flex-col px-4 py-3 rounded-[12px]`}
                >
                  <Text className="text-base w-auto">{message.content}</Text>
                </div>
              </div>
            </div>
          ))}
          {resLoading && (
            <div
              className={`flex ${"justify-start"} gap-3 items-end p-4 w-full`}
            >
              <Img
                className="h-10 md:h-auto rounded-[50%] w-10"
                src={
                  "https://img.freepik.com/free-vector/cute-robot-wearing-hat-flying-cartoon-vector-icon-illustration-science-technology-icon-isolated_138676-5186.jpg?w=740&t=st=1709573192~exp=1709573792~hmac=24d011e6a23c40fb29f15c133811dab25088ec0c585602a15d8801d83e8d1f81"
                }
                alt={"assistant"}
              />
              <div
                className={`flex flex-1 flex-col gap-1 items-${"start"} max-w-[876px] w-full`}
              >
                <Text className="text-[13px] text-purple-500_03 w-auto">
                  assistant
                </Text>
                <div className="bg-white-100 text-gray-900 flex flex-col px-4 py-3 rounded-[12px]">
                  <Text className="text-base w-auto">
                    <LoopingRhombusesSpinner color="red" />
                  </Text>
                </div>
              </div>
            </div>
          )}
        </List>
      </div>
      <div className="flex gap-3 items-center justify-start w-full px-4 py-3  max-w-[960px] mx-auto">
        <Img
          className="h-10 md:h-auto rounded-[50%] w-10"
          src="images/img_depth5frame0.png"
          alt="User"
        />
        <textarea
          className={`bg-gray-200 text-gray-800 flex-1 ${
            (newMessage?.match(/\n/g)?.length || 0) < 3
              ? "h-" + 12 * (newMessage?.match(/\n/g)?.length || 0 + 1)
              : "h-48"
          } pl-4 rounded-[24px] focus:outline-none `}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          className="bg-purple-500_04 text-gray-100 px-4 py-2 rounded-[16px] hover:bg-purple-600"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
