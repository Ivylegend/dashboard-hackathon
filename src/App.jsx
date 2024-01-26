import { useState } from "react";
import "./App.css";
import Container from "./containers/Container";
import SideBar from "./containers/SideBar";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [toggle, setToggle] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const toggleNavbar = () => {
    setToggle((prevToggle) => !prevToggle);
  }

  return (
    <div
      className={`${
        darkMode && "bg-black"
      } flex items-start max-w-[100vw]`}
    >
      <SideBar toggle={toggle} darkMode={darkMode} setDarkMode={toggleDarkMode} />
      <Container toggle={toggle} setToggle={toggleNavbar} darkMode={darkMode}/>
    </div>
  );
}

export default App;
