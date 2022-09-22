import React from "react";

function Article () {
    const backgroundImageUrl = 
        "url('https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1052-111a-ku5baq2g.jpg?w=1200&h=1200&dpr=1&fit=clip&crop=default&fm=jpg&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=06824fac65b4dc1ee4f8b0c748323295')"
    return (
        <main>
            <header 
                className="article--header"
                style={{ 
                    backgroundImage: backgroundImageUrl,
                    backgroundSize: "cover",
                }}
            >
                <div className="article--header--wrapper">
                    <h1>Article Title</h1>
                    <p>Wednesday, August 22, 2019</p>
                    <p>Note that this is the article blurb. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab.</p>
                </div>
            </header>
            <section className="article--content">

            </section>
        </main>

    );
}

export default Article;