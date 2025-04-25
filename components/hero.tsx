import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section
      id="home"
      className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              <span className="block">FOULLANE</span>
              <span className="block text-teal-600 dark:text-teal-400">MOHAMED</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">FULL STACK DEVELOPER</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg">
              Développeur full stack et étudiant à YouCode, je recherche un stage PFA (Projet de Fin d'Année) en
              développement web d'une durée de deux mois à partir du 15 mai.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600">
                <Download className="mr-2 h-4 w-4" /> Télécharger CV
              </Button>
              <Button
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-gray-800"
              >
                Contactez-moi <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-500 dark:border-teal-400 shadow-xl">
              <img
                src="/placeholder.svg?height=320&width=320"
                alt="Mohamed Foullane"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
