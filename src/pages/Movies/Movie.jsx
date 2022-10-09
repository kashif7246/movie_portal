/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";

import { Container, Box } from "@mui/system";

import { styled } from "@mui/material/styles";
import CardComponent from "../../components/MovieTvCard/index";
import Paper from "@mui/material/Paper";
import Hoc from "../../Hoc/hoc";
import { Typography } from "@mui/material";

const Trending = (props) => {
  const [value, setValue] = useState("movies");
  const { popular } = props;
  var patt1 = /(\w+)/g;
  var match = popular.item.match(patt1);

  var output = match.join(" ");
  var re = /(\b[a-z](?!\s))/g;
  let cap_heading = output.replace(re, function (x) {
    return x.toUpperCase();
  });

  function capitalizeWords(arr) {
    return arr.map((element) => {
      return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });
  }

  useEffect(() => {
    setValue(popular.item);
  }, [props]);

  useEffect(() => {
    if (props.popular.item !== "popular-people")
      props?.getAllMovie({ categoryType: popular, page: 1 });
    else props.getPeople({ categoryType: popular, page: 1 });
  }, [popular]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  props.getMovies.map((item) => console.log(item, "itemkkkk"));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Hoc>
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          maxWidth: "xl",
          marginLeft: "10px",
          padding: "20px",
          fontSize: "1.6rem",
        }}
      >
        {cap_heading}
      </Typography>
      <Container
        sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        maxWidth={"xl"}
      >
        {props?.getMovies?.map((item) => (
          <CardComponent item={item} />
        ))}
      </Container>
    </Hoc>
  );
};
export default Trending;
