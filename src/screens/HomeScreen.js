import React from 'react'
import classes from './HomeScreen.module.css';
import Nav from '../components/HomeScreen/Nav';
import Banner from '../components/HomeScreen/Banner';
import Row from '../components/HomeScreen/Row';
import requests from '../request';
function HomeScreen() {
  
  return (
    <div className={classes.homeScreen}>
        <Nav/>
        <Banner/>
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow
        />
        <Row  title="Trending Now" fetchUrl={requests.fetchNetflixOriginals}/>
        <Row  title="Top rated" fetchUrl={requests.fetchTopRated}/>
        <Row  title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row  title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row  title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row  title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row  title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen
