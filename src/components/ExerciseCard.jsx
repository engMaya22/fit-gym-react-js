
import {useState} from "react";

const ExerciseCard = ({exercise , idx})=>{

    const [setsComplete , setSetsComplete] = useState(0);
    const handleSetIncrement = ()=>{
      setSetsComplete((prevSets) => (prevSets < 5 ? prevSets + 1 : prevSets));


    }
    return  <div className="bg-slate-950 flex flex-col p-4 sm:flex-wrap rounded-md"> 
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-4">
                    <h4 className="hidden sm:inline text-3xl sm:text-4xl md:text-5xl font-smibold text-slate-400">
                      0{idx + 1}
                    </h4>
                    <h2 className='capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center'>{exercise.name.replaceAll("_", " ")}</h2>
                    <p className="captialize text-sm text-slate-400">{exercise.type}</p>

                </div>

                <div className="flex flex-col">
                  <h3 className = "text-sm text-slate-400">Muscle Groups</h3>
                  <p className="captialize">{exercise.muscles.join(' & ')}</p>
                </div>

                <div className='flex flex-col bg-slate-950 rounded gap-2 '>
                  {exercise.description.split('___').map((val) => {
                      return (
                          <div className='text-sm'>
                              {val}
                          </div>
                      )
                  })}
                </div>


                <div className="grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2">
                  {
                    ['reps','rest','tempo'].map(info => {
                      return(
                              <div key={info} className="rounded border-[1.5px] flex flex-col p-2 w-full border-solid border-slate-900">
                                  <h3 className="text-slate-400 text-sm captialize"> {info === 'reps' ?  `${exercise.unit}` : info}</h3>
                                  <p className="font-medium">{exercise[info]}</p>
                              </div>
                      )
                    })

                  }
                  <button onClick={handleSetIncrement} className="flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-blue-900 hover:border-blue-600 w-full">
                    <h3 className='text-slate-400 text-sm capitalize'>Sets completed</h3>
                    <p className='font-medium'> {setsComplete} / 5</p>
                  </button>

                </div>
            </div>
}

export default ExerciseCard;