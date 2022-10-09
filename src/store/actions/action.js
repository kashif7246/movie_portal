import { act } from "react-dom/test-utils";

export const getPopular = (payload) => {
  console.log(
    payload,
    "apyadad",
    payload.categoryType === "onTv",
    payload.categoryType === "forRent",
    payload.categoryType === "forRent"
  );
  return payload.categoryType === "onTv"
    ? {
        type: "GET_NOW_pLAYING",
        payload,
      }
    : payload.categoryType === "forRent"
    ? {
        type: "GET_ALL_POPULAR",
        payload,
      }
    : payload.categoryType === "inTheaters"
    ? {
        type: "GET_ALL_IN_THEATHER",
        payload,
      }
    : {
        type: "GET_ALL_POPULAR",
        payload,
      };
};
export const getFreeToWatch = (payload) => {
  return payload.categoryType === "movies"
    ? {
        type: "FREE_TO_WATCH",
        payload,
      }
    : {
        type: "TV",
        payload,
      };
};
export const getTrending = (payload) => {
  return payload.categoryType === "movies"
    ? { type: "GET_TRENDING", payload }
    : payload.categoryType === "tv"
    ? { type: "GET_TV_SHOWS", payload }
    : payload.categoryType === "forRent"
    ? { type: "GET_ALL_POPULAR", payload }
    : { type: "FREE_TO_WATCH", payload };
};
export const getTrailers = (payload) => {
  return payload.categoryType === "movies"
    ? { type: "GET_MOVIES_TRAILERS", payload }
    : payload.categoryType === "tv"
    ? { type: "GET_TV_TRAILERS", payload }
    : payload.categoryType === "forRent"
    ? { type: "GET_ALL_FOR_RENT", payload }
    : { type: "GET_IN_THEATERS", payload };
};
export const getTvMovie = (payload) => {
  return { type: "GET_MOVIE_CARD", payload };
};
