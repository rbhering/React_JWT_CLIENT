import React, { useState, useEffect} from "react";
import PostService from "../services/post.service";
import AuthService from "../services/auth.service";
import { useNavigate, Link } from "react-router-dom";
import PaginationControlled from "./../hooks/PaginationControlled";
const Home = () => {
  
  
  const [privatePosts, setPrivatePosts] = useState([]);
  const user = AuthService.getCurrentUser();


  const logOut = () => {
    AuthService.logout();
  };

  const navigate = useNavigate();

  useEffect(() => {

    PostService.getAllPrivatePosts().then(
      (response) => {
        setPrivatePosts(response.data);
      },
      async (error) => {
        //alert(error)
        console.log(error)
        // Invalid token
        if (error.response == null) {
          //refresh token
          if (user != null) {
            await AuthService.loginWithRefreshToken(AuthService.getCurrentUser().refreshToken).then(
              () => {
                navigate("/posts");
                window.location.reload();
              },
              () => {
                AuthService.logout();
                navigate("/");
                window.location.reload();
              }
            );
          }
          else {
            AuthService.logout();
            navigate("/");
            window.location.reload();
          }
        }
      }
    );
  }, [navigate]);

  function RenderPost() {
    useEffect(() => {
      setInterval(() => {
        PostService.getAllPrivatePosts().then(
          (response) => {
            setPrivatePosts(response.data);
          })
        //alert('SDF')
      }, 1 * 30 * 1000)
    }, [])

  }
  RenderPost();

  

  return (
    <div>
      <PaginationControlled />
      <h1>Private Posts</h1>
      <div className="d-grid gap-2 mt-3">
        <Link to="/" onClick={logOut}>
          <button type="submit" className="btn btn-primary">
            Logout
          </button>
        </Link>
      </div>
      {
        privatePosts &&
        privatePosts.map((post) =>

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