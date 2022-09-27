import React from "react";
import ArticleCard from "../components/ArticleCard";
import Data from "../components/data";

function List() {
    //console.log(Data);
    return (
        <main className="pageWrapper">
            <h1>Articles</h1>
            {Data.map((article, i) => (         
                <ArticleCard 
                    key={i}
                    blurb={article.blurb}
                    date={article.publishedDate}
                    id={article.id}
                    imageAlt={article.image.alt}
                    imageSrc={article.image.url}
                    title={article.title}
                />
            ))}
        </main>
    );
}

export default List;