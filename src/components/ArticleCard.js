import React from "react";

function ArticleCard({ blurb, date, id, imageAlt, imageSrc, title}) {
    return (
        <div className="articleCard">
            <img className="articleCard--image" src={imageSrc} alt={imageAlt} />
            <div className="articleCard--text">
                <h2>{title}</h2>
                <p className="date">{date}</p>
                <p className="blurb">{blurb}</p>
                <p className="link">
                    <a href={`/article/${id}`}>Read More</a>
                </p>
            </div>
        </div>
    );
}

export default ArticleCard;