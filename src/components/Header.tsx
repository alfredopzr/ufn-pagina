import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SchoolIcon from "@mui/icons-material/School";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <SchoolIcon sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Universidad Frontera Norte
        </Typography>
        <Button color="inherit" component={RouterLink} to="/">
          Inicio
        </Button>
        <Button color="inherit" component={RouterLink} to="/degrees">
          Carreras
        </Button>
        <Button color="inherit" component={RouterLink} to="/registration">
          Inscripción
        </Button>
        <Button color="inherit" component={RouterLink} to="/accreditations">
          Acreditaciones
        </Button>
        <Button color="inherit" component={RouterLink} to="/contact">
          Contacto
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
