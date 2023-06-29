import PropTypes from "prop-types";
import { React, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default function News(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(50);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    };

    const fetchMoreData = async () => {
        setPage(page + 1);
        setTimeout(async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setTotalResults(parsedData.totalResults);
            setArticles(articles.concat(parsedData.articles));
        }, 1000);
    };

    useEffect(() => {
        document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - NewsMonkey`;
        updateNews();
        const fetchMoreDataCall = fetchMoreData.bind(this);
        fetchMoreDataCall();
    }, []);

    return (
        <>
            <h1 className="my-5 text-center">Top headlines in {props.category.charAt(0).toUpperCase() + props.category.slice(1)}</h1>
            {(loading && <Spinner />) || (
                <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length < totalResults} loader={<Spinner />}>
                    <div className="container my-5">
                        <div className="tiles">
                            <div className="row">
                                {articles?.map((e) => {
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

News.defaultProps = {
    country: "in",
    pageSize: 8,
};
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
};
