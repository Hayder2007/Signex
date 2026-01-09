"use client"

import { useIsMobile, getSignexAppUrl } from "@/hooks/use-mobile"

export function FooterSection() {
  const isMobile = useIsMobile()

  return (
    <footer id="footer" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 md:py-12 sm:px-6 lg:px-8">
        {isMobile ? (
          <div className="flex flex-col items-center gap-6">
            {/* Social icons row */}
            <div className="flex gap-6">
              <a
                href="https://x.com/Signex_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-smooth"
                aria-label="X"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://discord.gg/D2R68AwgTG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-smooth"
                aria-label="Discord"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a>
              <a
                href="https://github.com/Hayder2007/Signex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-smooth"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>

            {/* Quick links row */}
            <div className="flex gap-6 text-sm">
              <a href={getSignexAppUrl(true)} className="text-muted-foreground hover:text-accent transition-smooth">
                Launch
              </a>
              <a href="https://docs.signex.site" className="text-muted-foreground hover:text-accent transition-smooth">
                Docs
              </a>
              <a href="mailto:0xh4yder@gmail.com" className="text-muted-foreground hover:text-accent transition-smooth">
                Contact
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-muted-foreground">© 2025 Signex. All rights reserved.</p>
          </div>
        ) : (
          /* Desktop Layout - Original grid */
          <>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              {/* Brand */}
              <div>
                <h3 className="font-semibold text-foreground">Signex</h3>
                <p className="mt-2 text-sm text-muted-foreground">Trustless peer-to-peer trading for everyone.</p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-foreground">Product</h4>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a
                      href={getSignexAppUrl(false)}
                      className="text-sm text-muted-foreground transition-smooth hover:text-accent"
                    >
                      Launch App
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.signex.site"
                      className="text-sm text-muted-foreground transition-smooth hover:text-accent"
                    >
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
              <p className="text-sm text-muted-foreground">© 2025 Signex. All rights reserved.</p>
              <div className="flex gap-6"></div>
            </div>
          </>
        )}
      </div>
    </footer>
  )
}
