"use client"

import { motion } from "framer-motion"
import { Rocket, Target, Shield, Clock } from "lucide-react"

const features = [
  {
    icon: Rocket,
    title: "Instant Deployment",
    description: "Launch tokens in seconds with our streamlined deployment process.",
  },
  {
    icon: Target,
    title: "Precision Sniping",
    description: "Advanced sniping tools designed for maximum accuracy and speed.",
  },
  {
    icon: Shield,
    title: "Reliable & Secure",
    description: "Built with enterprise-grade security and 99.9% uptime guarantee.",
  },
  {
    icon: Clock,
    title: "Lightning Fast",
    description: "Optimized infrastructure for sub-second transaction execution.",
  },
]

export function AboutSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Built for <span className="text-primary">Dominance</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Vortex is a powerful token-launching platform engineered for speed, precision, 
              and market dominance. Whether you&apos;re deploying your first token or your 
              hundredth, Vortex gives you the tools to move first and move fast.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-primary rounded-full" />
              <p className="text-foreground font-medium">
                The platform trusted by elite traders and developers worldwide.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-colors duration-300"
              >
                <feature.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
