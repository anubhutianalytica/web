import React from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '../views/Layout';
import { Box, Container, Typography } from '@mui/material';
import { alpha } from "@mui/material";
import frontMatter from 'front-matter';

const BlogList = () => {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/blogs/blogList.json');
        const blogFiles = await response.json();
        const blogData = await Promise.all(
          blogFiles.map(async (file) => {
            const res = await fetch(`/blogs/${file}`);
            const text = await res.text();
            const { attributes, body } = frontMatter(text);
            return { ...attributes, content: body };
          })
        );
        setBlogs(blogData);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogs();
  }, []);

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
              backgroundImage: {
                xs: "", sm: "radial-gradient(circle closest-side, rgba(72, 172, 240, 0.65) 10%, rgba(181, 37, 37, 0) 100%)"},
              textAlign: "center",
              fontSize: "clamp(3.5rem, 10vw, 4rem)",
            }}
          >
            Anubhuti Blogs
          </Typography>
        </Container>
      </Box>
      <Container sx={{ pt: 4, pb: 8 }}>
        <ul>
          {blogs.map((blog, index) => (
            <li key={index}>
              <Typography variant="h2">{blog.title}</Typography>
              <Typography variant="h6" color="textSecondary">{blog.subtitle}</Typography>
              <Typography variant="body2" color="textSecondary">{new Date(blog.date).toLocaleDateString()}</Typography>
              <ReactMarkdown>{blog.content}</ReactMarkdown>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  );
};

export default BlogList;