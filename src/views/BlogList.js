import { Box, Container, Grid, Typography, alpha } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import frontMatter from "front-matter";
import React from "react";
import getLPTheme from "../actions/getLPTheme";
import BlogCard from "../components/BlogCard";
import Layout from "../views/Layout";

const BlogList = () => {
  const [blogs, setBlogs] = React.useState([]);
  const LPtheme = createTheme(getLPTheme("light"));

  React.useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/blogs/blogList.json");
        const blogFiles = await response.json();
        const blogData = await Promise.all(
          blogFiles.map(async (file) => {
            const res = await fetch(`/blogs/${file}`);
            const text = await res.text();
            const { attributes } = frontMatter(text);
            return { ...attributes, fileName: file.replace(".md", "") };
          })
        );
        setBlogs(blogData);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <ThemeProvider theme={LPtheme}>
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
                  xs: "",
                  sm: "radial-gradient(circle closest-side, rgba(72, 172, 240, 0.35) 0%, rgba(181, 37, 37, 0) 100%)",
                },
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
                <BlogCard blog={blog} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default BlogList;