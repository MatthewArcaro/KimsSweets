export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-serif mb-4 text-foreground">Kim's Sweets 🧁</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Homemade baked goods crafted with love and care since 2018. 
              Small batch, big flavor.
            </p>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-mono text-sm mb-4 text-foreground uppercase tracking-wider">Hours</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Tuesday - Saturday</p>
              <p>8:00 AM - 4:00 PM</p>
              <p className="text-xs mt-4 italic font-medium text-primary">Pre-orders recommended</p>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-mono text-sm mb-4 text-foreground uppercase tracking-wider">Connect</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="hover:text-primary transition-colors cursor-pointer">hello@kimssweets.com</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-primary font-bold hover:underline transition-all">
                  Instagram
                </a>
                <a href="#" className="text-primary font-bold hover:underline transition-all">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Kim's Sweets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}