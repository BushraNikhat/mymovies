import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Name from "./Name";

const List = () => {
  const [movieData, setMovieData] = useState([]);
  const [latestMovie, setLatestMovie] = useState({});

  const { movieList } = useSelector((state) => state.movieReducer); // array of url of films

  useEffect(() => {
    const charMovies = () => {
      try {
        axios
          .all(movieList.map((endpoint) => axios.get(endpoint)))
          .then((data) => {
            setMovieData([...data]);
            setLatestMovie(data.pop());
          });
      } catch (error) {
        console.log(error);
      }
    };
    charMovies();
  }, [movieList]);

  return (
    <>
      <div className="List  mx-auto mt-5">
        {/* display movie name */}
        {movieData.length !== 0 && <Name movieData={movieData} />}

        {/* display the name and release date of latest movie */}
        {latestMovie && (
          <div className="text-light mt-5 text-center  mx-auto">
            <p className="m-0">Latest Movie and Release Date</p>
            {latestMovie.data && (
              <div className="border-bottom text-light">
                <span>{latestMovie.data.title} </span>
                <span> - </span>
                <span> {latestMovie.data.release_date}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default List;
