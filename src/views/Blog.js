import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../views/Layout';
import { Box, Container, Typography } from '@mui/material';
import { alpha } from "@mui/material";
import frontMatter from 'front-matter';

const Blog = () => {
  const { fileName } = useParams();
  const [blog, setBlog] = React.useState(null);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch('/blogs/blogList.json');
        const blogFiles = await response.json();
        if (!blogFiles.includes(fileName + '.md')) {
          setError('Blog not found');
          return;
        }

        const res = await fetch(`/blogs/${fileName}.md`);
        if (!res.ok) {
          throw new Error('Failed to fetch blog post');
        }
        const text = await res.text();
        const { attributes, body } = frontMatter(text);
        setBlog({ ...attributes, content: body });
      } catch (error) {
        console.error('Error fetching blog post:', error);
        setError('Error fetching blog post');
      }
    };

    fetchBlog();
  }, [fileName]);

  if (error) {
    return (
      <Layout>
        <Container sx={{ pt: 4, pb: 8 }}>
          <Typography variant="h4" color="error">
            {error}
          </Typography>
        </Container>
      </Layout>
    );
  }

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
            {blog?.title}
          </Typography>
        </Container>
      </Box>
      <Container sx={{ pt: 4, pb: 8 }}>
        <Typography variant="h6" color="textSecondary">
          {blog?.subtitle}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {new Date(blog?.date).toLocaleDateString()}
        </Typography>
        <ReactMarkdown>{blog?.content}</ReactMarkdown>
      </Container>
    </Layout>
  );
};

export default Blog;
