
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { Alert } from 'bootstrap';

export default function PaginationControlled() {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    alert(value);
  };

  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={5} page={page} onChange={handleChange} />
    </Stack>
  );
}