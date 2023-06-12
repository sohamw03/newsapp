import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            showTopBtn: false,
        };
    }

    topBtnToggle = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            this.setState({ showTopBtn: true });
        } else if (scrolled <= 300) {
            this.setState({ showTopBtn: false });
        }
    };

    render() {
        return (
            <>
                {window.addEventListener("scroll", this.topBtnToggle)}
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
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
                {this.state.showTopBtn && (
                    <a href="#" className="btn btn-dark position-fixed bottom-0 end-0 m-4 rounded-circle" style={{ width: "3rem", aspectRatio: "1/1", zIndex: "5" }}>
                        <i className="bi bi-arrow-up position-absolute top-50 left-50 translate-middle mb-2"></i>
                    </a>
                )}
            </>
        );
    }
}

export default Navbar;
