import { connect } from "react-redux";
import Trending from "./Trailers";
import { getAllTrailers } from "../../store/selectors/trailers.selectors";
import { getTrailers } from "../../store/actions/action";

const mapStateToProps = (state) => {
  return {
    trailers: getAllTrailers(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTrailers: (payload) => dispatch(getTrailers(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
