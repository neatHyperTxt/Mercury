import React from 'react'
import classes from './ProfileScreen.module.css';
import Nav from '../components/HomeScreen/Nav';
import {useSelector} from 'react-redux';
import {selectUser} from '../features/userSlice'
import {auth} from '../firebase';
function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className={classes.profileScreen}>
        <Nav/>
        <div className={classes.profileScreen_body}>
            <h1>Edit Profile</h1>
            <div className={classes.profileScreen_info}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                <div className={classes.profileScreen_details}>
                    <h2>{user.email}</h2>
                    <div className={classes.profileScreen_plans}>

                        <button onClick={()=>
                        {
                            auth.signOut();
                        }} className={classes.profileScreen_signOut}>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen
