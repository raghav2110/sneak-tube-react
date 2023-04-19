import React from "react";
import hamlogo from "../assets/menu.png";
import youtubeLogo from "../assets/youtube-logo.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../slice/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="flex justify-between p-2 m-1 shadow-sm">
      <div className="flex align-middle">
        <img
          className="h-7 cursor-pointer"
          alt="ham-menu-icon"
          src={hamlogo}
          onClick={() => toggleHandler()}
        />
        <a href="/">
          <img className="h-7 mx-4" alt="youtube-log" src={youtubeLogo} />
        </a>
      </div>
      <div className="px-10">
        <div className="flex">
          <input
            className="border border-gray-400 p-2 rounded-l-full"
            style={{ width: "640px" }}
            type="text"
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
      </div>
      <div className="">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
