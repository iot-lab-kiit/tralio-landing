import Logo from "./logo.svg";

import {
  Box,
  Container,
  Grid,

} from "@mui/material";

const Footer = () => {

  return (
    <Box
      sx={{
        background:
          "linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%)",
      }}
      color={"#FFF"}
      p={{ lg: 6, md: 5, sm: 4, xs: 1 }}
      >
      <Container maxWidth={"lg"}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Box
              mt={{ lg: 5, md: 3, sm: 2, xs: 2 }}
              textAlign={{
                xs: "center",
              }}>
              <Box
                noLinkStyle
                href="/"
                width={"120px"}
                height={"41px"}>
                <img src={Logo} alt={"logo"} />
              </Box>
              <Box pr={{ lg: 6, md: 5, sm: 0, xs: 0 }} mt={1}>
                Tralio provides progressive, and affordable,
                accessible on mobile and online for everyone
              </Box>

                <Box mt={3}>
                  Coded with ❤️ and ☕ by IoT LAB, KIIT
                </Box>

            </Box>
          </Grid>

        </Grid>

      </Container>
    </Box>
  );
};

export default Footer;
