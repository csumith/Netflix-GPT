import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addplayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  //fetch the api from tdm and set the api data in store
  const data = useSelector((store) => store.movies.nowPlayingMovies);
  console.log("browsernowPlayingMoviesData=", data);
  const dispatch = useDispatch();

  const getNowPlaying = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    let json = await data.json();
    console.log("json.result=", json.results);
    dispatch(addplayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlaying();
  },[]);
};

export default useNowPlayingMovies;
