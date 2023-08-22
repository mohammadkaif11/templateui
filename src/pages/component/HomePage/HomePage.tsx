import React from "react";
import Header from "../Header/Header";
import Stats from "../Stats/Stats";
import Features from "../Feature/Feature";
import Footer from "../Footer/Footer";
import Cta from "../Cta/Cta";

function HomePage() {
  return (
    <>
      <Header />
      <Stats /> 
      <Features />
      <Cta/>
      <Footer />
    </>
  );
}

export default HomePage;
