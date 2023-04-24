import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
        };
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=fe70e90819724323b1d498150ce7bc9f&page=1&pagesize=20";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    }

    handlePrevClick = async () => {
        console.log("previous");
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=fe70e90819724323b1d498150ce7bc9f&page=${this.state.page - 1}&pagesize=20`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
        });
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    };

    handleNextClick = async () => {
        console.log("next");
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
        } else {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=fe70e90819724323b1d498150ce7bc9f&page=${this.state.page + 1}&pagesize=20`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
            });
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100);
        }
    };

    render() {
        return (
            <div className="container my-5">
                <h1 className="my-3">NewsMonkey top headlines</h1>
                <div className="row">
                    {this.state.articles.map((e) => {
                        return (
                            <div className="col-md-4 my-2" key={e.url}>
                                <NewsItem title={e.title ? e.title : ""} imgUrl={e.urlToImage ? e.urlToImage : "https://w0.peakpx.com/wallpaper/328/899/HD-wallpaper-relax-077777-dark.jpg"} description={e.description ? e.description : ""} newsUrl={e.url} />
                            </div>
                        );
                    })}
                </div>
                <div className="d-flex justify-content-between my-4">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>
                        &larr; Prev
                    </button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>
                        Next &rarr;
                    </button>
                </div>
            </div>
        );
    }
}

export default News;
