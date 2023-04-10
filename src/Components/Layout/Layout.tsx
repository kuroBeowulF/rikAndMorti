import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { getRikAndMortiData } from "../../Redux/actions/rikAndMortiactions";
import { useAppDispatch } from "../../Redux/hooks";
import CardsBox from "./../CardsBox/CardsBox";

const RoleButton = styled(Button)({
  width: "120px",
  height: "70px",
  display: "flex",
  justifyContent: "center",
  color: "white",
  backgroundColor: "blueviolet",
  borderRadius: "10px",
  alignItems: "center",
  margin: "0 10px",
  "&:hover": {
    backgroundColor: "gray",
    color: "orange",
    boxShadow: "1px 1px 1px gray",
  },
}) as typeof Button;

const Layout: React.FC = () => {
  const dispatch = useAppDispatch();
  const [selectedRole, setSelectedRole] = useState("character");

  useEffect(() => {
    dispatch(getRikAndMortiData(selectedRole));
  }, [selectedRole]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        paddingTop: "80px",
      }}
    >
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <RoleButton onClick={() => setSelectedRole("character")}>
          Character
        </RoleButton>
        <RoleButton onClick={() => setSelectedRole("location")}>
          Location
        </RoleButton>
        <RoleButton onClick={() => setSelectedRole("episode")}>
          Episode
        </RoleButton>
      </Box>
      <CardsBox selectedRole={selectedRole} />
    </Box>
  );
};
export default Layout;
