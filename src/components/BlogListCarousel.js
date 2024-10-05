import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Container, IconButton } from "@mui/material";
import frontMatter from "front-matter";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import BlogCard from "./BlogCard";

const BlogCarousel = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/blogs/blogList.json");
        const blogFiles = await response.json();
        const blogDataPromises = blogFiles.map(async (fileName) => {
          const res = await fetch(`/blogs/${fileName}`);
          const text = await res.text();
          const { attributes } = frontMatter(text);
          return { fileName: fileName.replace(".md", ""), ...attributes };
        });
        const blogData = await Promise.all(blogDataPromises);
        setBlogs(blogData);
      } catch (error) {
        console.error("Error fetching blog list:", error);
      }
    };

    fetchBlogs();
  }, []);

  const NextArrow = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "white",
        zIndex: 1,
        "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );

  const PrevArrow = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: "10px",
        transform: "translateY(-50%)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "white",
        zIndex: 1,
        "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.7)" },
      }}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of blogs visible at a time on desktop
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false, // Disable arrows for tablets
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Disable arrows for mobile
        },
      },
    ],
  };

  return (
    <Box
      id="blogsCarousel"
      sx={{
        pt: { xs: 4, sm: 8 },
        pb: { xs: 8, sm: 8 },
        color: "white",
      }}
    >
      <Container>
        <Slider {...settings}>
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog.fileName} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default BlogCarousel;