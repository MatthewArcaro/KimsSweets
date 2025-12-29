import { NavBar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/product-grid"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function App() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <ProductGrid />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}