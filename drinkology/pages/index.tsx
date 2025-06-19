import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Layout from "../components/Layout/Layout";

const drinks = [
  {
    name: "Spiked Lemonade",
    ingredients: ["vodka", "lemonade"],
    calories: 80,
    imageUrl: "/cocktail-header.jpg",
    instructions:
      "Combine all ingredients (except cola) and pour over ice in a highball glass.Add the splash of cola for color.Decorate with a slice of lemon and serve",
  },
  {
    name: "Grenadine Cooler",
    ingredients: ["vodka", "Grenadine", "sprite"],
    calories: 180,
    imageUrl: "/cocktail-header.jpg",
    instructions:
      "Combine all ingredients (except cola) and pour over ice in a highball glass.Add the splash of cola for color.Decorate with a slice of lemon and serve",
  },
];

const Home = () => {
  return (
    <Layout>
      {/* new component */}
      <Typography>Current ingredients:</Typography>
      <List>
        <ListItem>Grenadine</ListItem>
        <ListItem>Vodka</ListItem>
        <ListItem>Lemonade</ListItem>
      </List>

      {/* new component */}
      <Typography>Cocktail Concoctions </Typography>
      <Grid container size={4} spacing={2}>
        {drinks.map((drink, index) => (
          <Grid key={index} size={4}>
            <Card>
              <CardHeader title={drink.name} subheader={drink.calories} />
              <CardMedia
                component="img"
                height="194"
                width={150}
                image={drink.imageUrl}
                alt="drink_img"
              />

              <CardContent>
                <Typography sx={{ marginBottom: 2 }}>Instructions:</Typography>
                <Typography sx={{ marginBottom: 2 }}>
                  {drink.instructions}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Home;
