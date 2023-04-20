import React, { useEffect, useState } from "react";
import hamlogo from "../assets/menu.png";
import youtubeLogo from "../assets/youtube-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../slice/appSlice";
import {
  YOUTUBE_SEARCH_SUGGESTION_API,
  YOUTUBE_SEARCH_VIDEOS_API,
} from "../utils/constant";
import { cacheResults } from "../slice/searchSlice";

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
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const showVideosOnSearch = async (s) => {
    console.log(s, "******&&&&******");
    const searchText = s.split(" ").join("%20");
    const data = await fetch(YOUTUBE_SEARCH_VIDEOS_API + "&q=" + searchText);
    const json = await data.json();
    console.log(json);
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
                  <li
                    key={s}
                    className="py-2 px-3 shadow-sm hover:bg-gray-100"
                    onMouseDown={() => showVideosOnSearch(s)}
                  >
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
