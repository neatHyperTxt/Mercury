import React,{useState,useEffect} from 'react'
import classes from './Banner.module.css';
import axios from '../../axios';
import requests from '../../request';
function Banner() {
    const [movie,setMovie] = useState([]);
    const truncate = (string,n)=>{
        return string?.length>n?string.substr(0,n-1)+'...':string;
    }
    useEffect(()=>{
       const fetchData =  async ()=>{
         const request = await axios.get(requests.fetchTopRated);
         setMovie(
            request.data.results[Math.floor(Math.random()*request.data.results.length-1)]
         );
         return request;
       }
       fetchData();
    },[]);
  return (
    <header className={classes.banner} style={{
        // backgroundImage:`url("https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV0ZmxpeHxlbnwwfHwwfHw%3D&w=1000&q=80")`,
        backgroundSize:"cover",
        height:"100%",
        backgroundPosition:"center center",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.poster_path}")`,
        backgroundRepeat:"no-repeat",
        objectFit:"cover"
    }
    }>
        <div className={classes.bannerContent}>
            <h1 className={classes.title}>{movie?.title || movie?.name || movie?.original}</h1>
            <div className={classes.buttons}>
                <button className={classes.button}>Play</button>
                <button className={classes.button}>My List</button>
            </div>
            <h1 className={classes.description}>{truncate(movie?.overview,100)}</h1>
        </div>
        <div className={classes.fadeBottom}/>
    </header>
  )
}

export default Banner;
