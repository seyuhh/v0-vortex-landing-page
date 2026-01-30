"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, Twitter } from "lucide-react"

export function CommunitySection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("/images/photo-2026-01-19-2012.jpeg")`,
          backgroundSize: '60px',
          backgroundRepeat: 'repeat',
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join the <span className="text-primary">Vortex</span> Community
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Celebrate our success together. Join thousands of traders and developers 
            in the Vortex community. Stay updated on the latest features, airdrops, 
            and opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-6 text-lg font-semibold shadow-lg transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Join Discord
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary/50 text-foreground px-8 py-6 text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              <Twitter className="w-5 h-5 mr-2" />
              Follow on X
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
