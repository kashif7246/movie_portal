import { useEffect, useState } from "react";
import { useParams, NavLink, Redirect } from "react-router-dom";
import Hoc from "../../Hoc/hoc";

const Users = (props) => {
  const params = useParams();

  const [value, setValue] = useState("movies");
  // useEffect(() => {
  //   props?.getAllTrailers({ categoryType: value, page: 1 });
  // }, [value]);

  useEffect(() => {});

  return <Hoc></Hoc>;
};
export default Users;
