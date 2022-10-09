import React from "react";
import Container from "@mui/material/Container";
import bgImage from "../../../images/bgImage.jpg";
import { Typography, Box, Button } from "@mui/material";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

export const HeroSection = () => {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Container
      sx={{
        color: "#fff",
        backgroundImage: `linear-gradient(to right bottom,  #032541CC ,  #03254100), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        component="span"
        sx={{ p: 2, border: "1px dashed grey", padding: "30px 40px" }}
      >
        <div style={{ padding: "30px 40px" }}>
          <Typography sx={{ fontSize: "3em", fontWeight: 700, lineHeight: 1 }}>
            {" "}
            Welcome
          </Typography>
          <Typography
            sx={{
              fontSize: "2em",
              fontWeight: 700,
              lineHeight: 1,
              marginTop: "10px",
            }}
          >
            Millions of movies, TV shows and people to discover. Explore now.
          </Typography>
          <FormControl
            sx={{
              m: 1,
              width: "100%",
              color: "white",
              backgroundColor: "white",
              border: "none",
              marginTop: 5,
              borderRadius: "30px",
              display: "flex",
              flexWrap: "wrap",
              "& .css-1aubxci-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                { border: "unset" },
              "& .css-406pqh-MuiInputBase-root-MuiOutlinedInput-root": {
                paddingRight: 0,
              },
            }}
          >
            <InputLabel
              htmlFor="outlined-adornment-password"
              sx={{ backgroundColor: "white" }}
            >
              Search for a movie,tv show ,person.....
            </InputLabel>
            <OutlinedInput
              sx={{
                color: "peachpuff",
                "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                  border: "unset",
                },
              }}
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end" sx={{ backgroundColor: "blue" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      background:
                        "linear-gradient(to right,rgba(30,213,169,1) 0%,rgba(1,180,228,1) 100%)",
                      height: "57px",
                      borderRadius: "30px",
                      padding: "0 20px",
                    }}
                  >
                    Search
                  </Button>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </div>
      </Box>
    </Container>
  );
};
