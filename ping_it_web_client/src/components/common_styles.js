import { styled } from "@mui/material/styles";
import { Card, Typography, Box, Button, TextField, Input } from "@mui/material";

const Text = styled(Typography)(({ theme }) => ({
  fontFamily: "Sen",
  color: theme.palette.text.primary,
}));

const MyTextField = styled(TextField)(({ theme }) => ({
  paddingBottom: "6px",
}));

const MyButton = styled(Button)(({ theme }) => ({
  height: "7vh",
  width: "25vw",
  marginTop: "2vh",
  borderRadius: "10px",
  fontSize: "2.5vh",
  textTransform: "none",
}));

const MyTextFieldBg = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "8vh",
  width: "25vw",
  paddingRight: "15px",
  paddingLeft: "15px",
  marginTop: "2vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "15px",
}));

const common_styles = {
  Text,
  MyTextField,
  MyTextFieldBg,
  MyButton,
};

export default common_styles;