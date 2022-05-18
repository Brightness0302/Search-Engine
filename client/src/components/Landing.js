import React, { useState, useEffect } from 'react';
import NewsArticle from "./NewsArticle";
import { Link } from 'react-router-dom';
import axios from "axios";
import Pagination from './Pagination';


const Landing = () => {
    const [posts, setPosts] = useState([]);
    const [search_item, setSILog] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(async () => {
      const url = `http://localhost:8080/category/general`
      console.log(url);
      axios.get(url).then(res => {
        console.log(res.data.articles);
        setPosts(res.data.articles)
      })
    }, []);

    const onSubmit = async e => {
      e.preventDefault();
      const url = `http://localhost:8080/search/`+search_item;
      axios.get(url).then(res => {
        console.log(res.data.articles)
        if (res.status===200)
        	setPosts(res.data.articles);
      })
      .catch((res, err) => {
        setPosts([]);
        alert("Not Found!")
      });
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <div className='container'>
            <p> <Link to="/">Refresh</Link></p>
            <form className="input-group mb-3" onSubmit={e => onSubmit(e)}>
              <input type="text" className="form-control" placeholder="Search..." 
                onChange={(e) => {
                  setSILog(e.target.value);}
                }
              />
              <button type="submit" className="btn btn-primary">ss</button>
            </form>
            {currentPosts ? currentPosts.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
          <Pagination
            postsPerPage = {postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
          />
        </div>
    )
}

export default Landing