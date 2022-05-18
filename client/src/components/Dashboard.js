import React, {useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import NewsArticle from "./NewsArticle";
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import axios from "axios";


const Dashboard = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    let { userProfile } = useContext(GlobalContext);

    useEffect(async () => {
        const url = `http://localhost:8080/news/${userProfile[0].username}`
          const res = await axios.get(url).catch((error) => console.log(error));
          setPosts(res.data.articles)
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <p> <Link to="/Dashboard">Refresh</Link></p>
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

export default Dashboard