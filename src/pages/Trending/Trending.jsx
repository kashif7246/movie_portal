/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Container, style } from "@mui/system";
import { Typography } from "@mui/material";
import { APP_COLOR, WHITE_COLOR } from "../../store/constants";
import CardComponent from "../../components/CardsComponent/CardsComponent";

import styles from "./trending.css";

const Trending = (props) => {
  const [value, setValue] = useState("movies");

  useEffect(() => {
    props?.getAllTrending({ categoryType: value, page: 1 });
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          typography: "body1",
          display: "flex",
          marginTop: "20px",
          flexDirection: "column",
        }}
      >
        <TabContext value={value}>
          <Box
            sx={{
              borderColor: "divider",
              display: "flex",
            }}
          >
            <Typography variant="h4" className="right-space">
              Trending
            </Typography>
            <TabList
              onChange={handleChange}
              className="section"
              TabIndicatorProps={{
                style: {
                  transition: "none",
                  backgroundColor: "transparent",
                },
              }}
              aria-label="lab API tabs example"
              sx={{
                marginLeft: "30px",
                " & .css-heg063-MuiTabs-flexContainer": {
                  border: "1px solid rgba(3,37,65,1)",
                  borderRadius: "30px",
                  "& .css-vaa74o-MuiButtonBase-root-MuiTab-root.Mui-selected": {
                    backgroundColor: APP_COLOR,
                    color: WHITE_COLOR,
                    borderRadius: "30px",
                    maxHeight: "20px",
                  },
                  "& .css-vaa74o-MuiButtonBase-root-MuiTab-root": {
                    minHeight: "30px",
                    maxHeight: "19px",
                  },
                  "& .css-19cz94n-MuiTabs-root .css-heg063-MuiTabs-flexContainer .css-vaa74o-MuiButtonBase-root-MuiTab-root.Mui-selected":
                    {
                      maxHeight: "20px",
                    },
                },
              }}
            >
              <Tab label="Today" value="movies" />
              <Tab label="This Week" value="tv" />
            </TabList>
          </Box>
          <TabPanel value="movies">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                overflowX: "scroll",
                flexBasis: "40%",
                flexShrink: "0",
              }}
            >
              {props?.trending?.map((item, index) => (
                <CardComponent item={item} key={index} />
              ))}
            </div>
          </TabPanel>
          <TabPanel value="tv">
            {" "}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                overflowX: "scroll",
                flexBasis: "40%",
                flexShrink: "0",
              }}
            >
              {props?.trending?.map((item) => (
                <CardComponent item={item} />
              ))}
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};
export default Trending;
