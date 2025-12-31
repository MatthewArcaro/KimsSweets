import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export function Hero() {
  const navigate = useNavigate()
  return (
    <section
      id="home"
      className="pt-40 pb-20 md:pt-48 md:pb-32 bg-gradient-to-br from-secondary/60 via-background to-muted/40"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-8xl font-sans leading-tight text-foreground">
              Freshly Baked
              <br />
              <span className="text-primary">with Love ❤️</span>
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-lg font-mono">
              Welcome to Kim's Sweets, where every treat is made from scratch in our home kitchen. 
              Experience the warmth of homemade baking delivered fresh to your door.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button
                size="lg"
                onClick={() => navigate("/products")} // Redirects client-side
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-xl text-lg font-sans font-bold px-8 py-6"
              >
                View Menu
              </Button>
            </div>
          </div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-secondary/60 rotate-2 hover:rotate-0 transition-transform duration-300 w-80 md:w-96 lg:w-[30rem] ml-16">
            <img
              src="/Buns.png"
              alt="Fresh baked goods"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}