import Button from "./Button"

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 text-center 
            mx-auto w-full max-w-[800px] p-4">
       <div className="gap-4 flex flex-col">
       <p>IT'S TIME TO GET</p>
       <h1 className="mr-4 upercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Swole<span className="text-blue-400">nurmous</span></h1>
       </div>
       <p className='text-sm md:text-base font-light'>I hereby acknowledgement that I may become <span className='text-blue-400 font-medium'>unbelievably swolenormous</span> and accept all risks of becoming the local <span className='text-blue-400 font-medium'>mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>

        <Button func={()=>{
           window.location.href='#generate'
        }

        } text={"Accept && Begin"} />

    </div>
  )
}
