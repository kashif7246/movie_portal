import { connect } from "react-redux";
import Popular from "./freeWatch";
import { getFreeAllToWatch } from "../../store/selectors/freeToWatch.selector";
import { getFreeToWatch } from "../../store/actions/action";

const mapStateToProps = (state) => {
  return {
    freeWatch: getFreeAllToWatch(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    allfreeToWatch: (payload) => dispatch(getFreeToWatch(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Popular);
