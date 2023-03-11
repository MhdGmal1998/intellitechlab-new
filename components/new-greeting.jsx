import { Grid, Box, Container, Button, Typography, Link } from "@mui/material";
// import { greetings } from "../../portfolio";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IntelliteclabSocialMedia } from "./social-medai";
import { greetings } from "../portfolio";
import GreetingLottie from "./DisplayLottie";
import { PRIMARY_COLOR } from "../constant/colors";
// import { LottieImg } from '../../constants/lottie';
const IntellitechlabGreeting = () => {
  return (
    <main
    // style={{ backgroundColor: "#37517e" }}
    >
      <section>
        <Container fixed sx={{ pt: { xs: 0, md: 6 } }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                height: { xs: 350 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  variant="overline"
                  sx={{
                    fontSize: { xs: 16, md: 22 },
                    fontWeight: "bold",
                    color: PRIMARY_COLOR,
                  }}
                >
                  {greetings.title}
                </Typography>
              </Box>
              <Box>
                <Typography variant="h6" color="black">
                  {greetings.description}
                </Typography>
              </Box>
              <IntelliteclabSocialMedia />
              <Box>
                <Link
                  href="#"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  <Button
                    endIcon={<KeyboardArrowDownIcon />}
                    variant="contained"
                    sx={{
                      borderRadius: "7px",
                      mr: 3,
                      backgroundColor: "#fb8500",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#fb8500",
                      },
                    }}
                  >
                    Get start
                  </Button>
                </Link>
                <Button sx={{ color: "#37517E" }}>Contact us</Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <GreetingLottie
                  animationPath="/lottie/logo.json"
                  height={450}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </main>
  );
};
export default IntellitechlabGreeting;
