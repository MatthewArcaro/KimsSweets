import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate} from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { useCart } from "@/contexts/cart-context"
import { useState } from "react"

const allProducts = [
  {
    name: "Sourdough Bread",
    description: "Naturally leavened with a crispy crust and soft interior",
    price: "$8",
    image: "/artisan-sourdough.png",
    category: "breads",
  },
  {
    name: "Whole Wheat Bread",
    description: "Hearty and nutritious, perfect for sandwiches",
    price: "$7",
    image: "/placeholder.svg?height=400&width=400",
    category: "breads",
  },
  {
    name: "Rosemary Focaccia",
    description: "Italian flatbread with fresh rosemary and olive oil",
    price: "$10",
    image: "/placeholder.svg?height=400&width=400",
    category: "breads",
  },
  {
    name: "French Baguette",
    description: "Classic crispy baguette with airy crumb",
    price: "$6",
    image: "/placeholder.svg?height=400&width=400",
    category: "breads",
  },

  {
    name: "Cinnamon Rolls",
    description: "Soft, fluffy rolls with cream cheese frosting",
    price: "$12",
    image: "/homemade-cinnamon-rolls.png",
    category: "pastries",
  },
  {
    name: "Croissants",
    description: "Buttery, flaky French pastries baked fresh daily",
    price: "$5",
    image: "/placeholder.svg?height=400&width=400",
    category: "pastries",
  },

  {
    name: "Chocolate Chip Cookies",
    description: "Classic cookies with premium chocolate chunks",
    price: "$15",
    image: "/chocolate-chip-cookies.png",
    category: "cookies",
  },

  {
    name: "Lemon Tart",
    description: "Tangy lemon curd in a buttery shortbread crust",
    price: "$18",
    image: "/lemon-tart-dessert.jpg",
    category: "cakes",
  },

  {
    name: "Blueberry Muffins",
    description: "Moist muffins bursting with fresh blueberries",
    price: "$10",
    image: "/blueberry-muffins.png",
    category: "muffins",
  },
]

export default function ProductsPage() {
  const navigate = useNavigate()
  const { addItem, getTotalItems } = useCart()
  const totalItems = getTotalItems()

  return (
    <main className="min-h-screen bg-background">
      <Link
        to="/"
        className="absolute top-4 left-4 z-50 text-primary text-3xl font-bold hover:text-secondary"
      >
        ←
      </Link>
      <button
        className="absolute top-4 right-4 z-50 text-primary text-3xl hover:text-secondary flex items-center gap-2"
        onClick={() => navigate("/cart")}
      >
        <FaShoppingCart />
        {totalItems > 0 && (
          <span className="text-lg font-bold bg-secondary text-white rounded-full w-6 h-6 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl mb-6 font-bold font-sans">
            Baked Fresh Daily
          </h1>
          <p className="text-2xl max-w-3xl mx-auto">
            Explore our homemade breads, pastries, cookies, cakes, and more
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="all">
            <TabsList className="flex justify-center mb-12">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="breads">Breads</TabsTrigger>
              <TabsTrigger value="pastries">Pastries</TabsTrigger>
              <TabsTrigger value="cookies">Cookies</TabsTrigger>
              <TabsTrigger value="cakes">Cakes</TabsTrigger>
              <TabsTrigger value="muffins">Muffins</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <ProductList products={allProducts} addItem={addItem} />
            </TabsContent>

            <TabsContent value="breads">
              <ProductList products={allProducts.filter(p => p.category === "breads")} addItem={addItem} />
            </TabsContent>

            <TabsContent value="pastries">
              <ProductList products={allProducts.filter(p => p.category === "pastries")} addItem={addItem} />
            </TabsContent>

            <TabsContent value="cookies">
              <ProductList products={allProducts.filter(p => p.category === "cookies")} addItem={addItem} />
            </TabsContent>

            <TabsContent value="cakes">
              <ProductList products={allProducts.filter(p => p.category === "cakes")} addItem={addItem} />
            </TabsContent>

            <TabsContent value="muffins">
              <ProductList products={allProducts.filter(p => p.category === "muffins")} addItem={addItem} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  )
}

function ProductList({ products, addItem }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} addItem={addItem} />
      ))}
    </div>
  )
}

function ProductCard({ product, addItem }) {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addItem({
      id: product.name,
      name: product.name,
      price: product.price,
      image: product.image
    })
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  return (
    <Card className="overflow-hidden rounded-3xl">
      <div className="aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold font-sans tracking-wide">{product.name}</h3>
        <p className="text-sm mb-2">{product.description}</p>
        <span className="font-bold">{product.price}</span>
        <Button 
          className="w-full mt-4"
          onClick={handleAddToCart}
        >
          {isAdded ? "Added to cart!" : "Add to Order"}
        </Button>
      </CardContent>
    </Card>
  )
}