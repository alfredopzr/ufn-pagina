import React from "react";
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DownloadIcon from "@mui/icons-material/Download";
import { Link } from "react-router-dom";
import { CheckCircleOutline } from "@mui/icons-material";

interface DegreeProgram {
  title: string;
  description: string;
  workField: string;
  entryProfile: string;
  graduateProfile: string;
  objectives: string;
  curriculum: {
    term: string;
    courses: string[];
  }[];
  pdfLink: string;
}

// const degreePrograms: DegreeProgram[] = [
//   {
//     title: "Licenciatura en Administración de Empresas",
//     description:
//       "Estudia la Licenciatura en Administración de Empresas en el Centro de Estudios Frontera Norte, campus Reynosa.",
//     workField:
//       "Un Licenciado en Administración de Empresas, podrá desarrollarse en empresas o instituciones públicas o privadas, tanto a nivel nacional como internacional, en donde el desarrollo y la innovación administrativa sean estratégicos para el desarrollo de las mismas. El campo de trabajo está en empresas en general.",
//     entryProfile:
//       "El aspirante deberá tener interés por los temas de negocios, gusto por las aéreas que integran las empresas. Trabajo en equipo, habilidad verbal y escrita, capacidad analítica y proactiva, comprender la importancia de la administración en los negocios para los inversionistas, los individuos y la sociedad, Interés por el área administrativa, compromiso, proactivo en el trabajo en equipo, innovador y eficiente.",
//     graduateProfile:
//       "Profesionistas dedicados y capaces de dominar las herramientas para realizar análisis situacional del entorno en los aspectos de la micro, pequeña y mediana empresa, para generar y operar sus propios planes de negocio. Resolver los objetivos y las necesidades económicas de una organización.",
//     objectives:
//       "Formar integralmente profesionales con los conocimientos conceptuales administrativos, técnicos y prácticos para crear, organizar, administrar y dirigir en forma exitosa empresas y organizaciones de cualquier índole, a nivel nacional e internacional, con un enfoque global, multidisciplinarias y modernas que le permita el manejo eficiente, óptimo y oportuno de los recursos humanos, materiales y financieros. Preparar profesionistas capaces de formular estrategias de posicionamiento en las empresas que representen, para lograr una ventaja competitiva con un alto desempeño ético en el ejercicio profesional.",
//     curriculum: [
//       {
//         term: "PRIMER CUATRIMESTRE",
//         courses: [
//           "Matematicas Financieras I",
//           "Administración I",
//           "Contabilidad I",
//           "Informatica I",
//           "Introducción al Derecho",
//           "Organización Social",
//           "Metodología de la Investigación",
//         ],
//       },
//       {
//         term: "SEGUNDO CUATRIMESTRE",
//         courses: [
//           "Matemáticas Financieras II",
//           "Administración II",
//           "Contabilidad II",
//           "Informática II",
//           "Derecho Civil",
//           "Microeconomía",
//           "Estadística",
//         ],
//       },
//       // ... Add the rest of the terms here
//     ],
//     pdfLink: "/path-to-pdf/administracion-empresas.pdf",
//   },
//   // ... Add more degree programs here
// ];

const degreePrograms: DegreeProgram[] = [
  {
    title: "Licenciatura en Administración de Empresas",
    description:
      "Estudia la Licenciatura en Administración de Empresas en el Centro de Estudios Frontera Norte, campus Reynosa.",
    workField:
      "Un Licenciado en Administración de Empresas, podrá desarrollarse en empresas o instituciones públicas o privadas, tanto a nivel nacional como internacional, en donde el desarrollo y la innovación administrativa sean estratégicos para el desarrollo de las mismas. El campo de trabajo está en empresas en general.",
    entryProfile:
      "El aspirante deberá tener interés por los temas de negocios, gusto por las aéreas que integran las empresas. Trabajo en equipo, habilidad verbal y escrita, capacidad analítica y proactiva, comprender la importancia de la administración en los negocios para los inversionistas, los individuos y la sociedad, Interés por el área administrativa, compromiso, proactivo en el trabajo en equipo, innovador y eficiente.",
    graduateProfile:
      "Profesionistas dedicados y capaces de dominar las herramientas para realizar análisis situacional del entorno en los aspectos de la micro, pequeña y mediana empresa, para generar y operar sus propios planes de negocio. Resolver los objetivos y las necesidades económicas de una organización.",
    objectives:
      "Formar integralmente profesionales con los conocimientos conceptuales administrativos, técnicos y prácticos para crear, organizar, administrar y dirigir en forma exitosa empresas y organizaciones de cualquier índole, a nivel nacional e internacional, con un enfoque global, multidisciplinarias y modernas que le permita el manejo eficiente, óptimo y oportuno de los recursos humanos, materiales y financieros. Preparar profesionistas capaces de formular estrategias de posicionamiento en las empresas que representen, para lograr una ventaja competitiva con un alto desempeño ético en el ejercicio profesional.",
    curriculum: [
      {
        term: "PRIMER CUATRIMESTRE",
        courses: [
          "Matematicas Financieras I",
          "Administración I",
          "Contabilidad I",
          "Informatica I",
          "Introducción al Derecho",
          "Organización Social",
          "Metodología de la Investigación",
        ],
      },
      {
        term: "SEGUNDO CUATRIMESTRE",
        courses: [
          "Matemáticas Financieras II",
          "Administración II",
          "Contabilidad II",
          "Informática II",
          "Derecho Civil",
          "Microeconomía",
          "Estadística",
        ],
      },
      {
        term: "TERCER CUATRIMESTRE",
        courses: [
          "Gestión de Empresas",
          "Administración III",
          "Contabilidad III",
          "Informática III",
          "Derecho Mercantil",
          "Macroeconomía",
        ],
      },
      {
        term: "CUARTO CUATRIMESTRE",
        courses: [
          "Humanística I",
          "Administración IV",
          "Contabilidad IV",
          "Informática IV",
          "Francés I",
        ],
      },
      {
        term: "QUINTO CUATRIMESTRE",
        courses: [
          "Humanística II",
          "Administración V",
          "Costos",
          "Informática V",
          "Francés II",
          "Administración del Personal I",
          "Derecho Laboral",
        ],
      },
      {
        term: "SEXTO CUATRIMESTRE",
        courses: [
          "Finanzas",
          "Administración VI",
          "Administración Financiera",
          "Expresión Oral y Escrita",
          "Francés III",
          "Administración de Personal II",
        ],
      },
      {
        term: "SÉPTIMO CUATRIMESTRE",
        courses: [
          "Análisis Financiero",
          "Desarrollo Organizacional",
          "Administración del Capital del Trabajo",
          "Administración por Objetivos",
          "Impuestos",
          "Inglés I",
        ],
      },
      {
        term: "OCTAVO CUATRIMESTRE",
        courses: [
          "Evaluación de Proyectos de Inversión",
          "Administración de la Producción I",
          "Presupuestos",
          "Administración de PYMES",
          "Contabilidad Fiscal",
          "Inglés II",
        ],
      },
      {
        term: "NOVENO CUATRIMESTRE",
        courses: [
          "Desarrollo Profesional",
          "Administración de la Producción II",
          "Temas Selectos de Administración",
          "Administración Estratégica",
          "Inglés III",
        ],
      },
    ],
    pdfLink: "/path-to-pdf/administracion-empresas.pdf",
  },
  {
    title: "Ingeniería en Sistemas Computacionales",
    description:
      "Forma parte de la revolución tecnológica con la Ingeniería en Sistemas Computacionales en el Centro de Estudios Frontera Norte.",
    workField:
      "Los egresados podrán desempeñarse en empresas de desarrollo de software, departamentos de TI en organizaciones de diversos sectores, startups tecnológicas, o como consultores independientes en el campo de la informática.",
    entryProfile:
      "Se buscan aspirantes con interés en la tecnología y la programación, habilidades lógico-matemáticas, capacidad de resolución de problemas, creatividad y disposición para el aprendizaje continuo.",
    graduateProfile:
      "Profesionales capaces de diseñar, implementar y mantener sistemas de software complejos, con conocimientos en inteligencia artificial, seguridad informática y desarrollo web y móvil.",
    objectives:
      "Formar ingenieros con sólidos conocimientos en ciencias de la computación, capaces de innovar y liderar proyectos tecnológicos, con una comprensión profunda de las necesidades empresariales y sociales en el contexto de la transformación digital.",
    curriculum: [
      {
        term: "PRIMER CUATRIMESTRE",
        courses: [
          "Estática",
          "Álgebra I",
          "Química",
          "Fundamentos de Electrónica",
          "Introducción a la Programación",
          "Introducción a la Contabilidad",
          "Metodología de la Investigación",
        ],
      },
      {
        term: "SEGUNDO CUATRIMESTRE",
        courses: [
          "Dinámica",
          "Álgebra II",
          "Cálculo Diferencial",
          "Diseño de Algoritmos",
          "Formación del Pensamiento",
          "Matemáticas Discretas",
        ],
      },
      {
        term: "TERCER CUATRIMESTRE",
        courses: [
          "Electricidad y Magnetismo",
          "Estadística I",
          "Cálculo Integral",
          "Estructura de Datos",
          "Computación I",
          "Arquitectura de Computadoras",
          "Psicología Industrial",
        ],
      },
      {
        term: "CUARTO CUATRIMESTRE",
        courses: [
          "Estadística II",
          "Ecuaciones Diferenciales",
          "Teoría de Sistemas",
          "Computación II",
          "Programación I",
          "Introducción a la Base de Datos",
        ],
      },
      {
        term: "QUINTO CUATRIMESTRE",
        courses: [
          "Relaciones Industriales",
          "Transformadas de Laplace",
          "Desarrollo de Aplicaciones I",
          "Programación II",
          "Ética",
          "Base de Datos",
        ],
      },
      {
        term: "SEXTO CUATRIMESTRE",
        courses: [
          "Software de Sistemas",
          "Redes I",
          "Contabilidad de Costos",
          "Desarrollo de Aplicaciones II",
          "Expresión Oral y Escrita",
        ],
      },
      {
        term: "SÉPTIMO CUATRIMESTRE",
        courses: [
          "Diseño Asistido por Computadora",
          "Inglés I",
          "Desarrollo Organizacional",
          "Administración por Objetivos",
          "Sistemas Operativos",
          "Diseño de Interfaces",
        ],
      },
      {
        term: "OCTAVO CUATRIMESTRE",
        courses: [
          "Evaluación de Proyectos de Inversión",
          "Telecomunicaciones",
          "Inteligencia Artificial",
          "Desarrollo de Aplicaciones III",
          "Redes II",
          "Inglés II",
        ],
      },
      {
        term: "NOVENO CUATRIMESTRE",
        courses: [
          "Desarrollo Profesional",
          "Compiladores",
          "Seguridad en los Sistemas Computacionales",
          "Desarrollo de Aplicaciones IV",
          "Inglés III",
        ],
      },
    ],
    pdfLink: "/path-to-pdf/ingenieria-sistemas.pdf",
  },
  {
    title: "Ingeniería Industrial Administrativa",
    description:
      "Forma parte de la revolución tecnológica con la Ingeniería en Sistemas Computacionales en el Centro de Estudios Frontera Norte.",
    workField:
      "Los egresados podrán desempeñarse en empresas de desarrollo de software, departamentos de TI en organizaciones de diversos sectores, startups tecnológicas, o como consultores independientes en el campo de la informática.",
    entryProfile:
      "Se buscan aspirantes con interés en la tecnología y la programación, habilidades lógico-matemáticas, capacidad de resolución de problemas, creatividad y disposición para el aprendizaje continuo.",
    graduateProfile:
      "Profesionales capaces de diseñar, implementar y mantener sistemas de software complejos, con conocimientos en inteligencia artificial, seguridad informática y desarrollo web y móvil.",
    objectives:
      "Formar ingenieros con sólidos conocimientos en ciencias de la computación, capaces de innovar y liderar proyectos tecnológicos, con una comprensión profunda de las necesidades empresariales y sociales en el contexto de la transformación digital.",
    curriculum: [
      {
        term: "PRIMER CUATRIMESTRE",
        courses: [
          "Estática",
          "Álgebra I",
          "Química",
          "Fundamentos de Electrónica",
          "Introducción a la Programación",
          "Introducción a la Contabilidad",
          "Metodología de la Investigación",
        ],
      },
      {
        term: "SEGUNDO CUATRIMESTRE",
        courses: [
          "Dinámica",
          "Álgebra II",
          "Cálculo Diferencial",
          "Fundamentos de Manufactura",
          "Formación del Pensamiento",
          "Introducción a la Administración",
        ],
      },
      {
        term: "TERCER CUATRIMESTRE",
        courses: [
          "Electricidad y Magnetismo",
          "Estadística I",
          "Cálculo Integral",
          "Tecnología de los Materiales",
          "Computación I",
          "Introducción a la Calidad",
          "Psicología Industrial",
        ],
      },
      {
        term: "CUARTO CUATRIMESTRE",
        courses: [
          "Sistemas de Medición",
          "Estadística II",
          "Ecuaciones Diferenciales",
          "Teoría de Sistemas",
          "Computación II",
          "Control de Calidad",
        ],
      },
      {
        term: "QUINTO CUATRIMESTRE",
        courses: [
          "Instrumentación Industrial",
          "Relaciones Industriales",
          "Transformadas de la Place",
          "Planeación de la Producción",
          "Sistemas de Producción",
          "Administración de la Cadena de Suministros",
          "Administración del Personal I",
        ],
      },
      {
        term: "SEXTO CUATRIMESTRE",
        courses: [
          "Ingeniería de Métodos",
          "Estructura de los Materiales",
          "Administración Financiera",
          "Control de la Producción",
          "Contabilidad de Costos",
          "Expresión Oral y Escrita",
          "Administración del Personal II",
        ],
      },
      {
        term: "SÉPTIMO CUATRIMESTRE",
        courses: [
          "Electrónica Industrial",
          "Investigación de Operaciones I",
          "Análisis y Diseño de Planta",
          "Seguridad e Higiene Industrial",
          "Diseño Asistido por Computadora",
          "Inglés I",
          "Administración del Capital de Trabajo",
        ],
      },
      {
        term: "OCTAVO CUATRIMESTRE",
        courses: [
          "Evaluación de Proyectos de Inversión",
          "Investigación de Operaciones II",
          "Instalaciones Industriales",
          "Legislación Industrial",
          "Procesos de Manufactura",
          "Inglés II",
          "Administración de la Producción I",
        ],
      },
      {
        term: "NOVENO CUATRIMESTRE",
        courses: [
          "Desarrollo Profesional",
          "Ingeniería Económica",
          "Ergonomía Industrial",
          "Logística Industrial",
          "Inglés III",
          "Administración de la Producción II",
        ],
      },
    ],
    pdfLink: "/path-to-pdf/ingenieria-sistemas.pdf",
  },
  {
    title: "Ingeniería en Electronica Industrial",
    description:
      "Forma parte de la revolución tecnológica con la Ingeniería en Sistemas Computacionales en el Centro de Estudios Frontera Norte.",
    workField:
      "Los egresados podrán desempeñarse en empresas de desarrollo de software, departamentos de TI en organizaciones de diversos sectores, startups tecnológicas, o como consultores independientes en el campo de la informática.",
    entryProfile:
      "Se buscan aspirantes con interés en la tecnología y la programación, habilidades lógico-matemáticas, capacidad de resolución de problemas, creatividad y disposición para el aprendizaje continuo.",
    graduateProfile:
      "Profesionales capaces de diseñar, implementar y mantener sistemas de software complejos, con conocimientos en inteligencia artificial, seguridad informática y desarrollo web y móvil.",
    objectives:
      "Formar ingenieros con sólidos conocimientos en ciencias de la computación, capaces de innovar y liderar proyectos tecnológicos, con una comprensión profunda de las necesidades empresariales y sociales en el contexto de la transformación digital.",
    curriculum: [
      {
        term: "PRIMER CUATRIMESTRE",
        courses: [
          "Estática",
          "Álgebra I",
          "Química",
          "Fundamentos de la Electrónica",
          "Introducción a la Programación",
          "Introducción a la Contabilidad",
          "Metodología de la Investigación",
        ],
      },
      {
        term: "SEGUNDO CUATRIMESTRE",
        courses: [
          "Dinámica",
          "Álgebra II",
          "Cálculo Diferencial",
          "Matemáticas Discretas",
          "Electrónica I",
          "Formación del Pensamiento",
        ],
      },
      {
        term: "TERCER CUATRIMESTRE",
        courses: [
          "Electricidad y Magnetismo",
          "Cálculo Integral",
          "Probabilidad y Estadística I",
          "Análisis Vectorial",
          "Electrónica II",
          "Computación I",
          "Psicología Industrial",
        ],
      },
      {
        term: "CUARTO CUATRIMESTRE",
        courses: [
          "Ecuaciones Diferenciales",
          "Teoría Electromagnética",
          "Introducción a la Electrónica Lógica",
          "Computación II",
          "Probabilidad y Estadística II",
          "Teoría de Sistemas",
        ],
      },
      {
        term: "QUINTO CUATRIMESTRE",
        courses: [
          "Transformadas de Laplace",
          "Circuitos Eléctricos I",
          "Electrónica Lógica I",
          "Sistemas de Producción",
          "Relaciones Industriales",
          "Ética",
        ],
      },
      {
        term: "SEXTO CUATRIMESTRE",
        courses: [
          "Circuitos Eléctricos II",
          "Introducción a la Transmisión de Datos",
          "Ingeniería Térmica",
          "Electrónica Lógica II",
          "Contabilidad de Costos",
          "Expresión Oral y Escrita",
        ],
      },
      {
        term: "SÉPTIMO CUATRIMESTRE",
        courses: [
          "Teoría de Comunicaciones",
          "Transmisión de Datos",
          "Sistemas Telefónicos",
          "Electrónica para Comunicaciones",
          "Diseño Asistido por Computadora",
          "Inglés I",
        ],
      },
      {
        term: "OCTAVO CUATRIMESTRE",
        courses: [
          "Electrónica de Potencia I",
          "Electrónica Industrial I",
          "Sistemas de Microondas I",
          "Instrumentación",
          "Inglés II",
          "Evaluación de Proyectos de Inversión",
        ],
      },
      {
        term: "NOVENO CUATRIMESTRE",
        courses: [
          "Electrónica de Potencia II",
          "Electrónica Industrial II",
          "Sistemas de Microondas II",
          "Inglés III",
          "Desarrollo Profesional",
        ],
      },
    ],
    pdfLink: "/path-to-pdf/ingenieria-sistemas.pdf",
  },
  {
    title: "Licenciatura en Logistica",
    description:
      "Desarrolla tu pasión por entender la mente humana con la Licenciatura en Psicología del Centro de Estudios Frontera Norte.",
    workField:
      "Los psicólogos pueden trabajar en clínicas, hospitales, escuelas, empresas, centros de investigación, o establecer su propia práctica privada, atendiendo diversas áreas como la clínica, educativa, organizacional o social.",
    entryProfile:
      "Se buscan candidatos con interés en el comportamiento humano, empatía, habilidades de comunicación, capacidad de análisis y síntesis, y un fuerte compromiso ético.",
    graduateProfile:
      "Profesionales capaces de evaluar, diagnosticar e intervenir en procesos psicológicos individuales y grupales, con una sólida base teórica y práctica en las diferentes áreas de la psicología.",
    objectives:
      "Formar psicólogos con una visión integral del ser humano, capaces de contribuir al bienestar individual y social, con habilidades para la investigación y la aplicación de conocimientos en diversos contextos culturales y sociales.",
    curriculum: [
      {
        term: "PRIMER CUATRIMESTRE",
        courses: [
          "Matemáticas Financieras I",
          "Introducción al Derecho",
          "Comercio Exterior I",
          "Administración I",
          "Contabilidad I",
          "Organización",
          "Metodología de la Investigación",
        ],
      },
      {
        term: "SEGUNDO CUATRIMESTRE",
        courses: [
          "Matemáticas Financieras II",
          "Microeconomía",
          "Comercio Exterior II",
          "Administración II",
          "Contabilidad II",
          "Mercadotecnia I",
        ],
      },
      {
        term: "TERCER CUATRIMESTRE",
        courses: [
          "Marco Legal de la Empresa",
          "Macroeconomía",
          "Introducción a la Logística",
          "Administración III",
          "Contabilidad III",
          "Mercadotecnia II",
        ],
      },
      {
        term: "CUARTO CUATRIMESTRE",
        courses: [
          "Derecho Mercantil",
          "Técnicas de Investigación Aplicadas al Comercio",
          "Logística de Canales",
          "Administración IV",
          "Envases y Embalajes",
          "Francés I",
        ],
      },
      {
        term: "QUINTO CUATRIMESTRE",
        courses: [
          "Derecho del Comercio Exterior",
          "Estadística",
          "Logística Geográfica I",
          "Logística de Mercados I",
          "Administración de la Cadena de Suministros",
          "Francés II",
        ],
      },
      {
        term: "SEXTO CUATRIMESTRE",
        courses: [
          "Finanzas",
          "Administración Financiera",
          "Logística Geográfica II",
          "Logística de Mercados II",
          "Expresión Oral y Escrita",
          "Francés III",
        ],
      },
      {
        term: "SÉPTIMO CUATRIMESTRE",
        courses: [
          "Análisis Financiero",
          "Tráfico y Transporte I",
          "Logística Geográfica III",
          "Logística de Mercados III",
          "Almacenamiento y Centro de Distribución",
          "Impuestos",
          "Inglés I",
        ],
      },
      {
        term: "OCTAVO CUATRIMESTRE",
        courses: [
          "Ley Aduanera",
          "Tráfico y Transporte II",
          "Organismos Internacionales",
          "Mercadotecnia Internacional",
          "Evaluación de Proyectos de Inversión",
          "Análisis de Costos y Estructura de Precios",
          "Inglés II",
        ],
      },
      {
        term: "NOVENO CUATRIMESTRE",
        courses: [
          "Sistema Aduanal",
          "Contratos y Seguros",
          "Administración Estratégica",
          "Logística Inversa",
          "Tecnología, Negocios y Logística",
          "Desarrollo Profesional",
          "Inglés III",
        ],
      },
    ],
    pdfLink: "/path-to-pdf/licenciatura-psicologia.pdf",
  },
  {
    title: "Licenciatura en Comercio Internacional",
    description:
      "Prepárate para los desafíos del mercado global con la Licenciatura en Comercio Internacional del Centro de Estudios Frontera Norte.",
    workField:
      "Los egresados pueden desempeñarse en empresas multinacionales, agencias aduanales, organismos internacionales, departamentos de comercio exterior de empresas nacionales, o como consultores en comercio internacional.",
    entryProfile:
      "Se buscan aspirantes con interés en los negocios internacionales, habilidades de comunicación, dominio de idiomas, capacidad de negociación y adaptabilidad cultural.",
    graduateProfile:
      "Profesionales capaces de diseñar e implementar estrategias de comercio internacional, con conocimientos en logística, aduanas, finanzas internacionales y marketing global.",
    objectives:
      "Formar expertos en comercio internacional con una visión global de los negocios, capaces de identificar oportunidades en mercados extranjeros y gestionar operaciones comerciales internacionales de manera eficiente y ética.",
    curriculum: [
      {
        term: "PRIMER CUATRIMESTRE",
        courses: [
          "Administración I",
          "Comercio Exterior I",
          "Introducción al Derecho",
          "Matemáticas Financieras I",
          "Metodología de la Investigación",
          "Contabilidad I",
          "Organización Social",
        ],
      },
      {
        term: "SEGUNDO CUATRIMESTRE",
        courses: [
          "Administración II",
          "Contabilidad II",
          "Comercio Exterior II",
          "Mercadotecnia I",
          "Matemáticas Financieras II",
          "Microeconomía",
        ],
      },
      {
        term: "TERCER CUATRIMESTRE",
        courses: [
          "Administración III",
          "Contabilidad III",
          "Marco legal de la Empresa",
          "Gestión de Empresas",
          "Mercadotecnia II",
          "Macroeconomía",
        ],
      },
      {
        term: "CUARTO CUATRIMESTRE",
        courses: [
          "Administración IV",
          "Contabilidad IV",
          "Francés I",
          "Técnicas de Investigación Aplicadas al Comercio",
          "Derecho Mercantil",
          "Administración del Comercio",
        ],
      },
      {
        term: "QUINTO CUATRIMESTRE",
        courses: [
          "Administración de las Cadenas de Suministro",
          "Administración V",
          "Costos",
          "Derecho de Comercio Exterior",
          "Francés II",
          "Derecho Fiscal",
          "Estrategia de Mercado",
        ],
      },
      {
        term: "SEXTO CUATRIMESTRE",
        courses: [
          "Introducción a la Mercadotecnia Global",
          "Administración Financiera",
          "Administración VI",
          "Expresión Oral y Escrita",
          "Finanzas",
          "Francés III",
        ],
      },
      {
        term: "SÉPTIMO CUATRIMESTRE",
        courses: [
          "Logística I",
          "Mercado Laboral",
          "Análisis Financiero",
          "Desarrollo Organizacional",
          "Impuestos",
          "Inglés I",
          "Mercadotecnia Global",
        ],
      },
      {
        term: "OCTAVO CUATRIMESTRE",
        courses: [
          "Análisis de Costos y Estructuras de Precios",
          "Mercadotecnia Internacional",
          "Evaluación de Proyectos de Inversión",
          "Inglés II",
          "Ley Aduanera",
          "Organismos Internacionales",
          "Logística II",
        ],
      },
      {
        term: "NOVENO CUATRIMESTRE",
        courses: [
          "Relaciones Internacionales",
          "Administración Estratégica",
          "Desarrollo Profesional",
          "Inglés III",
          "Logística III",
          "Tratados y Acuerdos Comerciales Internacionales",
        ],
      },
    ],
    pdfLink: "/path-to-pdf/comercio-internacional.pdf",
  },
];

const Degrees = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 6 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          align="center"
          sx={{ color: "primary.main", mb: 4 }}
        >
          Nuestros Programas Académicos
        </Typography>
        {degreePrograms.map((program, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5" sx={{ color: "secondary.main" }}>
                {program.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="body1" paragraph>
                    {program.description}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={3} sx={{ p: 2, height: "100%" }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "primary.main" }}
                    >
                      Campo de Trabajo y Ejercicio Profesional
                    </Typography>
                    <Typography variant="body2">{program.workField}</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={3} sx={{ p: 2, height: "100%" }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "primary.main" }}
                    >
                      Perfil de Ingreso
                    </Typography>
                    <Typography variant="body2">
                      {program.entryProfile}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={3} sx={{ p: 2, height: "100%" }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "primary.main" }}
                    >
                      Perfil de Egreso
                    </Typography>
                    <Typography variant="body2">
                      {program.graduateProfile}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={3} sx={{ p: 2, height: "100%" }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "primary.main" }}
                    >
                      Objetivos del Grado de Estudios
                    </Typography>
                    <Typography variant="body2">
                      {program.objectives}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ color: "primary.main", mt: 2 }}
                  >
                    Plan de Estudios
                  </Typography>
                  {program.curriculum.map((term, termIndex) => (
                    <Accordion key={termIndex} sx={{ mb: 1 }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle1">{term.term}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List dense>
                          {term.courses.map((course, courseIndex) => (
                            <React.Fragment key={courseIndex}>
                              <ListItem>
                                <ListItemText primary={course} />
                              </ListItem>
                              {courseIndex < term.courses.length - 1 && (
                                <Divider />
                              )}
                            </React.Fragment>
                          ))}
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<DownloadIcon />}
                    href={program.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Descargar Plan de Estudios
                  </Button>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        ))}
        <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
          <Button
            component={Link}
            to="/registration"
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<CheckCircleOutline />}
            sx={{
              py: 2,
              px: 4,
              fontSize: "1.2rem",
              transition: "all 0.3s",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: 3,
              },
            }}
          >
            Registrarse como Estudiante Prospectivo
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Degrees;
