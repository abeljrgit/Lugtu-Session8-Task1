import { Card, Grid, Typography } from '@mui/material';
import React from 'react';
import { useGetAllPostsQuery } from '../../../slices/blogPostSlice';

export const BlogPost = () => {
  const userInfo = useGetAllPostsQuery();

  return (
    <Grid container spacing={2} alignItems="stretch" sx={{ py: 8 }}>
      {userInfo?.currentData &&
        userInfo.currentData.map((data) => {
          return (
            <Grid item xs={3} key={data.id}>
              <Card sx={{ height: '100%', p: 2 }}>
                <Typography
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  {data.title}
                </Typography>
                <Typography variant="body2">{data.body}</Typography>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};
