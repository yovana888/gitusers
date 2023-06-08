import { Typography } from "@mui/material";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded"


const TypographyIconBio = ({ text, icon,mt=2 }) => {
  const icons = {
    company: <BusinessRoundedIcon />,
    email: <EmailRoundedIcon/>,
  };

  return (
    <Typography
      sx={{ display: "flex", alignItems: "center" }}
      mt={mt}
      varian="body2"
    >
      {icons[icon]}
      &nbsp;&nbsp; {text}
    </Typography>
  );
};

export default TypographyIconBio;