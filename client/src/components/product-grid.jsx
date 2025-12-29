import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    name: "Sourdough Bread",
    description: "Naturally leavened with a crispy crust and soft interior",
    price: "$8",
    image: "/artisan-sourdough.png",
  },
  {
    name: "Cinnamon Rolls",
    description: "Soft, fluffy rolls with cream cheese frosting",
    price: "$12",
    image: "/homemade-cinnamon-rolls.png",
  },
  {
    name: "Chocolate Chip Cookies",
    description: "Classic cookies with premium chocolate chunks",
    price: "$15",
    image: "/chocolate-chip-cookies.png",
  },
  {
    name: "Lemon Tart",
    description: "Tangy lemon curd in a buttery shortbread crust",
    price: "$18",
    image: "/lemon-tart-dessert.jpg",
  },
  {
    name: "Blueberry Muffins",
    description: "Moist muffins bursting with fresh blueberries",
    price: "$10",
    image: "/blueberry-muffins.png",
  },
  {
    name: "Apple Pie",
    description: "Traditional pie with cinnamon-spiced apples",
    price: "$22",
    image: "/homemade-apple-pie.png",
  },
]

export function ProductGrid() {
  return (
    <section id="products" className="py-20 md:py-32 bg-gradient-to-b from-secondary/40 to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-sans text-balance mb-6 text-foreground">Our Specialties 🍰</h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto font-mono">
            Each item is lovingly prepared using traditional recipes and the finest ingredients
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-2xl transition-all duration-300 bg-card border-4 border-border/50 rounded-3xl hover:scale-105 ${index % 2 === 0 ? "hover:-rotate-1" : "hover:rotate-1"}`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-sans font-bold text-card-foreground">{product.name}</h3>
                  <span className="text-xl font-sans font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {product.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed font-mono">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}