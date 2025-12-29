import { Button } from "@/components/ui/button"

export function NavBar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-sm border-4 border-pink-200 rounded-full shadow-xl w-[95%] max-w-5xl">
      <div className="px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="text-3xl tracking-tight text-pink-600 font-bold">Kim's Sweets 🧁</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="font-semibold text-gray-700 hover:text-pink-600 transition-colors">Home</a>
            <a href="#products" className="font-semibold text-gray-700 hover:text-pink-600 transition-colors">Products</a>
            <a href="#about" className="font-semibold text-gray-700 hover:text-pink-600 transition-colors">About</a>
            <a href="#contact" className="font-semibold text-gray-700 hover:text-pink-600 transition-colors">Contact</a>
          </div>
          <Button className="bg-pink-500 text-white hover:bg-pink-600 rounded-full shadow-lg px-6">
            Order Now
          </Button>
        </div>
      </div>
    </nav>
  )
}