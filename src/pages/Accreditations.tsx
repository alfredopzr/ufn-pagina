import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import DownloadIcon from "@mui/icons-material/Download";
import SchoolIcon from "@mui/icons-material/School";

const Accreditations = () => {
  // Replace this with the actual path to your PDF document
  const reglamentoUrl = "/path-to-your-document/reglamento-general-CESFN.pdf";

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 6 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          align="center"
          sx={{ color: "primary.main", mb: 4 }}
        >
          Acreditaciones
        </Typography>

        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "secondary.main" }}
          >
            Centro de Estudios Superiores Frontera Norte
          </Typography>
          <Typography variant="body1" paragraph>
            El Centro de Estudios Superiores Frontera Norte está orgulloso de
            contar con las acreditaciones necesarias para ofrecer educación
            superior de calidad. Nuestras acreditaciones son un testimonio de
            nuestro compromiso con la excelencia académica y la formación
            integral de nuestros estudiantes.
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <VerifiedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Acreditado por la Secretaría de Educación Pública (SEP)" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <SchoolIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Reconocimiento de Validez Oficial de Estudios (RVOE)" />
            </ListItem>
            {/* Add more accreditations as needed */}
          </List>
        </Paper>

        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "secondary.main" }}
          >
            Reglamento General
          </Typography>
          <Typography variant="body1" paragraph>
            El Reglamento General del Centro de Estudios Superiores Frontera
            Norte establece las normas y procedimientos que rigen nuestra
            institución. Este documento es esencial para comprender nuestros
            estándares académicos, políticas institucionales y compromisos con
            la comunidad educativa.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<DownloadIcon />}
            href={reglamentoUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mt: 2 }}
          >
            Descargar Reglamento General
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default Accreditations;
