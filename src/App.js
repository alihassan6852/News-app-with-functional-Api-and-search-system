import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import NewsCard from "./components/NewsCard";

function App() {
  const [news, setNews] = useState([]);

  const getNews = async (title) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${title ? title : 'football'}&from=2022-08-24&apiKey=9489ac48a04242a7aad3a37757db7ff9#`
    );
    const data = await response.json();
    setNews(data.articles);
  }; 
  useEffect(() => {
   
    getNews();
  }, []);

  return (<>
      <Navbar getNews={getNews} />
    <div id="card">
    {news.map((va) => {
        return <NewsCard data={va} />;
      })}
    </div>
  </>
  );
}

export default App;
