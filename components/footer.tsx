import { Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-teal-400">MF</span>
          </div>

          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-300">&copy; {currentYear} Mohamed Foullane. Tous droits réservés.</p>
          </div>

          <div className="flex items-center">
            <p className="text-gray-300 flex items-center">
              Fait avec <Heart className="h-4 w-4 text-red-500 mx-1" /> au Maroc
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
