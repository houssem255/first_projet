import Ctime from "./Ctime";
import Ctime2 from "./Ctime2";


export default function Seconde() {
  return (
    <section className="w-1/2 flex items-center justify-center">
        <div className="w-full h-full flex justify-center items-center relative">
            <img className="rounded-xl" src="./01.jpg" alt="" width={400} height={400}/>
          <Ctime/>
          <Ctime2/>
        </div>
    </section>
  )
}
