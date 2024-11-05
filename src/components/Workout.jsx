
import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard"

export default function Workout({workout}) {
  return (
    <SectionWrapper header={"welcome to"}
       title={['The', 'DANGER', 'zone']}>
      <div className="flex flex-col gap-4">
       {
         workout.map((exercise , idx)=>{
          return <ExerciseCard idx={idx} exercise={exercise} key={idx} />
         })
       }

      </div>



    </SectionWrapper>
  )
}
