import React from "react";
import { orders } from "../assets";
import AreaTable from "./AreaTable";

const titles = ["Name", "Date", "Amount", "Status", "Invoice"];

const Orders = ({darkMode}) => {
  return (
    <div className={`${darkMode && "dark-bg"} p-[20px] overflow-x-scroll md:overflow-hidden min-h-[350px] bg-white md:min-w-[736px] border-solid rounded-xl border-[1px] flex flex-col gap-[20px]`}>
      <div className="flex justify-between items-center">
        <p className={`${darkMode && "text-white"} text-[18px] font-semibold`}>Last Orders</p>
        <p className="text-[#34CAA5] text-[18px] cursor-pointer">See All</p>
      </div>
      <AreaTable darkMode={darkMode}/>
    </div>
  );
};

export default Orders;