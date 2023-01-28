import React,{useState,useEffect} from 'react'
import classes from './Nav.module.css';
function Nav() {
  const [show,setShow] = useState(false);

  const transitionNavbarHandler = ()=>
  {
    if(window.scrollY>100)setShow(true);
    else setShow(false);
 
  }
  useEffect(()=>{
    window.addEventListener("scroll",transitionNavbarHandler);
    return ()=>{
      window.removeEventListener("scroll",transitionNavbarHandler);
    }
  },[]);
  return (
    <div className={`${classes.nav} ${show && classes.black}`}>
      <div className={classes.content}>
        <img className={classes.logo} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="" />
        <img className={classes.avatar} src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
      </div>
    </div>
  )
}

export default Nav
