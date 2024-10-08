import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Contáctanos
        </Typography>
        <Typography variant="body1" gutterBottom>
          Ponte en contacto con Universidad Frontera Norte
        </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
          <TextField
            fullWidth
            margin="normal"
            label="Nombre"
            variant="outlined"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Correo electrónico"
            variant="outlined"
            type="email"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Mensaje"
            variant="outlined"
            multiline
            rows={4}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Enviar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
