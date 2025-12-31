import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Home from "@/pages/Home"
import ProductsPage from "@/pages/Products"

function AppLayout() {
  const location = useLocation()
  const hideNav = location.pathname === "/products" // hide on products page

  return (
    <main className="min-h-screen">
      {!hideNav && <NavBar />} {/* only render NavBar if not hiding */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}
