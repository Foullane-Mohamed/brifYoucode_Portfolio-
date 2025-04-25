import { Code, Database, GitBranch, Layout, Briefcase, Clock, Lightbulb, Users } from "lucide-react"

const Skills = () => {
  const technicalSkills = [
    {
      title: "Frontend et Backend",
      skills: "HTML5, CSS3, Javascript, Tailwind, React.js, Node.js, Express.js, PHP Laravel",
      icon: <Code className="h-6 w-6 text-teal-500" />,
    },
    {
      title: "Bases de Données",
      skills: "MySQL, MongoDB, PostgreSQL",
      icon: <Database className="h-6 w-6 text-teal-500" />,
    },
    {
      title: "Gestion de Projet & Conception",
      skills: "Conception UML, Méthodes Agile & Scrum",
      icon: <Briefcase className="h-6 w-6 text-teal-500" />,
    },
    {
      title: "Outils & Déploiement",
      skills: "Git, GitHub, Hébergement web, Optimisation des performances web",
      icon: <GitBranch className="h-6 w-6 text-teal-500" />,
    },
  ]

  const softSkills = [
    {
      title: "Travail d'équipe",
      icon: <Users className="h-6 w-6 text-teal-500" />,
    },
    {
      title: "Adaptabilité",
      icon: <Layout className="h-6 w-6 text-teal-500" />,
    },
    {
      title: "Gestion du temps",
      icon: <Clock className="h-6 w-6 text-teal-500" />,
    },
    {
      title: "Créativité",
      icon: <Lightbulb className="h-6 w-6 text-teal-500" />,
    },
  ]

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">COMPÉTENCES</h2>
          <div className="mt-2 h-1 w-20 bg-teal-500 mx-auto"></div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">COMPÉTENCES TECHNIQUES</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105"
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{skill.icon}</div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{skill.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{skill.skills}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">COMPÉTENCES TRANSVERSALES</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105"
              >
                <div className="mb-4">{skill.icon}</div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">{skill.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
