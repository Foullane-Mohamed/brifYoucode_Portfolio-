import { GraduationCap, BookOpen } from "lucide-react"

const Education = () => {
  const educations = [
    {
      title: "FULL STACK DEVELOPER",
      institution: "YouCode Maroc | UM6P",
      icon: <GraduationCap className="h-10 w-10 text-teal-500" />,
      location: "Youssofia",
    },
    {
      title: "LICENCE FONDAMENTALE",
      institution: "Economie et gestion, Universite Ibn Zohr",
      icon: <BookOpen className="h-10 w-10 text-teal-500" />,
      location: "",
    },
    {
      title: "ATTESTATION DU BACCALAUREAT",
      institution: "Série Sciences de la Vie et de la Terre, inscrite à l'établissement L.Q. Assafa",
      icon: <GraduationCap className="h-10 w-10 text-teal-500" />,
      location: "",
    },
  ]

  return (
    <section id="education" className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">FORMATIONS ET DIPLÔMES</h2>
          <div className="mt-2 h-1 w-20 bg-teal-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-teal-200 dark:bg-teal-900"></div>

            {/* Education items */}
            <div className="space-y-12">
              {educations.map((education, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="md:w-1/2 mb-8 md:mb-0">
                    <div
                      className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md ${index % 2 === 0 ? "md:ml-8" : "md:mr-8"}`}
                    >
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{education.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-2">{education.institution}</p>
                      {education.location && (
                        <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm">{education.location}</p>
                      )}
                    </div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-teal-500 dark:border-teal-400">
                    {education.icon}
                  </div>

                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
