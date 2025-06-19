import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  minHeight: "180px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),
  boxShadow: "none",
  background: `url('/cocktail-header.jpg') center center / cover no-repeat`,
}));

const Header: React.FC = () => {
  const theme = useTheme();
  return (
    <StyledAppBar position="static">
      <Toolbar sx={{ justifyContent: "center", width: "100%" }}>
        <Typography
          variant="h2"
          component="div"
          sx={{
            color: "#FFEBAD",
            fontWeight: "900",
            letterSpacing: "4px",
            textTransform: "uppercase",
            textShadow: "3px 3px 6px rgba(0,0,0,0.6)",
            filter: "drop-shadow(0 0 7px rgba(255, 235, 173, 0.9))",
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            padding: theme.spacing(1, 2),
            borderRadius: theme.shape.borderRadius,
          }}
        >
          Drinkology
        </Typography>
      </Toolbar>
      <Box sx={{ textAlign: "center", mt: 1 }}>
        <Typography
          variant="subtitle1"
          component="p"
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            fontStyle: "italic",
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
          }}
        >
          Your Personal Cocktail Connoisseur
        </Typography>
      </Box>
    </StyledAppBar>
  );
};

export default Header;
