import React from "react";
import Header from "../../components/header/Header";
import Poster from "../../components/poster/Poster";
import Body from "./body/Body";
import Footer from "../../components/footer/Footer";
import "./style.scss";

function Home() {
  return (
    <div>
      <Header />
      <Poster />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
