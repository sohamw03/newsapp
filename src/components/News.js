import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 8,
    };
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
    };

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
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fe70e90819724323b1d498150ce7bc9f&page=1&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fe70e90819724323b1d498150ce7bc9f&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, page: this.state.page - 1, loading: false });
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    };

    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fe70e90819724323b1d498150ce7bc9f&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({ articles: parsedData.articles, page: this.state.page + 1, loading: false });
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100);
        }
    };

    render() {
        return (
            <div className="container my-5">
                <h1 className="my-5 text-center">Top headlines</h1>
                {(this.state.loading && <Spinner />) || (
                    <div className="tiles">
                        <div className="row">
                            {this.state.articles?.map((e) => {
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
                            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>
                                Next &rarr;
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default News;
