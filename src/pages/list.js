import React from "react";
import ArticleCard from "../components/ArticleCard"

function List() {
    return (
        <main className="pageWrapper">
            <h1>Articles</h1>
            <ArticleCard 
                blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                date="Wednesday, August 22, 2019"
                imageAlt=""
                imageSrc="http://webvision.med.utah.edu/wp-content/uploads/2012/06/50-percent-gray.jpg"
                title="Article Title"
            />
            <ArticleCard
                blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                date="Wednesday, August 22, 2019"
                imageAlt=""
                imageSrc="http://webvision.med.utah.edu/wp-content/uploads/2012/06/50-percent-gray.jpg"
                title="Article Title"
            />
            <ArticleCard 
                blurb="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                date="Wednesday, August 22, 2019"
                imageAlt=""
                imageSrc="http://webvision.med.utah.edu/wp-content/uploads/2012/06/50-percent-gray.jpg"
                title="Article Title"
            />
        </main>
    );
}

export default List;