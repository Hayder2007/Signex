'use client'

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-semibold text-foreground">Signex</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Trustless peer-to-peer trading for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground">Product</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://app.signex.site" className="text-sm text-muted-foreground transition-smooth hover:text-accent">
                  Launch App
                </a>
              </li>
              <li>
                <a href="https://exultant-background-1d4.notion.site/Signex-Full-Documentation-2b07f5420c3a80b69412cfafdfef9eb9" className="text-sm text-muted-foreground transition-smooth hover:text-accent">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground">Support</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a 
                  href="mailto:0xh4yder@gmail.com" 
                  className="text-sm text-muted-foreground transition-smooth hover:text-accent"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-semibold text-foreground">Socials</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://x.com/Signex_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-smooth hover:text-accent"
                >
                  X
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/D2R68AwgTG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-smooth hover:text-accent"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Hayder2007/Signex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-smooth hover:text-accent"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © 2025 Signex. All rights reserved.
          </p>
          <div className="flex gap-6">
            
          </div>
        </div>
      </div>
    </footer>
  )
}
