/* eslint-disable array-callback-return */
import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { APP_COLOR, WHITE_COLOR } from "../../store/constants";
import CardComponent from "../../components/CardsComponent/CardsComponent";

import "./popular.module.css";

const Popular = (props) => {
  const [value, setValue] = React.useState("streaming");
  React.useEffect(() => {
    props.allPopular({ categoryType: value, page: 1 });
  }, [value]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(props, "props");
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
            <Typography variant="h" className="right-space">
              What's Popular
            </Typography>
            <TabList
              onChange={handleChange}
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
                  },
                  "              &    .css-vaa74o-MuiButtonBase-root-MuiTab-root":
                    {
                      minHeight: "30px",
                    },
                },
              }}
            >
              <Tab label="Streaming" value="streaming" />
              <Tab label="On TV" value="onTv" />
              <Tab label="For Rent" value="forRent" />
              <Tab label="In Theaters" value="inTheaters" />
            </TabList>
          </Box>
          <TabPanel value="streaming">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                overflowX: "scroll",
                flexBasis: "40%",
                flexShrink: "0",
              }}
            >
              {props?.popular?.map((item, index) => (
                <CardComponent item={item} key={index} />
              ))}
            </div>
          </TabPanel>
          <TabPanel value="onTv">
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
              {props?.popular?.map((item) => (
                <CardComponent item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel value="forRent">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                overflowX: "scroll",
                flexBasis: "40%",
                flexShrink: "0",
              }}
            >
              {props?.popular?.map((item) => (
                <CardComponent item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel value="inTheaters">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                overflowX: "scroll",
                flexBasis: "40%",
                flexShrink: "0",
              }}
            >
              {props?.popular?.map((item) => (
                <CardComponent item={item} />
              ))}
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};
export default Popular;
