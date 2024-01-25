import { useState } from "react";
import "./App.css";
import Container from "./containers/Container";
import SideBar from "./containers/SideBar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div
      className={`${
        darkMode && "bg-black"
      } flex items-start max-w-[100vw]`}
    >
      <SideBar darkMode={darkMode} setDarkMode={toggleDarkMode} />
      <Container darkMode={darkMode}/>
    </div>
  );
}

export default App;
