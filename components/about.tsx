import { User, MapPin, Mail, Phone, Linkedin } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">PROFIL</h2>
          <div className="mt-2 h-1 w-20 bg-teal-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
              Développeur full stack et étudiant à YouCode, je recherche un stage PFA (Projet de Fin d'Année) en
              développement web d'une durée de deux mois à partir du 15 mai. Je suis disponible pour toute opportunité
              ou recommandation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center">
                <User className="h-5 w-5 text-teal-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Mohamed Foullane</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-teal-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Agadir</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-teal-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">mohamdefoullane4@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-teal-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">+212 647 93 29 75</span>
              </div>
              <div className="flex items-center">
                <Linkedin className="h-5 w-5 text-teal-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">mohamed-foullane</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
