import { ExternalLink, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

const Projects = () => {
  const projects = [
    {
      title: 'Projet de site "Events" pour l\'entreprise Al-Moutamir',
      description:
        "Création d'un site web dédié à l'organisation et à la gestion d'événements pour l'entreprise Al-Moutamir lors d'un hackathon organisé par YouCode à Safi. L'objectif du projet était de concevoir une plateforme permettant d'afficher les événements.",
      technologies: "Technologies utilisées: Next.js, Laravel, MySQL",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: 'Projet de site "Youdemy"',
      description:
        "Développement d'un site web des cours en ligne avec HTML et TAILWIND CSS et PHP qui vise à révolutionner l'apprentissage en proposant un système interactif et personnalisé pour les étudiants et les enseignants.",
      technologies: "Technologies utilisées: HTML, Tailwind CSS, PHP",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">PROJETS RÉALISÉS</h2>
          <div className="mt-2 h-1 w-20 bg-teal-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <p className="text-sm text-teal-600 dark:text-teal-400 mb-5">{project.technologies}</p>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-teal-500 text-teal-500 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-gray-700"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" /> Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-teal-500 text-teal-500 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-gray-700"
                  >
                    <Code className="h-4 w-4 mr-2" /> Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
