import { useState } from "react";
import {
  Container,
  Card,
  Grid,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import style from "./card.css";
import CircularStatic from "./ProgressBar";
import IconComponent from "./IconComponent";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/system";
const DetailCard = (props) => {
  const { state } = useLocation();

  const sectionStyle = {
    height: "50vh",
    width: "95vw",

    backgroundImage: `url(https://www.themoviedb.org/t/p/w220_and_h330_face${state.item.backdrop_path}) `,

    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    alignItems: "center",
    margin: "auto",
    overlay: "black",
  };

  return (
    <div
      style={{
        display: "flex",
        marginLeft: "auto",

        justifyContent: "space-between",
        padding: "50px",
      }}
    >
      <Box sx={{ width: "30%" }}>
        {" "}
        <Card
          sx={{
            width: "20vw",
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
          <CardMedia
            component="img"
            height="400px"
            image={`https://www.themoviedb.org/t/p/w220_and_h330_face${state.item.backdrop_path}`}
            alt="green iguana"
          />

          <CardContent sx={{ borderRadius: "unset", border: "unset" }}>
            <Typography gutterBottom sx={{ fontSize: "1rem", fontWeight: 600 }}>
              {state.item.original_title}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Box
        sx={{
          width: "70vw",
          marginLeft: "auto",
          alignContent: "flex-start",
          margin: "auto",
        }}
      >
        <div>
          <Typography variant="h4" sx={{ fontWeight: "900" }}>
            {state.item.original_title}
            <span>{"("}</span>
            {state.item.release_date}
            <span>{")"}</span>
          </Typography>
          <div style={{ marginTop: "40px", display: "flex" }}>
            <CircularStatic />
            <Typography
              style={{
                marginTop: "10px",
                margin: "10px 20px",
                fontWeight: "bold",
              }}
            >
              Users Score
            </Typography>

            <IconComponent />
          </div>
          <div style={{ marginTop: "40px" }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, marginBottom: "20px" }}
            >
              Overview
            </Typography>
            <Typography>{state.item.overview}</Typography>
          </div>
        </div>
      </Box>
    </div>
  );
};
export default DetailCard;
