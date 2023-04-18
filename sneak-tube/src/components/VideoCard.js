import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg rounded-lg">
      <img className="rounded-lg" alt="thummnail" src={thumbnails.medium.url} />
      <ul>
        <li className=" font-bold p-2">{title}</li>
        <li className="px-2">{channelTitle}</li>
        <li className="px-2">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
