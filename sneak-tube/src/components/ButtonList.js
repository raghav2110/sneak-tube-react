import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Gaming",
    "Songs",
    "Cricket",
    "Space",
    "Tennis",
    "Football",
    "IPL",
    "History",
    "Movies",
    "Shorts",
    "Epics",
  ];
  return (
    <div className="flex">
      {buttonList.map((element, id) => (
        <Button name={element} key={id} />
      ))}
    </div>
  );
};

export default ButtonList;
