import swAlert from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";
function Search() {
  const navigate = useNavigate();

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

  const submitHandle = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();
    if (keyword.length === 0) {
      swAlert(<h2>Tienes que escribir una palabra clave</h2>);
    } else if (keyword.length < 4) {
      swAlert(<h2>Escribe por lo menos 4 caracteres</h2>);
    } else {
      e.currentTarget.keyword.value = "";
      navigate(`/results?keyword=${keyword}`);
    }
  };
  return (
    <form className="" onSubmit={submitHandle}>
      <input
        type="text"
        name="keyword"
        className="pl-3 border rounded-md  focus:outline-none focus:ring-1 focus:ring-sky-500"
        placeholder="Search..."
      />
      <button className="">
        <div className="flex justify-center items-center ml-3">
          <svg
            className="h-4 w-4  text-sky-500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
        </div>
      </button>
    </form>
  );
}

export default Search;
