import React from "react";
import "../../assets/sass/style.scss"
import Navbar from "./Navbar";
import { useState } from "react";
import { useFirebaseApp, FirebaseAppProvider } from 'reactfire'; // Assuming you're using reactfire package
import firestore from "../../firestore";
import axios from "axios";



const Profile = () => {

  axios.defaults.baseURL = 'https://us-central1-csci-5410-serverless-lab.cloudfunctions.net';
  // axios.interceptors.request.use((config) => {
  //   // config.headers["Origin"] = "https://us-central1-csci-5410-serverless-lab.cloudfunctions.net";
  //   return config;
  // });



  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    // other profile data
  });

  const updateProfile = async () => {
    try {
      const response = await axios.post('/profile-update',{
        name:name,
        email:email
      });

      console.log(response);
      console.log('Profile updated successfully!', response.data);
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  const handleInputChange = (e) => {
    setProfileData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

    return (
        <div>
            <Navbar/>
            <div className="profile-container">
            <div>
                <input type="text" name="name" value={profileData.name} onChange={handleInputChange} />
                <input type="email" name="email" value={profileData.email} onChange={handleInputChange} />
                {/* Other input fields for additional profile data */}
                <button className="button-classic" onClick={updateProfile}>Update Profile</button>
            </div>
            </div>
        </div>
    );

}

function ProfileWrapper(){
  return(
    <FirebaseAppProvider firebaseApp={firestore} >
      <Profile/>
    </FirebaseAppProvider>
  );
}


export default ProfileWrapper;
