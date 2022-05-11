/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import swAlert from "@sweetalert/with-react";

function List() {
  const token = localStorage.getItem("token");

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=276ffa053b8b41b0ff0e0966480f677d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
    axios
      .get(endPoint)
      .then((response) => {
        const apiData = response.data;
        setMoviesList(apiData.results);
      })
      .catch((error) => {
        swAlert(<h2>Hubo errores, intenta mas tarde</h2>);
      });
  }, [setMoviesList]);

  return (
    <>
      {!token && <Navigate replace to="/" />}

      <div className="flex flex-row flex-wrap ">
        {moviesList.map((oneMovie, index) => {
          return (
            <div className="basis-1/5 mx-8 my-4" key={index}>
              <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="rounded-t-lg"
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  alt=""
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {oneMovie.title.substring(0, 18)}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {oneMovie.overview.substring(0, 80)} ...
                  </p>
                  <Link
                    to="/"
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-300 rounded-lg hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default List;
