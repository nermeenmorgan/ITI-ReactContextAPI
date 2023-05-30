import React, { useContext, useEffect, useState } from "react";
// import { Table } from "reactstrap";
import { useParams } from "react-router-dom";
import { MoviesContext } from "../Modules/UsersModule";
// import BasicRating from "./Rating";

const DetailsPage = () => {
  const { movies } = useContext(MoviesContext);
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  // const imgPath = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    const currentMovie = movies.find((movie) => {
      return +movie.id === +id;
    });
    setMovieDetails(currentMovie);
  }, [id, movies]);

  if (!movieDetails) return <div>Loading</div>;
  return (
    <div style={{ width: "60%", margin: "40px auto", textAlign: "center" , backgroundColor:"lightgrey", padding:50, borderRadius:50}}>
      <img
        src={
            movieDetails.poster_path
        }
        alt=""
        style={{ borderRadius: "10px" }}
      />
        
        <img style={{height: 150}} src={'https://image.tmdb.org/t/p/w500'+ movieDetails.poster_path }></img>
            <h1>{movieDetails.original_title}</h1>
            <h4><b>overview:</b> {movieDetails.overview}</h4>

    </div>
  );
};

export default DetailsPage;
