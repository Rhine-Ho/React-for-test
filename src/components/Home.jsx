import React from "react";
import nickname from "../assets/nickname.ico";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <div className="bg-blue-500 w-1/3 shadow-md rounded-lg p-8">
        <div className="flex flex-col items-center">
          <img
            src={nickname}
            alt="Avatar"
            className="w-16 h-16 rounded-full mb-4 sm:w-32 sm:h-32"
          />
          <h2 className="text-xl font-bold">Hello.👋🏻 I'm Rhine.</h2>
          <p className="text-white font-bold drop-shadow-md">Welcome.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
