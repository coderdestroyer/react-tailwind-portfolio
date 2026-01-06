import { Code, Smartphone, Brain, Download, Mail } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Profile Image & Bio */}
          <div className="flex flex-col items-center lg:items-start space-y-8">
            
            {/* --- MODIFIKASI DIMULAI DARI SINI --- */}
            {/* Wrapper ini membuat gambar berada di tengah kolom (center) */}
            <div className="w-full flex justify-center lg:justify-center"> 
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                
                {/* Ukuran gambar diperbesar: w-64 (mobile), md:w-80 (tablet), lg:w-96 (desktop) */}
                <div className="relative w-48 h-64 md:w-64 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                  <img 
                    src="/photo.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
            {/* --- MODIFIKASI BERAKHIR DI SINI --- */}

            {/* Bio Text */}
            <div className="text-center lg:text-left space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
                Information Technology Student at <br className="hidden md:block"/>
                <span className="text-primary">Universitas Sumatera Utara</span>
              </h3>
              
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                Hello! I am a passionate tech enthusiast currently pursuing my degree. 
                I love bridging the gap between creativity and logic to build software that matters.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                My technical journey is driven by three core interests: building accessible 
                <span className="text-foreground font-medium"> Web Apps</span>, crafting intuitive 
                <span className="text-foreground font-medium"> Mobile Experiences</span>, and exploring the future with 
                <span className="text-foreground font-medium"> AI & Machine Learning</span>.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2 w-full">
              <a href="#contact" className="cosmic-button flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 hover:shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column: Skill Cards */}
          <div className="flex flex-col gap-6 justify-center h-full">
            
            {/* Card 1: Web Development */}
            <div className="group gradient-border p-1 rounded-xl bg-gradient-to-br from-white/5 to-white/0 hover:from-primary/20 transition-all duration-300">
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl h-full">
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300">
                    <Code className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">Web Development</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Creating responsive, performant, and scalable web applications using modern frameworks like React and Node.js.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Mobile Development */}
            <div className="group gradient-border p-1 rounded-xl bg-gradient-to-br from-white/5 to-white/0 hover:from-primary/20 transition-all duration-300">
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl h-full">
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-lg bg-green-500/10 text-green-500 group-hover:text-green-400 group-hover:scale-110 transition-all duration-300">
                    <Smartphone className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">Mobile Development</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Building cross-platform mobile applications that provide seamless user experiences for both Android and iOS.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Machine Learning & AI */}
            <div className="group gradient-border p-1 rounded-xl bg-gradient-to-br from-white/5 to-white/0 hover:from-primary/20 transition-all duration-300">
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-xl h-full">
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300">
                    <Brain className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">Machine Learning & AI</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Analyzing data patterns and developing intelligent models to automate tasks and generate insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};