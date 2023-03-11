import {
  WhatsApp,
  Twitter,
  LinkedIn,
  Facebook,
  GitHub,
  Link,
} from "@mui/icons-material";
import { Box, Link as LinkItem } from "@mui/material";
import { socialLinks } from "../portfolio";

const socialMedia = [
  {
    name: "whatsapp",
    icon: <WhatsApp sx={{ color: "white" }} />,
    color: "#25d366",
    href: socialLinks.whatsapp,
  },
  //   {
  //     name: "twitter",
  //     icon: <Twitter sx={{ color: "white" }} />,
  //     color: "#00acee",
  //     href: socialLinks.twitter,
  //   },
  {
    name: "linked-in",
    icon: <LinkedIn sx={{ color: "white" }} />,
    color: "#0072b1",
    href: socialLinks.linkedin,
  },
  {
    name: "facebook",
    icon: <Facebook sx={{ color: "white" }} />,
    color: "#4267B2",
    href: socialLinks.facebook,
  },
  //   {
  //     name: "github",
  //     icon: <GitHub sx={{ color: "white" }} />,
  //     color: "#171515",
  //     href: socialLinks.github,
  //   },
  {
    name: "link",
    icon: <Link sx={{ color: "black" }} />,
    color: "#e9ecef",
    href: socialLinks.url,
  },
];
export const IntelliteclabSocialMedia = () => {
  const socils = socialMedia.map((item, index) => (
    <LinkItem
      href={item.href}
      key={index}
      target="_blank"
      sx={{
        backgroundColor: item.color,
        p: 1,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {item.icon}
    </LinkItem>
  ));
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        borderLeft: "5px solid #fb8500",
        padding: "10px 20px",
      }}
    >
      {socils}
    </Box>
  );
};
