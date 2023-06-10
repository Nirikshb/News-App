import React from "react";
// ArticleItem component
export const ArticleItem = ({ article }) => {
  return (
    <div className="provider">
      <img className="picture" src={article.urlToImage} alt="" />
      <div>
        <h1>
          <a href={article.url}>{article.title}</a>
        </h1>
        <p className="description">{article.description}</p>
        <p className="published-date">{article.publishedAt.split("T")[0]}</p>
      </div>
    </div>
  );
};

// Articles component
const Articles = ({ articles }) => {
  return (
    <div className="articles-container">
      {articles.map((article, index) => (
        <ArticleItem article={article} key={article.title + index} />
      ))}
    </div>
  );
};

export default Articles;
