import { useState } from "react";
import { WORKOUTS } from "../util/swoldier";
import SectionWrapper from "./SectionWrapper";


const Header = ({index , title , description})=>{

  return (
      <div  className="flex flex-col gap-4">
           <div className="flex items-center justify-center gap-2" >
               <p className="text-3xl sm:text-4xl md:text-5xl text-semibold text-slate-400 ">{index}</p>
               <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
           </div>
           <p className="mx-auto text-sm sm:text-base">{description}</p>
      </div>
  )
}
export default function Generator() {
  const [ showModal , setShowModal] = useState(false)
  const toggleModal = ()=>{
    setShowModal(!showModal);
  }

  return (
    <SectionWrapper header={"generate your workout"}
      title={['It\'s', 'Huge', 'O\'clock']}>
      <Header index={'01'} title={'Pick your poison'} description={"Select the workout you wish to endure."} />
 
      <div className="grid grid-cols-2 sm:grid-cols-4  gap-4">

        {Object.keys(WORKOUTS).map((type, typeIndex)=>{
          return (
              <button className="bg-slate-950 rounded-lg hover:border-blue-600 duration-200 border-blue-400 border py-4" key={typeIndex}>
                <p className="capitalize">{type.replaceAll('_',' ')}</p>
              </button>
          )
        })}
      </div>
      
      <Header index={'02'} title={'Lock on targets'} description={"Select the muscles judged for annihilation."} />
      <div className="flex flex-col bg-slate-950 
       border border-solid border-blue-400 rounded-lg ">

        <button onClick={()=>{toggleModal()}}
               className=" flex items-center justify-center relative p-3">
             <p>Select muscle groups</p>
             <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>

        {showModal && ( 
          <div>modal</div>
        )}
       
      </div>

    </SectionWrapper>
  )
}
