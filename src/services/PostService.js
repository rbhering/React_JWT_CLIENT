import axios from "axios";
import AuthHeader from './AuthHeader';

const baseURL = "https://localhost:5001";

const API_URL = "/api/posts";

const getAllPosts = () => {
  return axios.get(baseURL+API_URL, { headers: AuthHeader() });
};

const PostService = {
  getAllPosts,
};

export default PostService;