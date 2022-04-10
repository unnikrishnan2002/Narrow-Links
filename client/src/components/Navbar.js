import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../css/navbar.css';
import LoginButton from "./Login";
import LogoutButton from "./Logout";

const Navbar = () => {

    const { isAuthenticated } = useAuth0();

    return (

        <>
            <div id="title" >
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">



                    <a class="navbar-brand mx-auto" href="#">
                        &nbsp;<i class="fa-solid fa-link"></i>
                    </a>


                    &nbsp;<a className="navbar-brand" href="/">Narrow Links</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="https://github.com/unnikrishnan2002/Narrow-Links"><i class="fa-brands fa-github"></i> Github</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Contact us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Sign up</a>
                            </li>
                            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
                            {/* <LoginButton/> */}
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar