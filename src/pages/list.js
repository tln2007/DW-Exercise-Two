import React from "react";
import ArticleCard from "../components/ArticleCard"

function List() {
    return (
        <main className="pageWrapper">
            <h1>Articles</h1>
            <ArticleCard 
                blurb=""
                date=""
                imageAlt=""
                imageSrc=""
                title="Article Title"
            />
            <ArticleCard />
            <ArticleCard />
        </main>
    );
}

export default List;