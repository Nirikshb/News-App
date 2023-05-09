import React, { useState } from "react";
import { getArticles } from "./api";
import Articles from "./Articles";
import Searchbar from "./Searchbar";
import "./App.css";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState("");
  const [totalResults, setTotalResults] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const searchForTopic = async (topic) => {
    try {
      setIsLoading(true);
      const response = await getArticles(topic);
      setArticles(response.articles);
      setTopic(topic);
      setTotalResults(response.totalResults);
    } catch (error) {
      setError("Could not find any articles");
    }
    setIsLoading(false);
  };

  return (
    <>
      {/* Searchbar */}
      <Searchbar searchForTopic={searchForTopic} />

      {/* Loading message */}
      {isLoading && <p style={{ textAlign: "center" }}>Hold on a sec..Searching for articles...</p>}

      {/* Found articles message */}
      {articles.length > 0 && <h2>Found {totalResults} articles on "{topic}"</h2>}

      {/* Render articles */}
      {articles.length > 0 && <Articles articles={articles} />}

      {/* Error message */}
      {error && <p>Couldn't find any articles on {topic}</p>}

    </>
  );
};

export default App;
