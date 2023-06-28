import React from "react";
import "../../assets/sass/style.scss"
import { useNavigate } from "react-router-dom";


/* User Profile Managenent import start */
import NavButton from "../UserProfileManagement/NavButton";

/* User Profile Management import end */

function Home(){

    const navigate = useNavigate();

    const handleClick = () =>{
        console.log("clicked");
        navigate("/Profile");
    }

    return (
        <div>
            <div className="title">
                <h1>
                    This is Home Page
                </h1>
            </div>
            <div className="home-container">
                <div className="home-main">
                    <NavButton onClick={handleClick} />
                </div>
            </div>
        </div>
    );
}

export default Home;