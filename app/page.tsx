import { MoveDown } from "lucide-react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Languages from "@/components/languages"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <main>
        <Hero />
        <div className="flex justify-center my-8">
          <div className="animate-bounce bg-teal-500 p-2 w-10 h-10 ring-1 ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
            <MoveDown className="text-white" />
          </div>
        </div>
        <About />
        <Skills />
        <Education />
        <Projects />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
