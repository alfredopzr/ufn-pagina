import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const address =
    "Calle Principal 123, Colonia Centro, Reynosa, Tamaulipas, México";
  const phone = "+52 899 123 4567";
  const email = "info@ufronteranorte.edu.mx";
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.5123454557544!2d-98.28419968497823!3d26.92292998312716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU1JzIyLjUiTiA5OMKwMTYnNTUuOSJX!5e0!3m2!1sen!2sus!4v1619794108000!5m2!1sen!2sus";

  return (
    <Box
      component="footer"
      sx={{ bgcolor: "primary.main", color: "white", py: 6 }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Universidad Frontera Norte
            </Typography>
            <Typography variant="body2">{address}</Typography>
            <Typography variant="body2">Teléfono: {phone}</Typography>
            <Typography variant="body2">Email: {email}</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Síguenos en redes sociales
            </Typography>
            <Box>
              <IconButton
                color="inherit"
                component={Link}
                href="https://www.facebook.com/UFronteraNorte"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="inherit"
                component={Link}
                href="https://www.instagram.com/UFronteraNorte"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                color="inherit"
                component={Link}
                href="https://wa.me/528991234567"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
              </IconButton>
              <IconButton
                color="inherit"
                component={Link}
                href="https://www.linkedin.com/company/ufronteranorte"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                color="inherit"
                component={Link}
                href="https://twitter.com/UFronteraNorte"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Ubicación
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: 200,
                overflow: "hidden",
                borderRadius: 1,
              }}
            >
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Universidad Frontera Norte location"
              />
            </Box>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Universidad Frontera Norte. Todos los
            derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
