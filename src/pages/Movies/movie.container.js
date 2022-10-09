import { connect } from "react-redux";
import Trending from "./Movie";
import { getMovies } from "../../store/selectors/movies.selector";
import { getTvMovie } from "../../store/actions/action";

const mapStateToProps = (state) => {
  return {
    getMovies: getMovies(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllMovie: (payload) => dispatch(getTvMovie(payload)),
    getPeople: (payload) => dispatch(getTvMovie(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trending);
