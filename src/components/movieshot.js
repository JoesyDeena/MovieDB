import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./movieshot.css";

const API_HOTS = "https://api.themoviedb.org/3/movie/popular?api_key=044151762b335969a559af60b1a977ec";

const API_POSTER_IMG = "https://image.tmdb.org/t/p/w342/";

function MovieHots(){

    const [movies, setMovies] = useState([]);
useEffect(() =>{
      fetch(API_HOTS)
      .then(res =>res.json())
      .then(data =>{
        console.log(data);
        setMovies(data.results);
      });
    }, []); 
    
    return (
          <div>   
          <h1 className="whats-hot-title">What's Hot
          <span role="img" aria-label="Fire Emoji">🔥</span></h1>
            <div className="grid">
              {movies.map((movie) => (
                <div key={movie.id} className="container">
                  
<img className="post-align" src={API_POSTER_IMG + movie.poster_path} alt={movie.title} />
                  <div className="moviedetails">
                    <h6>{movie.vote_average}⭐</h6>
                    <h6>{movie.title}</h6>
                    <hr className="len"></hr>
                  </div>
                  
                </div>
                
              ))}
        
            </div>
          </div>
        );
      } 
      export default MovieHots;