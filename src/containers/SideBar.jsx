import React, { useState } from "react";
import {
  Logo,
  Right,
  Box,
  category,
  dark,
  discount,
  info,
  light,
  logout,
  profile,
  settings,
  trend,
} from "../assets";
import { Tooltip } from "react-tooltip";

const images = [
  { name: "category", source: category },
  { name: "trend", source: trend },
  { name: "profile", source: profile },
  { name: "Box", source: Box },
  { name: "discount", source: discount },
  { name: "info", source: info },
];

const SideBar = ({ darkMode, setDarkMode, toggle }) => {
  const [activeId, setActiveId] = useState(false);

  return (
    <div
      className={`${
        darkMode && "bg-neutral-800 border-black"
      } min-h-[100vh] fixed w-20 py-[20px] px-0 ${
        toggle && "hidden slide-in"
      } flex flex-col justify-between items-center bg-[#F7F8FA] border-solid border-[1px] border-[#EBECF2] z-20`}
    >
      <div className="flex gap-[20px] cursor-pointer flex-col items-center w-full">
        <Tooltip
          place="right"
          id="my-tooltip"
          style={{ borderRadius: "10px", fontSize: "12px" }}
        />
        <img
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Logo"
          data-tooltip-place="right"
          src={Logo}
          alt="logo"
        />
        {images.map((image, index) => {
          return (
            <>
              <Tooltip
                place="right"
                id={image}
                style={{ borderRadius: "10px", fontSize: "12px" }}
              />
              <span
                key={index}
                data-tooltip-id={image}
                data-tooltip-content={image.name}
                data-tooltip-place="right"
                className="hover:border-r-4 border-black w-[100%] flex items-center justify-center"
              >
                <img src={image.source} alt={image.name} />
              </span>
            </>
          );
        })}

        <div className="flex gap-[8px] flex-col items-center p-[8px] rounded-[100px] bg-white">
          <img src={light} alt="light-mode" onClick={() => setDarkMode()} />
          <img src={dark} alt="dark-mode" onClick={() => setDarkMode()} />
        </div>
      </div>
      <div className="flex gap-[20px] flex-col items-center cursor-pointer w-full">
        <Tooltip
          place="right"
          id="right"
          style={{ borderRadius: "10px", fontSize: "12px" }}
        />
        <span>
          <img
            src={Right}
            alt="right-arrow"
            data-tooltip-id="right"
            data-tooltip-content="Return"
            data-tooltip-place="right"
            className="hover:border-r-8 border-black"
          />
        </span>
        <Tooltip
          place="right"
          id="settings"
          style={{ borderRadius: "10px", fontSize: "12px" }}
        />
        <span>
          <img
            src={settings}
            alt="settings"
            data-tooltip-id="settings"
            data-tooltip-content="Settings"
            data-tooltip-place="right"
            className="hover:border-r-8 border-black"
          />
        </span>
        <Tooltip
          place="right"
          id="logout"
          style={{ borderRadius: "10px", fontSize: "12px" }}
        />
        <span>
          <img
            src={logout}
            alt="logout-button"
            data-tooltip-id="logout"
            data-tooltip-content="Log Out"
            data-tooltip-place="right"
            className="hover:border-r-8 border-black"
          />
        </span>
      </div>
    </div>
  );
};

export default SideBar;
