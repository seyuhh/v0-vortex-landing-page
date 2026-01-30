"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("/images/photo-2026-01-19-2012.jpeg")`,
          backgroundSize: '80px',
          backgroundRepeat: 'repeat',
        }} />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-8"
        >
          {/* Logo */}
          <motion.img
            src="/images/photo-2026-01-19-2012.jpeg"
            alt="Vortex Logo"
            className="w-20 h-20 md:w-24 md:h-24"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            <span className="text-foreground">Claim</span>{" "}
            <span className="text-primary">Vortex</span>{" "}
            <span className="text-foreground">Airdrop</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
            Claim Vortex Airdrop with your active wallets that have been used to deploy on Vortex, Offer is for both old and new users.
          </p>
          
          {/* Celebratory message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 text-sm text-primary/80"
          >
            <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse" />
            Celebrating 10,000+ successful launches and growing
          </motion.div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
            >
              Claim Airdrop
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:bg-secondary/50 text-foreground px-8 py-6 text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              Explore Vortex
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
