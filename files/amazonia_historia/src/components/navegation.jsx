import React from "react";
import '../css/navegation.css'
import { Link } from "react-router-dom";



function Navegation(){

    return (

        <div>
            <h2 className="Navegation">

                <Link to='/home'>Home</Link>
                <Link to='/historia'>Historia</Link>
                
                
            </h2>



        </div>

    )
}

export default Navegation