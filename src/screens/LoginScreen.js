import React,{useState} from 'react'
import SignUpScreen from './SignUpScreen';
import classes from './LoginScreen.module.css';
function LoginScreen() {
  const [signedIn,setSignedIn] = useState(false);
  const signInButtonHandler = ()=>{
    setSignedIn(true);
  }
  return (
    <div className={classes.loginScreen}>
      <div className={classes.loginScreen_background}>
        <img className={classes.loginScreenLogo} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
        <button onClick={signInButtonHandler} className={classes.loginScreenButton}>Sign In</button>
        <div className={classes.loginScreen_gradient}/>
      </div>
      {signedIn? <SignUpScreen/>:(<div className={classes.loginScreen_body}>
        <>
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className={classes.loginScreen_input}>
          <form>
            <input 
            type="email"
            placeholder="Email Address"
             />
             <button onClick={signInButtonHandler} className={classes.loginScreen_getStarted}>GET STARTED</button>
          </form>
        </div>
        </>
      </div>)}
    </div>
  )
}

export default LoginScreen;
