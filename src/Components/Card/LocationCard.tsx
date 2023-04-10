import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Location } from "../../types";
interface props {
  element: Location;
}
const LocationRikAndMortiCard = ({ element }: props) => {
  const { created, dimension, name, type, url } = element;

  return (
    <Card sx={{ width: 345, height: 230, margin: "10px 0" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Dimension : {dimension}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Created Date : {created}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Type : {type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Url : {url}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card>
  );
};
export default LocationRikAndMortiCard;
