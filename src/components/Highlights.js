import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Cost Reduction',
    description:
      'Through performance evaluation and optimization, we help clients identify inefficiencies and streamline operations, reducing unnecessary expenses and improving cost-effectiveness.',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Risk Mitigation',
    description:
      'By forecasting market trends and identifying potential risks, we assist clients in implementing proactive strategies to mitigate risks and protect their bottom line.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Strategic Decision Making',
    description:
      'Our analysis services provide clients with data-driven insights that inform strategic decision-making, enabling them to allocate resources effectively, target the right audience, and capitalize on opportunities for growth.',
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: 'Market Competitiveness',
    description:
      'With marketing analytics and customer segmentation, we help clients stay ahead of the competition by understanding customer preferences, tailoring offerings, and enhancing customer satisfaction and loyalty.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Revenue Growth',
    description:
      'By optimizing marketing strategies, targeting lucrative customer segments, and capitalizing on opportunities identified through data analysis, we drive revenue growth and improve overall profitability for our clients.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Enhanced Customer Satisfaction and Retention',
    description:
      'Through deep analysis of customer behavior and preferences, we help clients tailor their products, services, and marketing efforts to meet the specific needs of their customer segments, resulting in higher customer satisfaction, loyalty, and retention.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: { sm: 'left', md: 'center' },
          }}
        >
          <Typography component="h2" variant="h4">
            Highlights
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer support and
            precision in every detail.
          </Typography>
        </Box>
        <Grid container spacing={2.5}>
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}