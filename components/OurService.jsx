import {
  Card,
  CardContent,
  Container,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import { OurSkills, services } from "../portfolio";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../constant/colors";
import { Fade } from "react-reveal";

const OurService = () => {
  return (
    <Container fixed id="services">
      <div className="section-title">
        <h2>{OurSkills.title}</h2>
      </div>

      <Grid container spacing={2}>
        {services.map((item, index) => (
          <Grid item key={index} xs={12} md={4}>
            <Fade left duration={2000}>
              <Card sx={{ height: 280, cursor: "pointer" }}>
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: 3,
                      p: 1,
                    }}
                  >
                    <Box>{item.icon}</Box>
                    <Box>
                      <Typography
                        variant="h4"
                        sx={{ color: "#37517E", fontFamily: "Open sans" }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body1">
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurService;
