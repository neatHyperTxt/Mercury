import React from 'react'
import classes from './Banner.module.css';
function Banner() {
    const truncate = (string,n)=>{
        return string?.length>n?string.substr(0,n-1)+'...':string;
    }
  return (
    <header className={classes.banner} style={{
        backgroundImage:`url("https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV0ZmxpeHxlbnwwfHwwfHw%3D&w=1000&q=80")`,
        backgroundSize:"cover",
        backgroundPosition:"center center",
        // backgroundImage:`url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg")`
    }
    }>
        <div className={classes.bannerContent}>
            <h1 className={classes.title}>Movie Name</h1>
            <div className={classes.buttons}>
                <button className={classes.button}>Play</button>
                <button className={classes.button}>My List</button>
            </div>
            <h1 className={classes.description}>{truncate("This is a test description. ",100)}</h1>
        </div>
        <div className={classes.fadeBottom}/>
    </header>
  )
}

export default Banner;
