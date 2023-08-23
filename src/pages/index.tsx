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
    try {
      const WebName=NameKey.Name;
      const response=await fetch(`https://ftest-api.onrender.com/ftests/${WebName}`);
      const responseData=await response.json();
      return {
          props: {
            data:responseData,
          },
        };
    } catch (error) {
      console.log('Error ',error)
      return {
        props: {
          data:Data,
        },
      };
    }
  }
}
