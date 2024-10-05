import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Slider from "react-slick";

const whiteLogos = [
  { url: "/logos/python.svg", name: "Python" },
  { url: "/logos/pandas.svg", name: "Pandas" },
  { url: "/logos/numpy.svg", name: "NumPy" },
  { url: "/logos/powerbi.svg", name: "PowerBI" },
  { url: "/logos/alteryx.svg", name: "Alteryx" },
  { url: "/logos/excel.svg", name: "Excel" },
  { url: "/logos/mssql.svg", name: "SQL" },
  { url: "/logos/looker-studio.svg", name: "Looker Studio" },
  { url: "/logos/docker.svg", name: "Docker" },
  { url: "/logos/grafana.svg", name: "Grafana" },
  { url: "/logos/influxdb.svg", name: "InfluxDB" },
  { url: "/logos/postgresql.svg", name: "PostgreSQL" },
];

const logoStyle = {
  width: "100px",
  height: "80px",
  margin: "0 auto",
  opacity: 0.9,
};
const logoNameStyle = {
  textAlign: "center",
  marginTop: "8px",
  fontSize: "0.875rem",
  color: "#333",
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2200,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplaySpeed: 1500,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplaySpeed: 1200,
        arrows: false,
      },
    },
  ],
};

export default function LogoCollection() {
  const logos = whiteLogos;

  return (
    <Box id="logoCollection" sx={{ py: 4, overflowX: "hidden" }}>
      <Container>
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <Box key={index} sx={{ textAlign: "center", padding: "16px" }}>
              <img
                src={logo.url}
                alt={`Missing Logo ${index + 1}`}
                style={logoStyle}
              />
              <Typography variant="body2" style={logoNameStyle}>
                {logo.name}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}
