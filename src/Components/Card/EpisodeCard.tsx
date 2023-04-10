import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Episode } from "../../types";
interface props {
  element: Episode;
}
const EpisodeRikAndMortiCard = ({ element }: props) => {
  const { name, url, episode, created, air_date } = element;

  return (
    <Card sx={{ width: 345, height: 220, margin: "10px 0" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Url : {url}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Episode: {episode}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Created Date : {created}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Air Date : {air_date}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default EpisodeRikAndMortiCard;
