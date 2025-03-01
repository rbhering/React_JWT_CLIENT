import React, { useState, useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthService from './../services/AuthService';
import PostService from './../services/PostService';

import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Home = () => {
  
  
  const [Posts, setPosts] = useState([]);


  const logOut = () => {
    AuthService.logout();
  };

  const navigate = useNavigate();

  // useEffect(() => {

  //   PostService.getAllPosts().then(
  //     (response) => {
  //       setPosts(response.data);
  //     }
  //   );
  // }, [navigate]);

  
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    alert(value);
  };

  useEffect (() => {
    PostService.getPostsPerPage(page, 2).then(
      (response) => {
        setPosts(response.data);
        console.log(response.data);
      }
    );
  }, [page]);
  

  return (



    <div>

<Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={5} page={page} onChange={handleChange} />
    </Stack>


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
      
    </div>
   
  );
};

export default Home;