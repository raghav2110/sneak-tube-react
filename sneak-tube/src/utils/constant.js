const GOOGLE_API_KEY = "AIzaSyDnC58ygU4jRu8pH6eA_34jTI-ONdlQhbc";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&key=" +
  GOOGLE_API_KEY;

export const VIDEO_STATS_SNIPPET_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=statistics%2Csnippet&key=" +
  GOOGLE_API_KEY;
