import React from "react";
import {
  trendDown,
  trendUp,
  rotate,
  shoppingCart,
  boxTick,
  Green,
  Red,
  coin,
} from "../assets";


const trendBoxes = [
  {
    image: boxTick,
    text: "Total Order",
    number: 350,
    trend: Green,
    arrow: trendUp,
    bg: "green-50",
    color: "[#34CAA5]",
  },
  {
    image: rotate,
    text: "Total Refund",
    number: 270,
    trend: Red,
    arrow: trendDown,
    bg: "red-100",
    color: "[#ED544E]",
  },
  {
    image: shoppingCart,
    text: "Average Sales",
    number: 1567,
    trend: Red,
    arrow: trendDown,
    bg: "red-100",
    color: "[#ED544E]",
  },
  {
    image: coin,
    text: "Total Income",
    number: "$350,000",
    trend: Green,
    arrow: trendUp,
    bg: "green-50",
    color: "[#34CAA5]",
  },
];

const Boxes = ({ darkMode }) => {
  return (
    <div className="flex w-[100%] overflow-x-scroll lg:overflow-x-hidden lg:grid lg:grid-cols-2 gap-4">

      {/* BOXES */}
      {trendBoxes.map((box, index) => {
        return (
          <div
            key={index}
            className={`${
              darkMode && "dark-bg"
            } border-solid border p-4 border-[#EDF2F7] bg-white rounded-xl flex flex-col gap-4 min-w-[250px] sm:min-w-[222px]`}
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full w-[40px] h-[40px] flex items-center justify-center border-solid border-[#E6E6E6] border">
                <img src={box.image} alt="" />
              </span>
              <img src={box.trend} alt="" />
            </div>
            <div>
              <p className="text-[18px] font-medium text-[#898989]">
                {box.text}
              </p>
              <p className="text-[#3A3F51] font-semibold text-[24px]">
                {box.number}
              </p>
            </div>
            <div className="flex justify-between items-center gap">
              <span
                className={`flex items-center gap-1 bg-${box.bg} rounded-2xl p-1`}
              >
                <img src={box.arrow} alt="" />
                <p className={`text-${box.color} text-[12px]`}>23.5%</p>
              </span>
              <p className="text-[#606060] text-[12px] font-normal">
                vs. previous month
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Boxes;
