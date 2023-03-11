import { CardMedia, Typography } from "@mui/material";
import { Col, Container, Row } from "reactstrap";

export const OurProject = () => {
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
        <h1>Our projects</h1>
        <Row>
          {prjects?.map((item, index) => (
            <Col key={index} md="4" xs="12">
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
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
