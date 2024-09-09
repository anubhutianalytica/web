import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../views/Layout';
import { Box, Container, Typography, Card, CardContent, CardActionArea, Grid } from '@mui/material';
import { alpha } from "@mui/material";
import frontMatter from 'front-matter';

const BlogList = () => {
  const [blogs, setBlogs] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/blogs/blogList.json');
        const blogFiles = await response.json();
        const blogData = await Promise.all(
          blogFiles.map(async (file) => {
            const res = await fetch(`/blogs/${file}`);
            const text = await res.text();
            const { attributes } = frontMatter(text);
            return { ...attributes, fileName: file.replace('.md', '') };
          })
        );
        setBlogs(blogData);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogs();
  }, []);

  const handleCardClick = (fileName) => {
    navigate(`/blog/${fileName}`);
  };

  return (
    <Layout>
      <Box
        id="hero"
        sx={(theme) => ({
          width: "100%",
          backgroundImage:
            theme.palette.mode === "light"
              ? "linear-gradient(180deg, #48ACF0, #FFF)"
              : `linear-gradient(#48ACF0, ${alpha("#090E10", 0.0)})`,
          backgroundSize: "100% 20%",
          backgroundRepeat: "no-repeat",
        })}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 12 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column" },
              alignSelf: "center",
              background: {
                xs: "", sm: "radial-gradient(circle closest-side, rgba(72, 172, 240, 0.35) 0%, rgba(181, 37, 37, 0) 100%)"},
              textAlign: "center",
              fontSize: "clamp(3.5rem, 10vw, 4rem)",
            }}
          >
            The Anubhuti Blog
          </Typography>
        </Container>
      </Box>
      <Container sx={{ pt: 4, pb: 8 }}>
        <Grid container spacing={3}>
          {blogs.map((blog, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card onClick={() => handleCardClick(blog.fileName)} sx={{ cursor: 'pointer' }}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {blog.subtitle}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default BlogList;