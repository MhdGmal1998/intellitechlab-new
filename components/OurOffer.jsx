import { Box, Typography } from "@mui/material";
import { Offer } from "../portfolio";
import { Col, Container, Row } from "reactstrap";
import DisplayLottie from "./DisplayLottie";
import { PRIMARY_COLOR } from "../constant/colors";
import { Fade } from "react-reveal";
export const OurOffer = () => {
  return (
    <>
      <Container>
        <Box>
          <Typography sx={{ fontSize: 33, color: "black" }}>
            {Offer.title}
          </Typography>
          <Typography sx={{ color: "#808080" }}>{Offer.subTitle}</Typography>
        </Box>

        <Row>
          {Offer?.data?.map((item, index) => (
            <Col key={index} lg="4" xs="12">
              <Fade left duration={2000}>
                <Box sx={{ mt: 3 }}>
                  <DisplayLottie
                    height={300}
                    width={250}
                    animationPath={item.lottieAnimationFile}
                  />
                  <Typography sx={{ color: PRIMARY_COLOR }}>
                    {item?.title}
                  </Typography>
                  <Typography sx={{ color: "#808080", lineHeight: 2 }}>
                    {item?.description}
                  </Typography>
                </Box>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
