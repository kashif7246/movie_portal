import * as React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import card from "../../images/card.jpg";
import { NavLink } from "react-router-dom";

export default function MovieTvCard({ item }) {
  const [componentValue, setComponentValue] = React.useState(item);
  return (
    <>
      <Card
        sx={{
          maxWidth: item?.backdrop_path ? 140 : 220,
          whiteSpace: "normal",
          flexBasis: "40%",
          flexShrink: "0",
          margin: "10px",
          marginBottom: "10px",
          borderRadius: "unset",

          "& .css-ely61g-MuiCardContent-root:last-child": {
            paddingBottom: "0px",
          },
          paddingBottom: "1px",
          boxShadow: item?.backdrop_path ? "unset" : "null",
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
            image={`https://www.themoviedb.org/t/p/w220_and_h330_face${
              item?.backdrop_path ? item.backdrop_path : item?.profile_path
            }`}
            alt="green iguana"
          />
        </NavLink>

        <CardContent
          sx={{ borderRadius: "unset", border: "unset", overflowX: "scroll" }}
        >
          <Typography gutterBottom sx={{ fontSize: "1rem", fontWeight: 600 }}>
            {item.backdrop_path ? item?.original_title : item?.name}
          </Typography>
          <div
            style={{
              overflowX: "auto",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <Typography
              gutterBottom
              sx={{
                fontSize: "0.7rem",
                fontWeight: 600,
              }}
            >
              {item.backdrop_path
                ? item?.release_date
                : item?.known_for?.map((item) => item?.title)}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
