import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  console.log(info);

  return (
    <div className="p-2 m-3 w-[370px] h-96 rounded-lg">
      <img
        className="rounded-lg"
        alt="thummnail"
        src={thumbnails.standard?.url}
      />
      <ul>
        <li className=" font-bold p-2">{title}</li>
        <li className="px-2">{channelTitle}</li>
        <li className="px-2">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
