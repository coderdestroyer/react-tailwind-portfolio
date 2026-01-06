import { useState } from "react";
import { cn } from "@/lib/utils"; // Pastikan path ini sesuai struktur project Anda

// Import ikon dari react-icons (Simple Icons set)
import { 
  SiLaravel, 
  SiTailwindcss, 
  SiMysql, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiFlutter, 
  SiC, 
  SiCplusplus
} from "react-icons/si";

const skills = [
  // Frontend
  { name: "React.js", icon: SiReact, category: "frontend", color: "text-blue-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "frontend", color: "text-cyan-400" },
  { name: "JavaScript", icon: SiJavascript, category: "frontend", color: "text-yellow-400" },

  // Backend
  { name: "Laravel", icon: SiLaravel, category: "backend", color: "text-red-600" },
  { name: "Node.js", icon: SiNodedotjs, category: "backend", color: "text-green-500" },
  { name: "MySQL", icon: SiMysql, category: "backend", color: "text-blue-600" },
  { name: "MongoDB", icon: SiMongodb, category: "backend", color: "text-green-600" },

  // Mobile
  { name: "Flutter", icon: SiFlutter, category: "mobile", color: "text-blue-400" },

  // Languages (General Programming)
  { name: "C", icon: SiC, category: "languages", color: "text-blue-500" },
  { name: "C++", icon: SiCplusplus, category: "languages", color: "text-blue-600" },
];

const categories = ["all", "frontend", "backend", "mobile", "languages"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full transition-all duration-300 capitalize text-sm md:text-base font-medium border border-transparent",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-background text-muted-foreground hover:border-primary/50 hover:text-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="group bg-card p-6 rounded-2xl shadow-sm border border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-xl cursor-default"
            >
              {/* Icon Wrapper dengan efek glow saat hover */}
              <div className="p-4 rounded-full bg-secondary/50 group-hover:bg-background transition-colors duration-300 relative">
                <skill.icon 
                  className={cn(
                    "w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110", 
                    skill.color // Menggunakan warna brand asli
                  )} 
                />
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold text-base md:text-lg text-foreground group-hover:text-primary transition-colors">
                   {skill.name}
                </h3>
                {/* Opsional: Menampilkan kategori kecil di bawah nama */}
                <span className="text-xs text-muted-foreground capitalize mt-1 block">
                    {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pesan jika tidak ada skill di kategori tertentu (Empty State) */}
        {filteredSkills.length === 0 && (
            <p className="text-center text-muted-foreground col-span-full py-12">
                No skills found in this category.
            </p>
        )}
      </div>
    </section>
  );
};