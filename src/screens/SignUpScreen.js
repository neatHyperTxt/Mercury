import React,{useRef} from 'react'
import {auth} from '../firebase';
import classes from './SignUpScreen.module.css';
function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const register = (event)=>
  {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser);
    }).catch(error=>{
      alert(error.message);
    });
  }
  const signInhandler = (event)=>
  {
    event.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value).then((authUser)=>{
        console.log(authUser);
      }).catch(error=>{
        alert(error.message)
      }
      );
  }
  return (
    <div className={classes.signUpScreen}>
       <form>
         <h1>Sign In</h1>
         <input ref={emailRef} type="email" placeholder="Email"/>
         <input ref={passwordRef} type="password" placeholder="Password" />
         <button onClick={signInhandler} type="submit">Sign In</button>
         <h4> 
           <span className={classes.signUpScreen_gray}>New to Neflix?</span>
           <span onClick={register} className={classes.signUpScreen_link}>Sign Up Now.</span>
        </h4>
       </form>
    </div>
  )
}

export default SignIn
