import React from "react";
import Article from "./Article";

function ArticleList( {articles} ) {
    return (
        <>
        <main>
            {articles.map((post) => 
                <Article key={post.id} {...post} />
            )}
        </main>
        </>
    )
}

export default ArticleList;