import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import NewsCard from "./NewsCard";
import "./style.css";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
// import Hedaer from './Header'
import Header from "./Header";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [article, setArticle] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [totalpage, setTotalPage] = useState(0);

  const [searchInput, setSearchInput] = useState("");

  const handleChangePage = (e) => {
    console.log(e, "hdsbfh");
    setCurrentPage(e.selected);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(searchInput);
  };
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchdata = async () => {
      try {
        const { data } = await axios.get(
          "https://hn.algolia.com/api/v1/search?query=test",
          {
            params: { page: currentPage, query },
          }
        );
        const { hits, nbPages } = data;
        setArticle(hits);
        setTotalPage(nbPages);
        console.log(data, "this is data ");
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchdata();
  }, [currentPage, query]);
  return (
    <>
      <Header />
      {/* <div className='Heading'>Hacker News</div> */}
      <div className="container">
        <form className="serach-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for news"
            onChange={handleChange}
            value={searchInput}
          />
          <button type="submit">Search </button>
        </form>
        <div className="news-container">
          {isloading ? (
            <div className="spinner">
              {" "}
              <CircularProgress color="secondary" />
            </div>
          ) : (
            article.map((article) => (
              <NewsCard article={article} key={article.objectID} />
            ))
          )}
        </div>
        <ReactPaginate
          nextLabel=">>"
          previousLabel="<<"
          breakLabel=".."
          forcePage={currentPage}
          pageCount={totalpage}
          renderOnZeroPageCount={null}
          onPageChange={handleChangePage}
          className="pagination"
          activeClassName="active-page"
          previousClassName="previous-page"
          nextClassName="next-page"
        />
      </div>
    </>
  );
};

export default Page;
