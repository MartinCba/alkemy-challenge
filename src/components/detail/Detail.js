import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Detail() {
  let token = sessionStorage.getItem("token");

  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=276ffa053b8b41b0ff0e0966480f677d&language=en-US`;

    axios
      .get(endPoint)
      .then((response) => {
        const movieData = response.data;
        setMovie(movieData);
      })
      .catch((error) => {
        console.log("hubo un error, intenta mas tarde");
      });
  }, [movieID]);

  if (!token) {
    return <Navigate replace to="/" />;
  }
  return (
    <>
      {!movie && <p>Loading...</p>}
      {movie && (
        <>
          <div className="flex p-4">
            <div className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg  object-cover"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
            </div>
            <div className="flex flex-col p-4">
              <h1 className="text-lg mb-4">
                <b>Title: </b> {movie.title}
              </h1>
              <h5 className="mb-4"><b>Release date: </b> {movie.release_date}</h5>
              <h5><b>resume: </b> </h5>
              <p className="mb-4">{movie.overview}</p>
              <h5 className="mb-4"><b>Rating: </b> {movie.vote_average} </h5>
              <h5 className="mb-4"><b>Genders: </b> </h5>
              <ul>
                {movie.genres.map((oneGenre) => (
                  <li className="list-disc ml-5" key={oneGenre.id}>{oneGenre.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Detail;
