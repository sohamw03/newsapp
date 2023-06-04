import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 8,
    };
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
    };

    constructor(props) {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
        };
        this.fetchMoreData = this.fetchMoreData.bind(this);
        document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - NewsMonkey`;
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fe70e90819724323b1d498150ce7bc9f&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    }

    async componentDidMount() {
        this.updateNews();
    }

    async fetchMoreData() {
        this.setState({ page: this.state.page + 1 });
        setTimeout(async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fe70e90819724323b1d498150ce7bc9f&page=${this.state.page}&pagesize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({ totalResults: parsedData.totalResults, articles: this.state.articles.concat(parsedData.articles) });
        }, 1000);
    }

    render() {
        return (
            <>
                <h1 className="my-5 text-center">Top headlines in {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}</h1>
                {(this.state.loading && <Spinner />) || (
                    <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length < this.state.totalResults} loader={<Spinner />}>
                        <div className="container my-5">
                            <div className="tiles">
                                <div className="row">
                                    {this.state.articles?.map((e) => {
                                        return (
                                            <div className="col-md-4 my-2" key={e.url}>
                                                <NewsItem title={e.title ? e.title : ""} imgUrl={e.urlToImage ? e.urlToImage : "https://w0.peakpx.com/wallpaper/328/899/HD-wallpaper-relax-077777-dark.jpg"} description={e.description ? e.description : ""} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </InfiniteScroll>
                )}
            </>
        );
    }
}

export default News;
