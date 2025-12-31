import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { CartProvider } from "@/contexts/cart-context"
import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Home from "@/pages/Home"
import ProductsPage from "@/pages/Products"
import CartPage from "@/pages/Cart" // if you have a cart page

function AppLayout() {
  const location = useLocation()
  const hideNav = location.pathname === "/products"|| location.pathname === "/cart" // hide NavBar on products page

  return (
    <main className="min-h-screen">
      {!hideNav && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <AppLayout />
      </Router>
    </CartProvider>
  )
}
