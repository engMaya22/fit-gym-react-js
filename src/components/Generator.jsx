import { useState } from "react";
import { SCHEMES, WORKOUTS } from "../util/swoldier";
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

  const [ showModal , setShowModal] = useState(false);
  const [poison , setPoison] = useState('individual');//for workouts
  const [muscles , setMuscles] = useState([]);
  const [goal , setGoal] = useState('strength_power');

  const toggleModal = ()=>{
    setShowModal(!showModal);
  }
  const updateMuscles = (muscleGroup)=>{//set just to 2 muscles
    if(muscles.includes(muscleGroup)){//if musclesgroup already exsists and click on it remove it from muscles
      setMuscles(muscles.filter(val => val !== muscleGroup))
      return
    }
    if(muscles.length > 2)
      return 
    if(poison !== 'individual' )//if type not individual select just one 
    {
      setMuscles([muscleGroup])
      setShowModal(false)
      return
    }

    setMuscles([...muscles , muscleGroup])
    if(muscles.length === 2)
      setShowModal(false)


  }

  return (
    <SectionWrapper header={"generate your workout"}
      title={['It\'s', 'Huge', 'O\'clock']}>

      <Header index={'01'} title={'Pick your poison'} description={"Select the workout you wish to endure."} />
      <div className="grid grid-cols-2 sm:grid-cols-4  gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex)=>{
          return (
              <button onClick={()=>{ setMuscles([]) ; setPoison(type)}}//new poison -> make muscles empty
                  className={ 'bg-slate-950 rounded-lg hover:border-blue-600 duration-200 border py-4' +
                   (type === poison ? ' border-blue-600' : ' border-blue-400' ) } key={typeIndex}>
                    {/* blue 600 for current selected */}
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
             <p className="capitalize">{muscles.length == 0 ? 'Select muscle groups' : muscles.join(' ')}</p>
             <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
        </button>

        {showModal && ( 
          <div className="flex flex-col px-3 pb-3">{ (poison  === 'individual' ? WORKOUTS[poison] : Object.keys( WORKOUTS[poison] ))
                                              .map((muscleGroup , muscleGroupIndex)=>{
                                                return ( <button 
                                                          className={'hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-blue-400' : ' ')}
                                                          key={muscleGroupIndex}
                                                          onClick={()=>{
                                                          updateMuscles(muscleGroup)
                                                         }}
                                                        
                                                          >
                                                                 <p className="uppercase"> {muscleGroup}</p>
                                                        </button>)

                                              }) }</div>
        )}
       
      </div>

      <Header index={'03'} title={'Become Juggernaut'} description={"Select your ultimate objective."} />
      <div className="grid grid-cols-3  gap-4">

        {Object.keys(SCHEMES).map((scheme, schemeIndex)=>{
          return (
              // <button className="bg-slate-950 rounded-lg hover:border-blue-600 duration-200 border-blue-400 border py-4" key={schemeIndex}>
              //   <p className="capitalize">{scheme.replaceAll('_',' ')}</p>
              // </button>
                 <button onClick={()=>{setGoal(scheme)}}
                 className={ 'bg-slate-950 rounded-lg hover:border-blue-600 duration-200 border py-4' +
                  (scheme === goal ? ' border-blue-600' : ' border-blue-400' ) } key={schemeIndex}>
                   {/* blue 600 for current selected */}
               <p className="capitalize">{scheme.replaceAll('_',' ')}</p>
             </button>
          )
        })}
      </div>

    </SectionWrapper>
  )
}
