import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_VIDEOS_API } from "../utils/constant";

const SearchVideoList = () => {
  const [searchParams] = useSearchParams();
  const [searchVideosList, setSearchVideoList] = useState([]);

  useEffect(() => {
    showVideosOnSearch(searchParams.get("search_query"));
  }, [searchParams]);

  const showVideosOnSearch = async (search) => {
    const searchText = search.split(" ").join("%20");
    const data = await fetch(YOUTUBE_SEARCH_VIDEOS_API + "&q=" + searchText);
    const json = await data.json();
    setSearchVideoList(json["items"]);
  };
  return (
    <div>
      {searchVideosList &&
        searchVideosList.map((videos) => (
          <Link key={videos.id.videoId} to={"/watch?v=" + videos.id.videoId}>
            <div className="flex p-2 m2">
              <img
                className=" m-3 rounded-lg shadow-lg"
                src={videos.snippet.thumbnails.medium.url}
                alt="videoImg"
              />
              <div>
                <div className="text-lg text-neutral-950 pt-3 mx-2">
                  {videos.snippet.title}
                </div>
                <div className="mx-2 text-xs">68K views | 2 years ago</div>
                <div className="flex my-1">
                  <img
                    alt="profileID"
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                    className="w-6 m-2"
                  />
                  <div className="my-3 text-xs align-middle">
                    {videos.snippet.channelTitle}
                  </div>
                </div>
                <div className="p-2 text-sm align-middle">
                  {videos.snippet.description}
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default SearchVideoList;
