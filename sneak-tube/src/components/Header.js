import React, { useEffect, useState } from "react";
import hamlogo from "../assets/menu.png";
import youtubeLogo from "../assets/youtube-logo.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../slice/appSlice";
import { YOUTUBE_SEARCH_SUGGESTION_API } from "../utils/constant";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchResult(), 200);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [searchQuery]);

  const getSearchResult = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };
  return (
    <div className="flex justify-between p-2 m-1 shadow-sm">
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
          <div>
            <input
              className="px-5 border border-gray-400 p-2 rounded-l-full"
              style={{ width: "640px" }}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
              🔍
            </button>
          </div>
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute bg-white py-2 px-2 my-11 w-[640px] shadow-lg rounded-lg border border-gray-100">
              <ul>
                {suggestions.map((s) => (
                  <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
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
