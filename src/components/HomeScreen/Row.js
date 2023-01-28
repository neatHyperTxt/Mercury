import React, { useState, useEffect } from 'react'
import classes from './Row.module.css';
import axios from '../../axios';
function Row(props) {
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(props.fetchUrl);
            setMovies(request.data.results);
            return;
        }
        fetchData();
    }, [props.fetchUrl]);
    console.log(movies);
    return (
        <div className={classes.row}>
            <h2>{props.title}</h2>
            <div className={classes.rowPosters}>
                {movies.map(movie => (
                    ((props.isLargeRow && movie.poster_path) || (!props.isLargeRow && movie.backdrop_path)) && (

                        <img
                            key={movie.id}
                            className={`${classes.rowPoster} ${props.isLargeRow && classes.rowPosterLarge}`}
                            src={`${base_url}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name} />

                    )
                )
                )}
            </div>
        </div>
    )
}

export default Row
