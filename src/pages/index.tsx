import Stats from "../../components/Stats";
import Hero from "../../components/Hero";
import Feature from "../../components/Feature";
import NewsLetter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import data from '@/../data.json';
import Cta from "../../components/Cta";
import Pricing from "../../components/Pricing";
import Testimonials from "../../components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero navbar={data.navbar} hero_section={data.hero_section}/>
      <Stats statistics={data.matrix_section} />
      <Feature feature={data.feature}/>
      <Cta cta={data.waitlist}/>
      <Pricing plan={data.choose_plan}/>
      <Testimonials testimonials={data.testimonials}/>
      <NewsLetter/>
      <Footer  footer={data.footer}/>
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
