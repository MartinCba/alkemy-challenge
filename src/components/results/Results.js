import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import swAlert from "@sweetalert/with-react";

function Results() {
  const addOrRemoveFromFavs = (e) => {
    const favMovies = localStorage.getItem("favs");
    let tempMoviesInFavs;

    if (favMovies === null) {
      tempMoviesInFavs = [];
    } else {
      tempMoviesInFavs = JSON.parse(favMovies);
    }
    console.log(tempMoviesInFavs);
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const parent2 = parent.parentElement;
    const parent3 = parent2.parentElement;
    const imgURL = parent3.querySelector("img").getAttribute("src");
    const title = parent3.querySelector("h5").innerText;
    const movieDetail = parent3.querySelector("p").innerText;
    const movieData = {
      imgURL,
      title,
      movieDetail,
      id: btn.dataset.movieId,
    };
    let movieIsInArray = tempMoviesInFavs.find((oneMovie) => {
      return oneMovie.id === movieData.id;
    });

    if (!movieIsInArray) {
      tempMoviesInFavs.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempMoviesInFavs));
      console.log("Se agregó la película");
    } else {
      let moviesLeft = tempMoviesInFavs.filter((oneMovie) => {
        return oneMovie.id !== movieData.id;
      });
      localStorage.setItem("favs", JSON.stringify(moviesLeft));
      console.log("Se eliminó la película");
    }
  };
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");
  const navigate = useNavigate();
  const [moviesResults, setMoviesResults] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=276ffa053b8b41b0ff0e0966480f677d&language=en-US&query=${keyword}`;
    axios
      .get(endPoint)
      .then((response) => {
        const moviesArray = response.data.results;

        if (moviesArray.length === 0) {
          swAlert(<h4>Tu búsqueda no arrojó resultados...</h4>);
          navigate(-1);
        }

        setMoviesResults(moviesArray);
      })
      .catch((error) => console.log);
  });

  const token = sessionStorage.getItem("token");
  if (!token) {
    return <Navigate replace to="/" />;
  }

  return (
    <>
      <h2 className="text-xl font-bold ml-8 mt-4">
        Searched word: <em>{keyword}</em>
      </h2>
      <div className="flex flex-row flex-wrap ">
        {moviesResults.map((oneMovie, index) => {
          return (
            <div className="basis-1/5 mx-8 my-4 truncate " key={index}>
              <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img
                  className="rounded-t-lg object-contain w-65 h-82"
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  alt=""
                />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                    {oneMovie.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">
                    {oneMovie.overview} ...
                  </p>
                  <div className="flex flex-row justify-between">
                    <Link
                      to={`/detail?movieID=${oneMovie.id}`}
                      className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-300 rounded-lg hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-500 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                    >
                      View detail
                    </Link>
                    <button
                      onClick={addOrRemoveFromFavs}
                      data-movie-id={oneMovie.id}
                      className="favourite-btn flex justify-center items-center hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-500 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                    >
                      🤍
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Results;
