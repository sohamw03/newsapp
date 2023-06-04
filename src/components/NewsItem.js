import React, { Component } from "react";

export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
        return (
            <>
                <div className="card rounded-4 position-relative border-1">
                    <img src={imgUrl} className="card-img-top rounded-4 rounded-bottom " alt="..." style={{ height: "17rem", objectFit: "cover" }} />
                    <span className="badge rounded-0 bg-dark fs-6" style={{ transform: "translate(0, -0.35rem)" }}>
                        {source}
                    </span>
                    <div className="card-body">
                        <h5 className="card-title" style={{ height: "3.17rem", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {title.slice(0, 70) + (title.length > 70 ? "..." : "")}
                        </h5>
                        <p className="card-text" style={{ height: "2.8rem", overflow: "hidden", textOverflow: "ellipsis" }}>
                            {description.slice(0, 95) + (description.length > 95 ? "..." : "")}
                        </p>
                        <p className="card-text">
                            <small className="text-muted">
                                By {author != "" && author != null ? author : "Anonymous"} on {new Date(date).toGMTString()}
                            </small>
                        </p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-outline-dark btn-sm rounded-3 border-secondary stretched-link">
                            Read more
                        </a>
                    </div>
                </div>
            </>
        );
    }
}

export default NewsItem;
