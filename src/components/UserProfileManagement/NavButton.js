import React from "react";
import "../../assets/sass/style.scss"

function NavButton({onClick}){
     return(
        <button className="button-classic" onClick={onClick}>
            Profile Management
        </button>
     );
}

export default NavButton;