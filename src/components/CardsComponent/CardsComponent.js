import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import card from "../../images/card.jpg";
import { NavLink } from "react-router-dom";

export default function CardComponent({ item }) {
  const [componentValue, setComponentValue] = React.useState(item);

  return (
    <>
      <Card
        sx={{
          maxWidth: 140,
          whiteSpace: "normal",
          flexBasis: "40%",
          flexShrink: "0",
          margin: "10px",
          marginBottom: "10px",
          borderRadius: "unset",

          "& .css-46bh2p-MuiCardContent-root:last-child": {
            paddingBottom: "1px",
          },
          boxShadow: "unset",
        }}
      >
        <NavLink
          to={{
            pathname: `/DetailCard`,
          }}
          state={{
            item: componentValue,
          }}
          className={(isActive) =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
        >
          <CardMedia
            component="img"
            height="180"
            image={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.backdrop_path}`}
            alt="green iguana"
          />
        </NavLink>

        <CardContent sx={{ borderRadius: "unset", border: "unset" }}>
          <Typography gutterBottom sx={{ fontSize: "1rem", fontWeight: 600 }}>
            {item.original_title}
          </Typography>
          <Typography gutterBottom sx={{ fontSize: "1rem", fontWeight: 600 }}>
            {item.release_date}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
