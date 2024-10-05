import React from "react";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import Layout from "../views/Layout";
import { Box, Container, Typography } from "@mui/material";
import frontMatter from "front-matter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import getLPTheme from "../actions/getLPTheme";
import EventIcon from "@mui/icons-material/Event";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "../styles/App.css";

const Blog = () => {
  const { fileName } = useParams();
  const [blog, setBlog] = React.useState(null);
  const [error, setError] = React.useState(null);
  const LPtheme = createTheme(getLPTheme("light"));

  React.useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch("/blogs/blogList.json");
        const blogFiles = await response.json();
        if (!blogFiles.includes(fileName + ".md")) {
          setError("Blog not found");
          return;
        }

        const res = await fetch(`/blogs/${fileName}.md`);
        if (!res.ok) {
          throw new Error("Failed to fetch blog post");
        }
        const text = await res.text();
        const { attributes, body } = frontMatter(text);
        setBlog({ ...attributes, content: body });
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setError("Error fetching blog post");
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

  const customStyle = {
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  };
  

  // Function to format the date like "1 January 2024"
  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Check if the image is not the default image
  const isCustomImage =
    blog?.image && blog.image !== "/images/uploads/defaultBanner.png";

  return (
    <ThemeProvider theme={LPtheme}>
      <Layout>
        <Box
          id="hero"
          sx={{
            width: "100%",
            backgroundImage: blog?.image
              ? `url(${blog.image})`
              : `url(/images/uploads/defaultBanner.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: "black",
          }}
        >
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pt: { xs: 14, sm: 20 },
              pb: { xs: 4, sm: 4 },
              textAlign: "center",
              backdropFilter: "blur(5px)", // Adds a subtle blur effect to the background
            }}
          >
            <Typography
              variant="h1"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.75)",
                padding: "16px",
                fontWeight: "bold",
                color: "black",
                borderRadius: 2,
                textAlign: "center",
                fontSize: {
                  xs: "clamp(1.5rem, 5vw, 2.5rem)",
                  sm: "clamp(3.5rem, 10vw, 4rem)",
                },
                overflowWrap: "break-word", // Ensure text wraps within the viewport
                whiteSpace: "normal",
                maxWidth: "90%", // Adjust maximum width for better mobile handling
                mx: "auto",
              }}
            >
              {blog?.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.75)",
                marginTop: "8px",
                padding: "8px",
                color: "black",
                borderRadius: 2,
                textAlign: "center",
                fontSize: {
                  xs: "clamp(1rem, 4vw, 1.5rem)",
                  sm: "clamp(1.25rem, 4vw, 1.75rem)",
                },
              }}
            >
              {blog?.subtitle}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                marginTop: "4px",
                padding: "6px",
                color: "black",
                borderRadius: 2,
                textAlign: "center",
                fontSize: {
                  xs: "clamp(0.75rem, 3vw, 1rem)",
                  sm: "clamp(1rem, 3vw, 1.25rem)",
                },
              }}
            >
              <EventIcon sx={{ color: "gray", mr: 1 }} />
              <Typography
                variant="body2"
                sx={{
                  fontSize: "inherit",
                  color: "inherit",
                }}
              >
                {blog?.date ? formatDate(blog?.date) : ""}
              </Typography>
            </Box>
          </Container>
        </Box>
        <Container sx={{ pt: 4, pb: 8 }}>
          {isCustomImage && (
            <Box
              sx={{
                mb: 4,
                display: "flex",
                justifyContent: "center",
                maxHeight: "500px", // Max height constraint for the image
                maxWidth: "100%", // Limit image to container width
                overflow: "hidden", // Ensure image never overflows
              }}
            >
              <img
                src={blog?.image}
                alt={blog?.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "500px", // Maintain a maximum height without cropping
                  objectFit: "contain", // Ensure the image is never cropped, fits within bounds
                  borderRadius: "8px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              />
            </Box>
          )}

          {/* Render blog content */}
          <Markdown
            children={blog?.content}
            components={{
              code(props) {
                const { children, className, node, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
                    style={materialDark}
                    customStyle={customStyle}
                  />
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default Blog;
