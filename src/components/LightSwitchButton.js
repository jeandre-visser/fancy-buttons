import { useState } from "react";

function LightSwitchButton(props) {

const {light, setLight} = props;

  const handleClick = () => {
    setLight(light === "on" ? "off" : "on");
  }

  return (
    <button className="LightSwitchButton" onClick={handleClick}>
    {/* When the state is on */}
    {light === "on" && <span><i>💡</i> I'm on!</span>}
    {/* When the state is off */}
    {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;