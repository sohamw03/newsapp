import React from "react";

export default function Spinner(props) {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "40rem" }}>
            <div className="spinner-border" role="status" style={{ width: "5rem", height: "5rem" }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}
