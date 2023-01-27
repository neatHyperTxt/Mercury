import React from 'react'
import classes from './HomeScreen.module.css';
import Nav from './Nav';
import Banner from './Banner';
function HomeScreen() {
  
  return (
    <div className={classes.homeScreen}>
        <Nav/>
        <Banner/>
    </div>
  )
}

export default HomeScreen
