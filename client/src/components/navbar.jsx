import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function NavBar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-sm border-4 border-pink-200 rounded-full shadow-xl w-[95%] max-w-5xl">
      <div className="px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl tracking-tight text-pink-600 font-bold"
          >
            Kim&apos;s Sweets 🧁
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-semibold text-gray-700 hover:text-pink-600 transition-colors"
            >
              Home
            </Link>

            {/* These still scroll on Home */}
            <a
              href="/#about"
              className="font-semibold text-gray-700 hover:text-pink-600 transition-colors"
            >
              About
            </a>

            <a
              href="/#contact"
              className="font-semibold text-gray-700 hover:text-pink-600 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* ORDER NOW BUTTON*/}
          <Link to="/products">
            <Button className="bg-pink-500 text-white hover:bg-pink-600 rounded-full shadow-lg px-6">
              Order Now
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
