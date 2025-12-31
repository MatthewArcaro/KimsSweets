import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-pink-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-balance mb-4 text-foreground">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground font-medium">
              Ask any questions you may have, We will personally get back to you ASAP❤️
            </p>
          </div>
          
          <Card className="bg-white border-4 border-pink-100 shadow-xl rounded-3xl">
            <CardContent className="p-8">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-pink-100 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-pink-100 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-pink-100 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none transition-all"
                    placeholder="Tell us what you'd like to order or ask us anything..."
                  />
                </div>
                <Button 
                  className="w-full bg-pink-500 text-white hover:bg-pink-600 rounded-full py-6 text-lg font-bold shadow-lg" 
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}