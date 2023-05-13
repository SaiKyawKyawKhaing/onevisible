/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

const ToggleBtn = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <div className="on-off-toggle">
      {console.log(isChecked)}
      <input
        className="on-off-toggle__input"
        type="checkbox"
        id="bopis"
        checked={isChecked}
        onChange={handleToggle}
      />
      <label htmlFor="bopis" className="on-off-toggle__slider"></label>
      <img
        className="toggle-image"
        src={isChecked ? "./images/Tablet.png" : "./images/vcLogo.png"}
      />
      {isChecked ? <div>Desktop</div> : <div>Mobile</div>}
    </div>
  );
};

export default ToggleBtn;
