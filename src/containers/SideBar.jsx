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
  const [activeItemId, setActiveItemId] = useState(null);

  const handleItemClick = (itemName) => {
    // Do something with the clicked item, e.g., navigate, show content, etc.
    console.log(`Item clicked:  ${itemName}`);
    setActiveItemId(itemName);
  };

  return (
    <div
      className={`${
        darkMode && "bg-neutral-800 border-black"
      } min-h-[100vh] fixed w-20 py-[20px] px-0 ${
        toggle && "hidden"
      } slide-in flex lg:flex flex-col justify-between items-center bg-[#F7F8FA] border-solid border-[1px] border-[#EBECF2] z-20 top-0 left-0`}
    >
      <div className="flex gap-[20px] cursor-pointer flex-col items-center w-full">

        {/* SIDEBAR LOGO */}
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

        {/* SIDEBAR ICONS */}
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
                className={`hover:border-r-4 ${
                  activeItemId === image.name ? "border-r-4 border-black" : ""
                } border-black w-[100%] flex items-center justify-center`}
                onClick={() => handleItemClick(image.name)}
              >
                <img src={image.source} alt={image.name} />
              </span>
            </>
          );
        })}

        {/* LIGHT - DARK MODE */}
        <div className="flex gap-[8px] flex-col items-center p-[8px] rounded-[100px] bg-white">
          <img src={light} alt="light-mode" onClick={() => setDarkMode()} />
          <img src={dark} alt="dark-mode" onClick={() => setDarkMode()} />
        </div>
      </div>

      <div className="flex gap-[20px] flex-col items-center cursor-pointer w-full">

        {/* RETURN BUTTON */}
        <Tooltip
          place="right"
          id="right"
          style={{ borderRadius: "10px", fontSize: "12px" }}
        />
        <span
          className={`hover:border-r-4 flex items-center w-full justify-center ${
            activeItemId === "right" ? "border-r-4 border-black" : ""
          } border-black`}
          onClick={() => handleItemClick("right")}
        >
          <img
            src={Right}
            alt="right-arrow"
            data-tooltip-id="right"
            data-tooltip-content="Return"
            data-tooltip-place="right"
          />
        </span>

        {/* SETTINGS BUTTON */}
        <Tooltip
          place="right"
          id="settings"
          style={{ borderRadius: "10px", fontSize: "12px" }}
        />
        <span
          className={`hover:border-r-4 flex items-center w-full justify-center ${
            activeItemId === "settings" ? "border-r-4 border-black" : ""
          } border-black`}
          onClick={() => handleItemClick("settings")}
        >
          <img
            src={settings}
            alt="settings"
            data-tooltip-id="settings"
            data-tooltip-content="Settings"
            data-tooltip-place="right"
          />
        </span>

        {/* LOGOUT BUTTON */}
        <Tooltip
          place="right"
          id="logout"
          style={{ borderRadius: "10px", fontSize: "12px" }}
        />
        <span
          className={`hover:border-r-4 flex items-center w-full justify-center ${
            activeItemId === "logout" ? "border-r-4 border-black" : ""
          } border-black`}
          onClick={() => handleItemClick("logout")}
        >
          <img
            src={logout}
            alt="logout-button"
            data-tooltip-id="logout"
            data-tooltip-content="Log Out"
            data-tooltip-place="right"
          />
        </span>
      </div>
    </div>
  );
};

export default SideBar;
