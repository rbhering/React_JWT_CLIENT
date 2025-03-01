
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react'; 
import PostService from '../services/PostService';

export default function PostPagination(limit) {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    alert(value);
  };

  useEffect (() => {
    PostService.getPostsPerPage(page, limit).then(
      (response) => {
        console.log(response.data);
      }
    );
  }, [page, limit]);

  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={5} page={page} onChange={handleChange} />
    </Stack>
  );
}