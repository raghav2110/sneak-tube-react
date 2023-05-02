import React from "react";
import { useSelector } from "react-redux";
import home from "../assets/homepage.png";
import subscription from "../assets/subscription.png";
import shorts from "../assets/shorts.png";
import library from "../assets/library.png";
import history from "../assets/history.png";
import videos from "../assets/play.png";
import watch from "../assets/clock.png";
import Like from "../assets/like.png";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="p-2">
      <ul className="border-b-2 pb-2">
        <li>
          <div className="flex pr-[104px] px-3 py-3 hover:bg-gray-100 rounded-lg">
            <img className="w-[22px] h-[22px] mr-5" alt="homeImg" src={home} />
            <div>Home</div>
          </div>
        </li>
        <li>
          <div className="flex pr-[104px] px-3 py-3 hover:bg-gray-100 rounded-lg">
            <img
              className="w-[22px] h-[22px] mr-5"
              alt="homeImg"
              src={shorts}
            />
            <div>Shorts</div>
          </div>
        </li>
        <li>
          <div className="flex pr-[104px] px-3 py-3 hover:bg-gray-100 rounded-lg">
            <img
              className="w-[22px] h-[22px] mr-5"
              alt="homeImg"
              src={subscription}
            />
            <div>Subscription</div>
          </div>
        </li>
      </ul>
      <ul className="border-b-2 pb-2 pt-2">
        <li>
          <div className="flex pr-[104px] px-3 py-3 hover:bg-gray-100 rounded-lg">
            <img
              className="w-[22px] h-[22px] mr-5"
              alt="homeImg"
              src={library}
            />
            <div>Library</div>
          </div>
        </li>
        <li>
          <div className="flex pr-[104px] px-3 py-3 hover:bg-gray-100 rounded-lg">
            <img
              className="w-[22px] h-[22px] mr-5"
              alt="homeImg"
              src={history}
            />
            <div>History</div>
          </div>
        </li>
        <li>
          <div className="flex px-3 py-3 hover:bg-gray-100 rounded-lg">
            <img
              className="w-[22px] h-[22px] mr-5"
              alt="homeImg"
              src={videos}
            />
            <div>Your videos</div>
          </div>
        </li>
        <li>
          <div className="flex px-3 py-3 hover:bg-gray-100 rounded-lg">
            <img className="w-[22px] h-[22px] mr-5" alt="homeImg" src={watch} />
            <div>Watch later</div>
          </div>
        </li>
        <li>
          <div className="flex px-3 py-3 hover:bg-gray-100 rounded-lg">
            <img className="w-[22px] h-[22px] mr-5" alt="homeImg" src={Like} />
            <div>Liked videos</div>
          </div>
        </li>
      </ul>
      <h1 className="pt-2 px-3 font-semibold">Subscription</h1>
      <ul>
        <li>
          <div className="flex px-3 py-2 hover:bg-gray-100 rounded-lg">
            <img
              className="w-[22px] h-[22px] mr-5"
              alt="homeImg"
              src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <div>Rahul Sherekar</div>
          </div>
        </li>
        <li>
          <div className="flex px-3 py-2 hover:bg-gray-100 rounded-lg">
            <img
              className="w-[22px] h-[22px] mr-5"
              alt="homeImg"
              src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <div>Akshay Saini</div>
          </div>
        </li>
        <li>
          <div className="flex px-3 py-2 hover:bg-gray-100 rounded-lg">
            <img
              className="w-[22px] h-[22px] mr-5"
              alt="homeImg"
              src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <div>Coldplay</div>
          </div>
        </li>
        <li>
          <div className="flex px-3 py-2 hover:bg-gray-100 rounded-lg">
            <img
              className="w-[22px] h-[22px] mr-5"
              alt="homeImg"
              src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <div>Akshat Shrivastav</div>
          </div>
        </li>
        <li>
          <div className="flex px-3 py-2 hover:bg-gray-100 rounded-lg">
            <img
              className="w-[22px] h-[22px] mr-5"
              alt="homeImg"
              src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <div>BeerBiceps</div>
          </div>
        </li>
        <li>
          <div className="flex px-3 py-2 hover:bg-gray-100 rounded-lg">
            <img
              className="w-[22px] h-[22px] mr-5"
              alt="homeImg"
              src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <div>Cricbuzz</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
