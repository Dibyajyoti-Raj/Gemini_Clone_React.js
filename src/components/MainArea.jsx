import React, { useContext } from "react";
import { Context } from "../context/ContextProvider";

const MainArea = () => {
  const {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showRes,
    loading,
    resData,
    input,
    setInput,
  } = useContext(Context);

  // console.log(object)

  return (
    <div className="px-3 py-4 flex flex-col justify-between">
      <div>
        {/* Navbar */}
        <div className="flex justify-between items-center">
          <p className="text-lg md:text-xl font-semibold">Gemini</p>
          <img
            src="src/assets/user.png"
            alt=""
            className="size-12 md:size-14 rounded-full"
          />
        </div>

        {/* Main Container */}
        {!showRes ? (
          <div>
            <div>
              <p className="text-5xl md:text-7xl font-semibold my-3">
                <span className="text-blue-300">Hello,</span>{" "}
                <span className="text-pink-300">Dev.</span>
              </p>
              <p className="text-5xl md:text-7xl text-gray-400 font-semibold my-2">
                How can I help you today?
              </p>
            </div>
            {/* Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5 md:mt-8">
              <div className="bg-slate-100 p-3 md:p-8 rounded-lg items-center flex">
                <p className="md:text-lg">
                  Suggest beautiful places to see on an upcoming road trip.
                </p>
                <img src="src/assets/compass.png" alt="" className="size-10" />
              </div>
              <div className="bg-slate-100 p-3 md:p-8 rounded-lg items-center flex">
                <p className="md:text-lg">
                  Briefly summarize this concept: urban planning
                </p>
                <img src="src/assets/idea.png" alt="" className="size-10" />
              </div>
              <div className="bg-slate-100 p-3 md:p-8 rounded-lg items-center flex">
                <p className="md:text-lg">
                  Brainstorm team bonding activities for our work retreat
                </p>
                <img src="src/assets/message.png" alt="" className="size-10" />
              </div>
              <div className="bg-slate-100 p-3 md:p-8 rounded-lg items-center flex">
                <p className="md:text-lg">
                  Tell me about React js and React native.
                </p>
                <img src="src/assets/tag.png" alt="" className="size-10" />
              </div>
            </div>
          </div>
        ) : (
          // Result
          <div className="flex flex-col space-y-2">
            <div className="flex flex-row justify-start gap-2 items-center">
              <img src="src/assets/user.png" alt="" className="size-8 md:size-9 rounded-full"/>
              <p>{recentPrompt}</p>
            </div>
            <div>
              <img src="src/assets/gemini.png" alt="" className="size-10"/>
              {loading ? (
                <div className="loader w-full flex flex-col gap-1">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : ( <p dangerouslySetInnerHTML={{__html:resData}}/>) }
            </div>
          </div>
        )}
      </div>

      <div>
        {/* Main Bottom */}
        <div className="flex flex-row justify-between bg-slate-100 items-center px-4 py-2 rounded-3xl">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="Enter a prompt here"
            className="w-[80%] px-3 py-1 border-none me-2 rounded-2xl"
          />
          <div className="flex flex-row space-x-2">
            <img
              src="src/assets/addImage.png"
              alt=""
              className="size-6 cursor-pointer"
            />
            <img
              src="src/assets/mic.png"
              alt=""
              className="size-6 cursor-pointer"
            />
            <img
              onClick={() => {
                onSent();
              }}
              src="src/assets/send.png"
              alt=""
              className="size-6 cursor-pointer"
            />
          </div>
        </div>

        <p className="pt-3">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </p>
      </div>
    </div>
  );
};

export default MainArea;
