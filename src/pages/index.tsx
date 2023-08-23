import HomePage from "./component/HomePage/HomePage";
import Data from "../../template.json";
import NameKey from "../../data.json";

export default function Home({data}:any) {
  return (
    <main>
      <HomePage WebContent={data}/>
    </main>
  );
}


export async function getServerSideProps() {
  if(NameKey.Name==""){
    return {
        props: {
          data: Data,
        },
      };
  }else{
    const WebName=NameKey.Name;
    const response=await fetch(`http://localhost:4000/ftests/${WebName}`);
    const responseData=await response.json();
    return {
        props: {
          data:responseData,
        },
      };
  }
}
