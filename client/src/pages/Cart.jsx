"use client"

import { NavBar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart()
  const totalPrice = getTotalPrice()
  const totalItems = getTotalItems()

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <NavBar />
        <section className="pt-32 pb-16 px-4 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <ShoppingBag className="h-24 w-24 mx-auto mb-6 text-muted-foreground/50" />
            <h1 className="text-5xl md:text-6xl font-sans text-foreground mb-4">Your Cart is Empty</h1>
            <p className="text-xl text-muted-foreground mb-8 font-mono">Add some delicious treats to get started!</p>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-lg text-lg font-sans font-semibold px-8 py-6"
            >
              <a href="/products">Browse Products</a>
            </Button>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-sans mb-6 text-foreground">Your Order</h1>
          <p className="text-2xl text-foreground/80 max-w-3xl mx-auto font-mono leading-relaxed">
            Review your delicious selections and get ready to enjoy!
          </p>
        </div>
      </section>

      {/* Cart Items */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden bg-card border-4 border-border/50 rounded-3xl hover:shadow-xl transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 border-4 border-primary/20">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-2xl font-sans font-bold text-card-foreground">{item.name}</h3>
                          <span className="text-xl font-sans font-bold text-primary">{item.price}</span>
                        </div>
                        <div className="flex items-center justify-between mt-6">
                          <div className="flex items-center gap-3 bg-muted/50 rounded-full p-2">
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8 rounded-full hover:bg-primary hover:text-primary-foreground"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="text-lg font-sans font-bold w-8 text-center">{item.quantity}</span>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 rounded-full hover:bg-primary hover:text-primary-foreground"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => removeItem(item.id)}
                            className="h-10 w-10 rounded-full hover:bg-destructive hover:text-destructive-foreground"
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-32 bg-gradient-to-br from-primary/10 to-accent/10 border-4 border-primary/30 rounded-3xl shadow-2xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-sans font-bold mb-6 text-foreground">Order Summary</h2>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-lg font-mono">
                      <span className="text-muted-foreground">Total Items:</span>
                      <span className="font-bold text-foreground">{totalItems}</span>
                    </div>
                    <div className="border-t-2 border-border/50 pt-4">
                      <div className="flex justify-between text-2xl font-sans font-bold">
                        <span className="text-foreground">Total:</span>
                        <span className="text-primary">${totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-full shadow-lg text-lg font-sans font-semibold py-6 mb-3">
                    Proceed to Checkout
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="w-full border-2 border-border/50 rounded-full text-base font-sans font-semibold mb-3 bg-transparent"
                  >
                    <a href="/products">Continue Shopping</a>
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={clearCart}
                    className="w-full text-destructive hover:text-destructive hover:bg-destructive/10 rounded-full text-base font-sans font-semibold"
                  >
                    Clear Cart
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
