const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background decoration */}

  
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6">
            <span className="text-primary">Alain Ballen</span>
          </h1>
  
          <div className="flex flex-col sm:flex-col gap-1 justify-center items-start">
            <div  className="text-lg px-8 ">
              View my projects 
            </div>
            <div  className="text-lg px-8 ">
              Check out my resume
            </div>
            <div  className="text-lg px-8 py-1 bg-transparent">
              Get In Touch
            </div>
            <div className="text-md px-9">
            Email
            </div>
            <div className="text-md px-9">
            LinkedIn
            </div>
            <div className="text-md px-9">
            GitHub
            </div>
          </div>
          <div className="flex flex-col mt-5 items-start">
          <p className="text-xl sm:text-2xl text-muted-foreground text-pretty max-w-2xl px-8 leading-relaxed">
            Developer @ MPAC
          </p>
          <p className="text-xl sm:text-2xl text-muted-foreground text-pretty mb-8 max-w-2xl px-8 leading-relaxed">
            Turning big ideas into practical solutions
          </p>
          </div>
  
          {/* Skills badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-card-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    )
}

export default HeroSection;