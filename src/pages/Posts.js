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
  const postsPorPagina = 2;


  const logOut = () => {
    AuthService.logout();
  };




  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    PostService.getPostsPerPage(page, postsPorPagina).then(
      (response) => {
        setPosts(response.data);
      }
    );
  }, [page]);

  useEffect(() => {
    PostService.getPostCount().then(
      (response) => {
        let count = response.data;
        if (count % postsPorPagina === 0) {
          count = count / postsPorPagina;
        }
        else {
          count = Math.floor(count / postsPorPagina) + 1;
        }
        setPagesCount(count);
      }
    );
  }, []);


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