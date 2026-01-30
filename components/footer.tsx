export function Footer() {
  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/images/photo-2026-01-19-2012.jpeg"
              alt="Vortex Logo"
              className="w-8 h-8"
            />
            <span className="text-lg font-semibold text-foreground">Vortex</span>
          </div>
          
          <p className="text-muted-foreground text-sm">
            Built for those who move first.
          </p>
          
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Vortex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
