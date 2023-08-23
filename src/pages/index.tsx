import HomePage from "./component/HomePage/HomePage";
import Data from "../../template.json";
import Name from "../../data.json";

export default function Home({data}:any) {
  return (
    <main>
      <HomePage WebContent={data}/>
    </main>
  );
}


export async function getStaticProps() {
  if(Name.Name==""){
    return {
        props: {
          data: Data,
        },
      };
  }else{
    return {
        props: {
          data: [],
        },
      };
  }
}
