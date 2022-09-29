import { findAllByAltText } from "@testing-library/react";
import React, { useMemo } from "react";
import { useParams } from "react-router";
import Data from '../components/data'

function Article () {
    const { id } = useParams();

    const articleData = Data.find((article) => (
        article.id === id
    ))
    
    console.log(articleData)

    const date = useMemo (() => {
        if(!articleData) return '';
        const parsedDate = new Date(articleData.publishedDate);
        return parsedDate.toDateString();
    }, [articleData]);
    
    return (
        <main>
            <header 
                className="article--header"
                style={{ 
                    backgroundImage: `url('${articleData.image.url}')`,
                    backgroundSize: "cover",
                }}
            >
                <div className="article--header--wrapper">
                    <h1>{articleData.title}</h1>
                    <p>Wednesday, August 22, 2019</p>
                    <p className="blurb">{articleData.blurb}</p>
                </div>
            </header>
            <section className="article--content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h2>Header Two Inserted</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <h3>Header Three Inserted</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </section>
        </main>

    );
}

export default Article;