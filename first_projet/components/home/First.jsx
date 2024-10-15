'use client'
import { useState } from "react"
import { Typewriter } from "react-simple-typewriter"
import { BOL } from "../../svg"
import { Earth } from "../../svg"
export default function First() {
  const [count,setCount] = useState (0)
  
  return (
    <section className="w-1/2 flex items-center">
        <div className="">
           <h1 className="mb-0 font-bold text-7xl">
             <Typewriter words={['Bienvenu à ctime','Hello in ctime']} loop={0}/>
           </h1>
           <p  className="mb-0 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt alias a tenetur at sapiente harum aut dicta. Iste itaque, ut error ex maxime fuga temporibus beatae sequi obcaecati commodi quo.</p>
           <div className=" flex justify-between mt-5">
            <div className="flex items-center gap-3 mt-3 "  >
                <Earth size = {35} color = {'green'}/>
                <div><h1 className="font-bold ">24/7 Support</h1>
                <p className=" text-gray-500"> We're always here to help </p></div>

                

            </div>
            <div className="flex items-center gap-3 mt-3 "  >
                <BOL size = {35} color = {'green'}/>
                <div><h1 className="font-bold ">Award Winning agency</h1>
                <p className=" text-gray-500">You are in safe hand</p></div>

                

            </div>
           </div>
        </div>
       
    </section>
  )
}