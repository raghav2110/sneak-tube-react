import React, { useEffect, useState } from "react";
import hamlogo from "../assets/menu.png";
import youtubeLogo from "../assets/youtube-logo.png";
import notificationIcon from "../assets/notification-icon.png";
import createIcon from "../assets/create.png";
import microphone from "../assets/microphone.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../slice/appSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constant";
import { cacheResults } from "../slice/searchSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchResult();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [searchQuery]);

  const getSearchResult = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="flex justify-between p-2 m-1">
      <div className="flex align-middle">
        <img
          className="h-7 cursor-pointer my-1"
          alt="ham-menu-icon"
          src={hamlogo}
          onClick={() => toggleHandler()}
        />
        <a href="/">
          <img
            className="h-7 mx-4 p-1 my-1"
            alt="youtube-log"
            src={youtubeLogo}
          />
        </a>
      </div>
      <div>
        <div className="flex">
          <div className="flex">
            <input
              className="px-5 border border-gray-400 p-2 rounded-l-full h-10"
              style={{ width: "600px" }}
              type="text"
              value={searchQuery}
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() =>
                setTimeout(() => {
                  setShowSuggestions(false);
                }, "100")
              }
            />
            <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100 h-10">
              🔍
            </button>
            <img
              className="w-[18px] h-[18px] my-3 mx-4"
              alt="microphoneIcon"
              src={microphone}
            />
          </div>
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute bg-white py-2 px-2 my-11 w-[640px] shadow-lg rounded-lg border border-gray-100">
              <ul>
                {suggestions.map((s) => (
                  <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                    <Link key={s} to={"/results?search_query=" + s}>
                      🔍 {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="flex align-middle">
        <img className="h-[24px] my-2 mx-4" alt="bell-icon" src={createIcon} />
        <div className=" relative">
          <img
            className="h-6 my-2 mx-4"
            alt="bell-icon"
            src={notificationIcon}
          />
          <div className="bg-red-600 absolute font-bold text-[10px] text-white px-1 right-[6px] top-[4px] rounded-lg">
            9+
          </div>
        </div>
        <img
          className="h-8 my-1 mx-4"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
