import React,{useEffect} from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import {auth} from './firebase';
import {useDispatch,useSelector} from 'react-redux'
import {login,logout, selectUser} from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';
const router = createBrowserRouter([
  {path:'/',element:<HomeScreen/>},
  {path:'/profile',element:<ProfileScreen/>}
])
function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth=>{
      if(userAuth)
      {
        console.log('From App.js');
        console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }))
      }
      else{
        dispatch(logout());
      }
    })
    return unsubscribe;
  },[dispatch]);
  return (
    <>
    {!user?<LoginScreen/>:(<RouterProvider router={router}/>)};
    </>
  );
}

export default App;
