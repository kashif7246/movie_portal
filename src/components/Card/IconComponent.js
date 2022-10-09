import { APP_COLOR } from "../../store/constants";
import Tooltip from "@mui/material/Tooltip";
import ListIcon from "@mui/icons-material/List";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const IconComponent = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Tooltip title="Add to List">
          <div
            style={{
              backgroundColor: APP_COLOR,
              borderRadius: "50%",
              alignContent: "center",
              padding: "10px",
              marginRight: "10px",
            }}
          >
            <ListIcon />
          </div>
        </Tooltip>
        <Tooltip title="Add to List">
          <div
            style={{
              backgroundColor: APP_COLOR,
              borderRadius: "50%",
              alignContent: "center",
              padding: "10px",
            }}
          >
            <FavoriteBorderIcon />
          </div>
        </Tooltip>
        <Tooltip title="Add to List">
          <div
            style={{
              backgroundColor: APP_COLOR,
              borderRadius: "50%",
              alignContent: "center",
              padding: "10px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
          >
            <BookmarkBorderIcon />
          </div>
        </Tooltip>
        <Tooltip title="Add to List">
          <div
            style={{
              backgroundColor: APP_COLOR,
              borderRadius: "50%",
              alignContent: "center",
              padding: "10px",
            }}
          >
            <StarBorderIcon />
          </div>
        </Tooltip>
      </div>
    </>
  );
};
export default IconComponent;
