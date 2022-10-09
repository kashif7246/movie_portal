import { accessToken, baseURL, apiKey } from "../../constants";
import axios from "axios";
import { Message } from "@mui/icons-material";

const addInterceptorsInClient = () => {
  const client = axios.create({
    baseURL: baseURL,
  });

  client.interceptors.request.use((config) => {
    const nextConfig = config;
    nextConfig.headers.Authorization = accessToken;
    return nextConfig;
  });

  return client;
};
const axiosClient = addInterceptorsInClient();

/* 
  Movies and TV show API's
*/

export const getPopularMovies = async (categoryType, page) => {
  const url = `/movie/popular?api_key=${apiKey}`;
  // const url = `/${"streaming"}/popular?api_key=${apiKey}&language=en-US&page=${1}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => {
      console.log(e, "eeeeeeeeeeee");
    });
  return response;
};
export const getNowPlayingMovies = async (categoryType, page) => {
  const url = `/movie/now_playing?api_key=${apiKey}`;
  // const url = `/${"streaming"}/popular?api_key=${apiKey}&language=en-US&page=${1}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => {
      console.log(e, "eeeeeeeeeeee");
    });
  return response;
};
export const getTopRatedMovies = async (categoryType, page) => {
  const url = `/movie/top_rated?api_key=${apiKey}`;
  // const url = `/${"streaming"}/popular?api_key=${apiKey}&language=en-US&page=${1}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => {
      console.log(e, "eeeeeeeeeeee");
    });
  return response;
};

export const getPopularTvShows = async (categoryType, page) => {
  const url = `/tv/popular?api_key=${apiKey}`;
  // const url = `/${"streaming"}/popular?api_key=${apiKey}&language=en-US&page=${1}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => {
      console.log(e, "eeeeeeeeeeee");
    });
  return response;
};
export const getAiringTodayTvShows = async (categoryType, page) => {
  const url = `/tv/on_the_air?api_key=${apiKey}`;
  // const url = `/${"streaming"}/popular?api_key=${apiKey}&language=en-US&page=${1}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => {
      console.log(e, "eeeeeeeeeeee");
    });
  return response;
};
export const getTopSRatedShows = async (categoryType, page) => {
  const url = `/tv/top_rated?api_key=${apiKey}`;
  // const url = `/${"streaming"}/popular?api_key=${apiKey}&language=en-US&page=${1}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => {
      console.log(e, "eeeeeeeeeeee");
    });
  return response;
};
export const Trending = async (media_type, time_window) => {
  const url = `/trending/${media_type}/${time_window}?api_key=${apiKey}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => {
      console.log(Message.info(e));
    });
  return response;
};

export const getList = async (categoryType, page) => {
  const url = `list/${1}?page=1&api_key=${apiKey}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => e);
  return response;
};

/**
 * Movies API's
 */
export const getNowPlaying = async (page) => {
  const url = `/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => e);
  return response;
};

export const getUpcomingMovies = async (page) => {
  const url = `/movie/upcoming?api_key=${apiKey}&language=en-US&page=${page}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => e);
  return response;
};

/* 
  TV Show API's
*/

export const getOnAiredTvShows = async (page) => {
  const url = `/tv/on_the_air?api_key=${apiKey}&language=en-US&page=${page}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => e);
  return response;
};

export const getPopularPeople = async (page) => {
  const url = `/person/popular?api_key=${apiKey}&language=en-US&page=${page}`;
  const response = await axiosClient
    .request({
      method: "GET",
      url: url,
    })
    .catch((e) => e);
  return response;
};
