import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../slice/appSlice";
import { Link, useSearchParams } from "react-router-dom";
import { VIDEO_STATS_SNIPPET_API, YOUTUBE_VIDEOS_API } from "../utils/constant";
import like_video from "../assets/like_video.png";
import dont_like from "../assets/dont_like.png";
import share from "../assets/share.png";
import download from "../assets/download.png";
import more from "../assets/more.png";
import Button from "./Button";

const WatchPage = () => {
  const buttonList = ["All", "Videos", "Latest", "Trending"];
  const [searchParams] = useSearchParams();
  const [videos, setVideos] = useState();
  const [videoStats, setVideoStats] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    getVideosFromApi();
    getVideoStatsSnippet();
    // eslint-disable-next-line
  }, []);

  const getVideosFromApi = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
    console.log(json.items);
  };

  const getVideoStatsSnippet = async () => {
    const data1 = await fetch(
      VIDEO_STATS_SNIPPET_API + "&&id=" + searchParams.get("v")
    );
    const json1 = await data1.json();
    console.log(json1.items[0].snippet.title, "Stats");
    setVideoStats(json1.items[0]);
    console.log(typeof json1.items[0]);
  };

  return (
    <div className="flex">
      {console.log(videoStats)}
      {videoStats && (
        <div className="px-5">
          <iframe
            width="975"
            height="520"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="pt-4 text-xl font-bold">
            {videoStats.snippet.title}
          </div>
          <div className="flex columns">
            <div className="flex">
              <img
                className="h-12 pt-2"
                alt="user"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
              />
              <div>
                <div className="px-2 pt-2 font-bold">
                  {videoStats.snippet.channelTitle}
                </div>
                <div className="px-2 text-xs">12.5M subscribers</div>
              </div>
            </div>
            <div>
              <button className="mx-10 mt-3 px-3 py-2 rounded-3xl bg-neutral-950 text-white font-bold text-sm">
                Subscribe
              </button>
            </div>
            <div>
              <button className=" ml-36 mt-3 px-3 py-2 rounded-3xl bg-gray-100">
                <div className="flex">
                  <img className="h-6 mx-1" alt="user" src={like_video} />
                  <div className="mx-1 pt-[2px] font-bold text-sm">
                    {videoStats.statistics.likeCount.substring(0, 3)}K
                  </div>
                  <div className=" text-slate-300 mx-2 text-l">|</div>
                  <img className="h-6 mx-[6px]" alt="dislike" src={dont_like} />
                </div>
              </button>
              <button className="ml-2 mt-3 px-3 py-2 rounded-3xl bg-gray-100">
                <div className="flex">
                  <img className="h-6 mx-1" alt="user" src={share} />
                  <div className="mx-1 pt-[2px] font-bold text-sm">Share</div>
                </div>
              </button>
              <button className="ml-2 mt-3 px-3 py-2 rounded-3xl bg-gray-100">
                <div className="flex">
                  <img className="h-6 mx-1" alt="user" src={download} />
                  <div className="mx-1 pt-[2px] font-bold text-sm">
                    Download
                  </div>
                </div>
              </button>
              <button className="ml-2 mt-3 px-2 py-2 rounded-3xl bg-gray-100">
                <div className="flex">
                  <img className="h-6" alt="user" src={more} />
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
      <div>
        <div className="flex">
          {buttonList.map((name) => (
            <Button key={name} name={name} />
          ))}
        </div>
        <div>
          {videos && (
            <div>
              {videos.map((v) => (
                <Link key={v.id} to={"/watch?v=" + v.id}>
                  <div className="flex">
                    <img
                      className="m-2 w-[200px] h-35 rounded-lg"
                      alt="moreVideos"
                      src={v.snippet.thumbnails.medium.url}
                    />
                    <div className="m-1">
                      <div className="mt-3 font-bold text-sm">
                        {v.snippet.title}
                      </div>
                      <div className="mt-1 text-xs">
                        {v.snippet.channelTitle}
                      </div>
                      <div className="flex">
                        <div className="mt-1 mr-1 text-xs">
                          {v.statistics.viewCount}K views{" "}
                        </div>
                        <div className="mt-1 ml-1 text-xs">
                          {v.statistics.likeCount}K likes
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
