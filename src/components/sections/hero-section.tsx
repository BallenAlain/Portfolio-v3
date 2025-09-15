import { motion } from "motion/react"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center sm:px-18 px-20 w-full">
      <div className="w-full max-w-7xl mx-auto flex flex-row justify-between items-center">
        <div className="relative z-10 text-start flex-1 max-w-4xl">
          <div className="flex md:gap-11 gap-6 md:flex-row flex-col-reverse items-center">
            <div className="flex items-center md:ml-12 bg-gray-200 rounded-full w-20 h-20 justify-center">
            <img
          src="/me.jpg" 
          alt="Me"
          className="object-cover w-full rounded-full h-full"
        />
          </div>
          <h1 className="md:text-6xl sm:text-4xl pt-5 mb-12 flex flex-col">
            <div>Al<motion.span whileHover={{ scale: 1.1 }} className="text-primary font-medium md:px-1 underline">ai</motion.span>n</div><div className='pl-4'>Ballen</div>
          </h1>
          
          </div>

          <div className="flex flex-col sm:flex-col gap-1 items-start">
            <div className="text-stone-500 md:text-lg text-md md:px-8 px-4">
              View my projects --&gt;
            </div>
            <div className="text-stone-500 md:text-lg text-md md:px-8 px-4">
              Check out my resume --&gt;
            </div>
            <div className="md:text-lg text-md md:px-8 px-4 py-2 pt-4 bg-transparent">
              Get In Touch
            </div>
            <div className="text-stone-500 md:text-md text-sm md:px-10 px-6">
              Email --&gt;
            </div>
            <div className="text-stone-500 md:text-md text-sm md:px-10 px-6">
              LinkedIn --&gt;
            </div>
            <div className="text-stone-500 md:text-md text-sm md:px-10 px-6">
              GitHub --&gt;
            </div>
          </div>
          
          <div className="flex flex-col mt-5 items-start">
            <p className="md:text-lg text-md text-muted-foreground px-8 ">
              Developer @ <span className="text-stone-500">MPAC</span>
            </p>
            <p className="md:text-lg text-md text-muted-foreground mb-2 max-w-2xl px-8 ">
              Turning big ideas into practical solutions
            </p>
          </div>
        </div>
        
        <div className="flex -mt-70 items-center justify-center flex-shrink-0 ml-8 flex-col gap-20">
          <div className="w-80 h-64  lex items-center justify-center">
             <img
          src="/hero.png" 
          alt="Hero"
          className="object-cover w-full h-full"
        />
          </div>
          <div>
            work timeline
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;