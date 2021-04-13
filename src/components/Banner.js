import React, { useEffect, useState } from 'react'
import '../styles/banner.css';
import axios from '../config/axios';
import requests from '../config/requests';

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        const fetchData = async()=>{
            const request = await axios.get(
                requests.fetchNetFlixOriginals
            );
            setMovie(request.data.results[
                Math.floor(Math.random()* request.data.results.length -1)
            ])
            return request;
        }

        fetchData();
    }, [])

    const truncate = (string, n )=>{
        return string?.length>n ? string.substr(0,n-1) + '...' : string ;
    }

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition:"center center"
        }} >
            <div className="banner_Contents">
                <h1 className="banner_Title" >
                    {movie?.title || movie?.name || movie?.original_name }
                </h1>
                <div className="banner_Buttons" >
                    <button className="banner_Button">Play</button>
                    <button className="banner_Button">My List</button>
                </div>
                <h1 className="banner_Description" > { truncate(movie?.overview,150) } </h1>
            </div>
            <div className="banner-FadeBottom" />
        </header>
    )
}

export default Banner
