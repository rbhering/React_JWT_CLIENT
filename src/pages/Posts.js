import React, { useState, useEffect } from "react";
import {  Link } from "react-router-dom";
import AuthService from './../services/AuthService';
import PostService from './../services/PostService';

import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Home = () => {


  const [Posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState();
  const POSTS_PER_PAGE = 2;


  const logOut = () => {
    AuthService.logout();
  };




  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    PostService.getPostsPerPage(page, POSTS_PER_PAGE).then(
      (response) => {
        setPosts(response.data);
      }
    );
    PostService.getPostCount().then(
      (response) => {
        GettPagesCount(response.data)
      }
    );

  }, [page]);


    useEffect(() => {
      PostService.getPostCount().then(
        (response) => {
          GettPagesCount(response.data)
        }
      );
    }, []);
  
 function GettPagesCount(data) {
    let count = data;
    if (count % POSTS_PER_PAGE === 0) {
      count = count / POSTS_PER_PAGE;
    }
    else {
      count = Math.floor(count / POSTS_PER_PAGE) + 1;
    }
    setPagesCount(count);

  }



  return (



    <div>



      <h1> Posts</h1>
      <div className="d-grid gap-2 mt-3">
        <Link to="/" onClick={logOut}>
          <button type="submit" className="btn btn-primary">
            Logout
          </button>
        </Link>
      </div>
      {
        Posts &&
        Posts.map((post) =>

          <div key={post.id} className="card">

            <h5 className="card-header">{post.titulo}</h5>
            <div className="card-body">
              <p className="card-text">{post.text}</p>
              <Link to="/" className="btn btn-primary" onClick={logOut}> Ler Post</Link>
            </div>
          </div>
        )
      }

      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={pagesCount} page={page} onChange={handleChange} />
      </Stack>

    </div>

  );
};

export default Home;