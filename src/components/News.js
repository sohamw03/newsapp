import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
        };
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=fe70e90819724323b1d498150ce7bc9f";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles });
    }

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
            </div>
        );
    }
}

export default News;
