import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  CircularProgress,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

interface SocialPost {
  id: string;
  platform: "facebook" | "instagram";
  content: string;
  imageUrl?: string;
  link: string;
  date: string;
}

// This function simulates fetching posts from an API
const fetchSocialPosts = (): Promise<SocialPost[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          platform: "facebook",
          content:
            "¡Bienvenidos al nuevo semestre en Universidad Frontera Norte! Estamos emocionados de comenzar este viaje educativo con todos ustedes.",
          imageUrl:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
          link: "https://facebook.com/post1",
          date: "2023-08-15",
        },
        {
          id: "2",
          platform: "instagram",
          content:
            "Nuestros estudiantes de Ingeniería presentaron proyectos innovadores en la feria de ciencias anual. ¡Felicidades a todos los participantes!",
          imageUrl:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
          link: "https://instagram.com/p/post2",
          date: "2023-08-10",
        },
        {
          id: "3",
          platform: "facebook",
          content:
            "¡Feliz día de la madre! Agradecemos a todas las madres por su amor y dedicación. ¡Gracias por todo lo que hacen por nosotros!",
          imageUrl:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
          link: "https://facebook.com/post3",
          date: "2023-05-10",
        },
        // Add more mock posts as needed
      ]);
    }, 1000); // Simulate network delay
  });
};

const SocialFeed: React.FC = () => {
  const [posts, setPosts] = useState<SocialPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSocialPosts().then((fetchedPosts) => {
      setPosts(fetchedPosts);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Container sx={{ display: "flex", justifyContent: "center", my: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        align="center"
        sx={{ mb: 4 }}
      >
        Noticias y Eventos Recientes
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              {post.imageUrl && (
                <CardMedia
                  component="img"
                  height="140"
                  image={post.imageUrl}
                  alt="Post image"
                />
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {post.platform === "facebook" ? (
                    <FacebookIcon color="primary" />
                  ) : (
                    <InstagramIcon color="secondary" />
                  )}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.content}
                </Typography>
                <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                  {new Date(post.date).toLocaleDateString()}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Post
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SocialFeed;
