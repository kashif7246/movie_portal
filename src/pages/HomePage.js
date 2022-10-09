import { useEffect } from "react";
import { api } from "./config";
// import { NavBar } from "./Navbar/index";
import { NavBar } from "../components/NavBar";
import { HeroSection } from "./HeroSection/index";
import Popular from "./Popular/index";
import FreeToWatch from "./FreeToWatch/index";
import Trending from "./Trending";
import Trailers from "./Trailers/index";

function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Popular />
      <FreeToWatch />
      <Trailers />
      <Trending />
    </div>
  );
}

export default HomePage;
