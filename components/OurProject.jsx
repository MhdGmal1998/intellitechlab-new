import { CardMedia, Typography } from "@mui/material";
import { Fade } from "react-reveal";
import { Col, Container, Row } from "reactstrap";
const OurProject = () => {
  const prjects = [
    {
      name: "",
      alt: "",
      src: "/projects/global-goods.jpg",
    },
    {
      name: "",
      alt: "",
      src: "/projects/medical.jpg",
    },
    {
      name: "",
      alt: "",
      src: "/projects/secure.png",
    },
    {
      name: "",
      alt: "",
      src: "/projects/rom.jpg",
    },
    {
      name: "",
      alt: "",
      src: "/projects/scent.png",
    },
    {
      name: "",
      alt: "",
      src: "/projects/masr.jpg",
    },
  ];
  return (
    <>
      <Container>
        <div className="section-title">
          <h2> Our Clients</h2>
        </div>
        <Row>
          {prjects?.map((item, index) => (
            <Col key={index} md="4" xs="12">
              <Fade left duration={2000} delay={300}>
                <CardMedia
                  component="img"
                  src={item?.src}
                  sx={{
                    width: "100%",
                    height: "200px",
                    my: 2,
                    cursor: "pointer",
                  }}
                />
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default OurProject;
