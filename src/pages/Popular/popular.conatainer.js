import { connect } from "react-redux";
import Popular from "./popular";
import { getAllPopular } from "../../store/selectors/popular-selectors";
import { getPopular } from "../../store/actions/action";

const mapStateToProps = (state) => {
  return {
    popular: getAllPopular(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    allPopular: (payload) => dispatch(getPopular(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Popular);
