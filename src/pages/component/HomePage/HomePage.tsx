import React from "react";
import Header from "../Header/Header";
import Stats from "../Stats/Stats";
import Features from "../Feature/Feature";
import Footer from "../Footer/Footer";
import Cta from "../Cta/Cta";

interface HomePageProps {
  WebContent: any[]; 
}
const HomePage: React.FC<HomePageProps> = ({ WebContent }) => {
  return (
    <>
      <Header Name={WebContent[0].Name} HeaderContent={WebContent[0].HeaderContent} HeaderDescription={WebContent[0].HeaderDescription} labels={WebContent[0].labels}/>
      <Stats stats={WebContent[0].stats}/> 
      <Features />
      <Cta cta={WebContent[0].cta}/>
      <Footer />
    </>
  );
}


export default HomePage;
