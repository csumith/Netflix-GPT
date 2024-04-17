import React from "react";
import { useSelector } from "react-redux";

import Videotitle from "./Videotitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //Initial it,s null after some time we get a data
  if (!movies) return null;
  const mainMovies = movies[0];
  const { original_title, overview, id } = mainMovies;
  console.log("mainMovies=", mainMovies);

  return (
    <div>
      <Videotitle title={original_title} overview={overview} id={id} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
