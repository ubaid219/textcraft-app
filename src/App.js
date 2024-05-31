import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";

const App = () => {
  const [mode, setMode] = useState("light");
  const [labelText, setlabelText] = useState("Switch Mode");
  const [alert, setAlert] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    setlabelText(mode === "light" ? "Enable Light Mode" : "Enable Dark Mode");
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
    }
  };
  return (
    <div>
      <Navbar toggleMode={toggleMode} mode={mode} labelText={labelText} />
      <div className="fixed">
        <Alert alert={alert} />
      </div>
      <TextArea mode={mode} showAlert={showAlert}/>
    </div>
  );
};

export default App;
