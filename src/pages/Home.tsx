import React from "react";
import { motion } from "framer-motion";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ufnLogo from "../assets/ufn.png"; // Import the image
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
} from "@mui/material";
import { CheckCircleOutline, ExpandCircleDown } from "@mui/icons-material";
import { Link } from "react-router-dom";
import SocialFeed from "../components/SocialFeed.tsx";

const Home = () => {
  const testimonials = [
    {
      name: "María González",
      text: "Mi experiencia en UFN ha sido transformadora. Los profesores son excelentes y el ambiente de aprendizaje es inmejorable.",
    },
    {
      name: "Carlos Rodríguez",
      text: "Gracias a UFN, he podido desarrollar mis habilidades y conseguir el trabajo de mis sueños.",
    },
    {
      name: "Ana Martínez",
      text: "La calidad de la educación en UFN es excepcional. Me siento preparada para enfrentar cualquier desafío profesional.",
    },
  ];

  const faqs = [
    {
      question: "¿Cuáles son los requisitos de admisión?",
      answer:
        "Los requisitos varían según el programa. Los documentos que se requieren son Acta de nacimiento, Certificado de preparatoria legalizado, CURP, 6 fotografías b y negro tamaño infantil. documentos en original y copia.",
    },
    {
      question: "¿Cuanto tardaria en titularme la carrera?",
      answer: "Alrededor de 3 años y 4 meses. (incluye curso de titulación)",
    },
    {
      question: "¿Cuándo es el próximo inicio de clases?",
      answer:
        "Acabamos de iniciar, aún se puede inscribir para este cuatrimestre.  Esta carrera si está disponible para iniciar de inmediato",
    },
    {
      question: "¿Es acreditada la carrera?",
      answer: "Si, acreditación oficial de la SEP.",
    },
  ];

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          my: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            component="img"
            sx={{ maxWidth: "200px", width: "100%", mb: 4 }}
            src={ufnLogo}
            alt="Universidad Frontera Norte logo"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography
            variant="h1"
            gutterBottom
            align="center"
            sx={{ mb: 3, color: "primary.main" }}
          >
            Centro de Estudios Superiores Frontera Norte
          </Typography>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Typography variant="h2" gutterBottom align="center" sx={{ mb: 3 }}>
            Descubre oportunidades de clase mundial
          </Typography>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 4, maxWidth: "600px" }}
          >
            En Universidad Frontera Norte, nos comprometemos con la excelencia
            en educación, investigación y compromiso comunitario. Nuestros
            programas y profesores preparan a los estudiantes para el éxito en
            un mundo en constante evolución.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4 }}
          >
            <Button variant="contained" color="primary" href="/degrees">
              Explorar Programas
            </Button>
            <Button variant="outlined" color="primary" href="/contact">
              Contáctanos
            </Button>
          </Box>
        </motion.div>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box sx={{ my: 6 }}>
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          sx={{ mb: 3, color: "secondary.main" }}
        >
          ¿Por qué elegir Universidad Frontera Norte?
        </Typography>
        <List sx={{ width: "100%", maxWidth: 360, mx: "auto" }}>
          {[
            "Conviértete en un líder en tu campo profesional.",
            "Adquiere conocimientos profesionales relevantes y actualizados.",
            "Forma parte de una comunidad de profesionales dedicados.",
          ].map((text, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
            >
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <CheckCircleOutlineIcon sx={{ color: "primary.main" }} />
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{ "& .MuiListItemText-primary": { fontWeight: 500 } }}
                />
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box sx={{ my: 6 }}>
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          sx={{ mb: 4, color: "secondary.main" }}
        >
          Testimonios de Estudiantes
        </Typography>
        <Grid container spacing={3}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card sx={{ height: "100%", bgcolor: "background.paper" }}>
                  <CardContent>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      "{testimonial.text}"
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      - {testimonial.name}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box sx={{ my: 6 }}>
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          sx={{ mb: 4, color: "secondary.main" }}
        >
          Preguntas Frecuentes
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandCircleDown sx={{ color: "primary.main" }} />}
            >
              <Typography variant="h6" sx={{ color: "primary.main" }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Divider sx={{ my: 6 }} />

      <SocialFeed />
    </Container>
  );
};

export default Home;
