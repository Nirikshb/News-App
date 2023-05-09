import React from "react";

// ArticleItem component
export const ArticleItem = ({ article }) => {
  return (
    <div className="provider">
      <h1>
        <a href={article.url}>{article.title}</a>
      </h1>
      <p style={{ margin: "20px 0" }}>{article.description}</p>
      <p>{article.publishedAt.split("T")[0]}</p>
      <img className="picture" src={article.urlToImage} alt="" />
    </div>
  );
};

// Articles component
const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => (
        <ArticleItem article={article} key={article.title + index} />
      ))}
    </>
  );
};

export default Articles;
