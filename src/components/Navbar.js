import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    const [showTopBtn, setShowTopBtn] = useState(false);

    const topBtnToggle = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setShowTopBtn(true);
        } else if (scrolled <= 300) {
            setShowTopBtn(false);
        }
    };

    return (
        <>
            {window.addEventListener("scroll", topBtnToggle)}
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        NewsMonkey
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/business">
                                    Business
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/entertainment">
                                    Entertainment
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/general">
                                    General
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/health">
                                    Health
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/science">
                                    Science
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/sports">
                                    Sports
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/technology">
                                    Technology
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {props.LoadingBar}
            {showTopBtn && (
                <a href="#" className="btn btn-dark position-fixed bottom-0 end-0 m-4 rounded-circle p-3" style={{ width: "3rem", height: "3rem", zIndex: "5" }}>
                    <i className="bi bi-arrow-up d-flex justify-content-center align-items-center"></i>
                </a>
            )}
        </>
    );
}
