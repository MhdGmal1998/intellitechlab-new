import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { Offer, OurSkills } from "../portfolio";
import { Col, Row } from "reactstrap";
import { PRIMARY_COLOR } from "../constant/colors";
import { Fade } from "react-reveal";

export const OurSkill = () => {
  return (
    <>
      <Container fixed>
        <Box mb={6}>
          <Typography
            sx={{ fontSize: 33, color: PRIMARY_COLOR, fontFamily: "Open sans" }}
          >
            {OurSkills.title}
          </Typography>
        </Box>

        <Row>
          {OurSkills?.data?.map((item, index) => (
            <Col key={index} lg="4" xs="12">
              <Fade left duration={2000}>
                <Card sx={{ boxShadow: "none", borderRadius: 3, my: 3 }}>
                  <CardContent sx={{ p: 5, boxShadow: "none" }}>
                    <Box>
                      <Typography sx={{ color: PRIMARY_COLOR }}>
                        {item?.title}
                      </Typography>
                      <Typography sx={{ color: "#808080", lineHeight: 2 }}>
                        {item?.description}
                      </Typography>

                      <Button
                        variant="contained"
                        sx={{
                          my: 3,
                          borderRadius: 12,
                          backgroundColor: PRIMARY_COLOR,
                          "&:hover": {
                            backgroundColor: PRIMARY_COLOR,
                          },
                        }}
                      >
                        View Projects
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
