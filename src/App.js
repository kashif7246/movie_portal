import { useEffect } from "react";
import { api } from "./pages/config";
import HomePage from "./pages/HomePage";
import Users from "./pages/Movies/index";
import DetailCard from "./components/Card/DetailCard";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Navigate,
} from "react-router-dom";
const itemProp = { item: "popular" };
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/Movie/popular/"
          element={<Users popular={{ item: "popular" }} />}
        />
        <Route
          path="/Movie/nowplaying/"
          element={<Users popular={{ item: "now-playing" }} />}
        />
        <Route
          path="/Movie/upcoming/"
          element={<Users popular={{ item: "upcoming" }} />}
        />
        <Route
          path="/Movie/toprated/"
          element={<Users popular={{ item: "top-rated" }} />}
        />
        <Route
          path="/tv/popular"
          element={<Users popular={{ item: "tv-popular" }} />}
        />
        <Route
          path="/tv/airingtoday"
          element={<Users popular={{ item: "tv-shows-airing-today" }} />}
        />

        <Route
          path="/tv/ontv"
          element={<Users popular={{ item: "currently-airing-on-tv" }} />}
        />

        <Route
          path="/tv/toprated"
          element={<Users popular={{ item: "tv-top-rated-tv-shows" }} />}
        />

        <Route
          path="/people/popularpeople"
          element={<Users popular={{ item: "popular-people" }} />}
        />

        <Route path="/DetailCard" element={<DetailCard />} />
      </Routes>
    </>
  );
}

export default App;
