import { connect } from "react-redux";
import Trending from "./Trending";
import { getAllTrending } from "../../store/selectors/trending.selector";
import { getTrending } from "../../store/actions/action";

const mapStateToProps = (state) => {
  return {
    trending: getAllTrending(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTrending: (payload) => dispatch(getTrending(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
