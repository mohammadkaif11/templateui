import Stats from "../../components/Stats";
import Hero from "../../components/Hero";
import Feature from "../../components/Feature";
import Cta from "../../components/Cta";
import NewsLetter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import Cta2 from "../../components/Cta2";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Stats/>
      <Feature/>
      <Cta/>
      <NewsLetter/>
      <Footer/>
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
