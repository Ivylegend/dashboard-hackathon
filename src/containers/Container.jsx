import React from "react";
import Navbar from "../components/Navbar";
import Sales from "../components/Sales";
import Orders from "../components/Orders";
import TopPlatform from "../components/TopPlatform";
import Boxes from "../components/Boxes";

const Container = ({ darkMode }) => {
  return (
    <div className="w-[100%] ml-20">
      <Navbar darkMode={darkMode}/>
      <div className="p-[20px] flex flex-col gap-[20px]">
        <div className="flex flex-col md:flex-row gap-[20px]">
          <Sales darkMode={darkMode}/>
          <Boxes darkMode={darkMode}/>
        </div>
        <div className="flex flex-col md:flex-row gap-[20px]">
          <Orders darkMode={darkMode}/>
          <TopPlatform darkMode={darkMode}/>
        </div>
      </div>
    </div>
  );
};

export default Container;
