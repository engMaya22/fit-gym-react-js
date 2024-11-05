import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { useState } from 'react'
import { generateWorkout } from './utils/functions';


function App() {

  const [poison , setPoison] = useState('individual');//for workouts
  const [muscles , setMuscles] = useState([]);
  const [goal , setGoal] = useState('strength_power');
  const [workout , setWorkout] = useState(null);

  const updateWorkout = ()=>{
    if(muscles.length < 1)
      return
    let newWorkout = generateWorkout({poison , muscles , goal});
    console.log(newWorkout)
    setWorkout(newWorkout)
  }

  return (
    <main className='min-h-screen bg-gradient-to-tr from-slate-800 to-slate-950
      text-white flex flex-col text-sm sm:text-base'>
     <Hero />
     <Generator poison={poison} setPoison={setPoison} 
                muscles={muscles} setMuscles={setMuscles}
                goal={goal} setGoal={setGoal}
                updateWorkout={updateWorkout}
                />
     {
        workout && (<Workout  workout={workout}/>)
     }
      
    
    </main>
  )
}

export default App
