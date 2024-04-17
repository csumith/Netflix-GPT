import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideos } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("getMovieVideos", json);
    const filterData = json.results.filter((video) => video.type === "Trailer");
    //if my trailer video is not there so we got 25 video from inside that we have teaser,short clip video from the playing first one json.reusults[1]
    const trailer = filterData.length ? filterData[0] : json.results[1];
    dispatch(addTrailerVideos(trailer));

    console.log("trailer", trailer);
    // settrailerId(trailer.key);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieTrailer;
