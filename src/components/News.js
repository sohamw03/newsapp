import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    static propTypes = {};

    render() {
        return (
            <div className="container my-5">
                <h2 className="my-3">NewsMonkey top headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem />
                    </div>
                    <div className="col-md-4">
                        <NewsItem />
                    </div>
                    <div className="col-md-4">
                        <NewsItem />
                    </div>
                </div>
            </div>
        );
    }
}

export default News;
