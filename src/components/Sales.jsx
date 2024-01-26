import React from "react";
import { sales } from "../assets";
import Charts from "./Charts";

const Sales = ({ darkMode }) => {
  return (
    <div
      className={`${
        darkMode && "dark-bg"
      } p-[20px] bg-white border-solid rounded-xl border-[1px] flex flex-col gap-[20px]`}
    >
      {/* SALES */}

      <div className="flex justify-between items-center">
        <p className={`${darkMode && "text-white"} text-[18px] font-semibold`}>
          Sales Trends
        </p>
        <div className="text-[18px] flex items-center gap-4">
          <p
            className={`${
              darkMode && "text-white"
            } text-[#3A3F51] font-medium text-[14px]`}
          >
            Short by :
          </p>
          <span className="border-solid border rounded-[20px] py-[6px] px-[12px] border-[#E1DFDF]">
            <select
              name=""
              id=""
              className="outline-none text-[12px] flex items-center justify-center gap-2 bg-transparent"
            >
              <option value="weekly" className="text-[12px] font-light">
                Weekly
              </option>
              <option value="weekly" className="text-[12px] font-light">
                Monthly
              </option>
              <option value="weekly" className="text-[12px] font-light">
                Yearly
              </option>
            </select>
          </span>
        </div>
      </div>

      {/* SALES CHARTS */}
      <div className="overflow-x-scroll lg:overflow-hidden">
        <Charts />
      </div>
    </div>
  );
};

export default Sales;
