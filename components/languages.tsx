const Languages = () => {
  const languages = [
    { name: "Arabe", level: "Native", percentage: 100 },
    { name: "Français", level: "B1", percentage: 70 },
    { name: "Anglais", level: "B1", percentage: 70 },
    { name: "Tamazight", level: "Maternelle", percentage: 100 },
  ]

  return (
    <section id="languages" className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">LANGUES</h2>
          <div className="mt-2 h-1 w-20 bg-teal-500 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {languages.map((language, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{language.name}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{language.level}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: `${language.percentage}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Languages
