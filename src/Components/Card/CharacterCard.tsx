import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Character } from "../../types";
interface props {
  element: Character;
}
const CharacterRikAndMortiCard = ({ element }: props) => {
  const { created, episode, gender, image, name, species, status, url } =
    element;

  return (
    <Card sx={{ width: 345, margin: "10px 0" }}>
      <CardMedia sx={{ height: 240 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gender : {gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Url : {url}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status : {status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Species : {species}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Episode : {episode}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Created Date : {created}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CharacterRikAndMortiCard;
