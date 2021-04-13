import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import axios from '../config/axios';
import '../styles/row.css';
import movieTrailer from 'movie-trailer';


function Row({ title, fetchURL, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState("");

    const baseURL = 'https://image.tmdb.org/t/p/original/';
    
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL])

    const opts = {
        height: '390',
        width: '95%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    };

    const handleClick=(movie)=>{
        if(trailerURL){
            setTrailerURL("");
        }else{
            movieTrailer(movie?.title || "").then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search); 
                setTrailerURL(urlParams.get("v"));
                console.log(trailerURL);
            }).catch((error)=>{
                alert(error.message);
            });
        }
    }

    return (
        <div className="row" >
            <h2>{title}</h2>
            <div className="row_Posters" >
                {
                    movies.map((movie) => (
                        ((isLargeRow && movie.poster_path) ||
                            (!isLargeRow && movie.backdrop_path)) && (
                            <img
                                onClick={()=>handleClick(movie)}
                                className={`row_Poster ${isLargeRow && "row_PosterLarge"}`}
                                key={movie.id}
                                src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                                alt={movie.title}
                            />
                        )
                    ))
                }
            </div>
            {
                trailerURL && <YouTube videoId={trailerURL} opts={opts} />
            }
        </div>
    )
}

export default Row
