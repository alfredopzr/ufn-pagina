import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Snackbar,
  Alert,
  Grid,
} from "@mui/material";

interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  interestedProgram: string;
}

const initialFormData: RegistrationData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  gender: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  interestedProgram: "",
};

const Registration = () => {
  const [formData, setFormData] = useState<RegistrationData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a server
    // For now, we'll just log it and show a success message
    setIsSubmitted(true);
    // Reset form after submission
    setFormData(initialFormData);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          align="center"
          sx={{ color: "primary.main", mb: 4 }}
        >
          Registro de Estudiante Prospectivo
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nombre"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Apellido"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Correo Electrónico"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Teléfono"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Fecha de Nacimiento"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel id="gender-label">Género</InputLabel>
                <Select
                  labelId="gender-label"
                  name="gender"
                  value={formData.gender}
                  onChange={handleSelectChange}
                  label="Género"
                >
                  <MenuItem value="male">Masculino</MenuItem>
                  <MenuItem value="female">Femenino</MenuItem>
                  <MenuItem value="other">Otro</MenuItem>
                  <MenuItem value="prefer-not-to-say">
                    Prefiero no decir
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Dirección"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Ciudad"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Estado"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Código Postal"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel id="program-label">Programa de Interés</InputLabel>
                <Select
                  labelId="program-label"
                  name="interestedProgram"
                  value={formData.interestedProgram}
                  onChange={handleSelectChange}
                  label="Programa de Interés"
                >
                  <MenuItem value="administracion">
                    Licenciatura en Administración de Empresas
                  </MenuItem>
                  <MenuItem value="sistemas">
                    Ingeniería en Sistemas Computacionales
                  </MenuItem>
                  <MenuItem value="psicologia">
                    Licenciatura en Psicología
                  </MenuItem>
                  <MenuItem value="comercio">
                    Licenciatura en Comercio Internacional
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
              >
                Enviar Registro
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Snackbar
        open={isSubmitted}
        autoHideDuration={6000}
        onClose={() => setIsSubmitted(false)}
      >
        <Alert
          onClose={() => setIsSubmitted(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          ¡Registro enviado con éxito!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Registration;
