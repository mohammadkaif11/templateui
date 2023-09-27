import Stats from "../../components/Stats";
import Hero from "../../components/Hero";
import Feature from "../../components/Feature";
import Cta from "../../components/Cta";
import NewsLetter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import data from '@/../data.json';
import Cta2 from "../../components/Cta2";
import Pricing from "../../components/Pricing";
import Testimonials from "../../components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero name={data.name} heading={data.hero.heading} description={data.hero.description} navbar={data.hero.Navbar}/>
      <Stats heading={data.statistics.heading} description={data.statistics.description} stats={data.statistics.statsData} />
      <Feature heading={data.features.heading} features={data.features.data}/>
      <Cta2 heading={data.cta.heading} description={data.cta.description}/>
      <Pricing/>
      <Testimonials testimonials={data.testimonials}/>
      <NewsLetter/>
      <Footer name={data.name} navigation={data.footer}/>
    </main>
  );
}


// export async function getStaticProps() {
//   if(NameKey.Name==""){
//     return {
//         props: {
//           data: Data,
//         },
//       };
//   }else{
//     try {
//       const WebName=NameKey.Name;
//       const response=await fetch(`https://ftest-api.onrender.com/ftests/${WebName}`);
//       const responseData=await response.json();
//       return {
//           props: {
//             data:responseData,
//           },
//         };
//     } catch (error) {
//       console.log('Error ',error)
//       return {
//         props: {
//           data:Data,
//         },
//       };
//     }
//   }
// }
