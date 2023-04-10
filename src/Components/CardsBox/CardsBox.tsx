import { Box } from "@mui/material";
import { useAppSelector } from "../../Redux/hooks";
import { rootStore } from "../../Redux/store";
import { Character, Location, Episode } from "../../types";
import CharacterRikAndMortiCard from "../Card/CharacterCard";
import LocationRikAndMortiCard from "../Card/LocationCard";
import EpisodeRikAndMortiCard from "../Card/EpisodeCard";
import Loading from "../Utility/Loading";
interface props {
  selectedRole: string;
}
const CardsBox: React.FC<props> = ({ selectedRole }) => {
  const { data, loading } = useAppSelector(
    (state: rootStore) => state.rikAndMortiReducer
  );
  if (!loading) return <Loading />;
  return (
    <Box
      sx={{
        padding: "30px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        flexGap: "2",
      }}
    >
      {selectedRole === "character"
        ? data.map((element: Character, key: number = element.id) => {
            return <CharacterRikAndMortiCard key={key} element={element} />;
          })
        : selectedRole === "location"
        ? data.map((element: Location, key: number = element.id) => {
            return <LocationRikAndMortiCard key={key} element={element} />;
          })
        : selectedRole === "episode"
        ? data.map((element: Episode, key: number = element.id) => {
            return <EpisodeRikAndMortiCard key={key} element={element} />;
          })
        : ""}
    </Box>
  );
};
export default CardsBox;
