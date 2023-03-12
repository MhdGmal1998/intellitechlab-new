import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Col, Container, Row } from "reactstrap";
import InfoIcon from "@mui/icons-material/Info";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../constant/colors";

const OurDetails = () => {
  return (
    <Container
      style={{
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      <Row>
        <Col md="4" xs="12">
          <Card sx={{ my: 3, minHeight: 130 }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "fit-content",

                  //   py: 1,
                  gap: 2,
                  bgcolor: "background.paper",
                  color: "text.secondary",
                  "& svg": {
                    m: 1.5,
                  },
                  "& hr": {
                    mx: 0.5,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  src="/personal-information.png"
                  sx={{
                    height: 50,
                    width: 50,
                  }}
                />
                <Box>
                  <Typography sx={{ fontWeight: 700, color: "black" }}>
                    About us
                  </Typography>
                  <Typography>
                    {" Know About Intellitechlab and It's services"}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Col>
        <Col md="4" xs="12">
          <Card sx={{ my: 3 }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "fit-content",
                  //   py: 1,
                  my: 1,
                  gap: 2,
                  bgcolor: "background.paper",
                  color: "text.secondary",
                  "& svg": {
                    m: 1.5,
                  },
                  "& hr": {
                    mx: 0.5,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  src="/service.png"
                  sx={{
                    height: 50,
                    width: 50,
                  }}
                />

                <Box>
                  <Typography sx={{ fontWeight: 700, color: "black" }}>
                    Our Services
                  </Typography>
                  <Typography>{"See what we offer in more details"}</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Col>
        <Col md="4" xs="12">
          <Card sx={{ my: 3 }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "fit-content",
                  //   py: 1,
                  my: 1,
                  gap: 2,
                  bgcolor: "background.paper",
                  color: "text.secondary",
                  "& svg": {
                    m: 1.5,
                  },
                  "& hr": {
                    mx: 0.5,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  src="/idea.png"
                  sx={{
                    height: 50,
                    width: 50,
                  }}
                />
                <Box>
                  <Typography sx={{ fontWeight: 700, color: "black" }}>
                    Our Projects
                  </Typography>
                  <Typography>
                    {"View some of our works and projects"}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OurDetails;
