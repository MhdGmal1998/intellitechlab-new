import React, { useEffect } from "react";
import { greetings } from "../portfolio";

import { Button, Container, Row, Col } from "reactstrap";

import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";
import { Box } from "@mui/material";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../constant/colors";

const Greetings = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  });
  return (
    <main>
      <div className="position-relative">
        <section
          className="section section-lg section-shaped pb-150"
          style={
            {
              // backgroundImage: "url(/logo/7.png)",
              // backgroundRepeat: "no-repeat",
              // backgroundSize: "100%",
              // backgroundPosition: "center",
            }
          }
        >
          <Container>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "50px",
              }}
            >
              <Box>
                <GreetingLottie
                  animationPath="/lottie/logo.json"
                  height={250}
                  // width={600}
                />
              </Box>
              <Box
                sx={{
                  display: { md: "flex", xs: "none" },
                }}
              >
                <GreetingLottie
                  animationPath="/lottie/code.json"
                  height={250}
                  // width={600}
                />
              </Box>
              <Box
                sx={{
                  display: { md: "flex", xs: "none" },
                }}
              >
                <GreetingLottie
                  animationPath="/lottie/build.json"
                  height={250}
                  // width={600}
                />
              </Box>
            </div>
          </Container>
          <Container>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <h1 style={{ color: "black" }}>Just What You Need</h1>
              <h4 style={{ textAlign: "center", color: PRIMARY_COLOR }}>
                {greetings.title + " "}
              </h4>
              <p
                style={{
                  textAlign: "center",
                  width: "400px",
                }}
              >
                {greetings.description}
              </p>
              <SocialLinks />
            </div>
          </Container>
          <Container className="py-lg-md d-flex">
            <div className="col px-0">
              <Row>
                <Col lg="12">
                  <div
                    style={{
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    {/* <div className="btn-wrapper my-4">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                        color="#F1556b"
                      >
                        <span className="btn-inner--text">Learn More</span>
                      </Button>
                    </div> */}
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </div>
    </main>
  );
};

export default Greetings;
