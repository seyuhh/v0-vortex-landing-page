"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
}

function AnimatedCounter({ value, suffix = "", duration = 2 }: AnimatedCounterProps) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => {
    if (latest >= 1000000) {
      return `${(latest / 1000000).toFixed(1)}M`
    }
    if (latest >= 1000) {
      return `${(latest / 1000).toFixed(0)}K`
    }
    return Math.round(latest).toLocaleString()
  })

  useEffect(() => {
    if (!hasAnimated) return
    const controls = animate(count, value, { duration })
    return controls.stop
  }, [count, value, duration, hasAnimated])

  return (
    <motion.span
      onViewportEnter={() => setHasAnimated(true)}
      viewport={{ once: true }}
      className="tabular-nums"
    >
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  )
}

const stats = [
  { value: 50000, suffix: "+", label: "Tokens Launched" },
  { value: 25000, suffix: "+", label: "Active Users" },
  { value: 2500000, suffix: "+", label: "Transactions" },
]

export function StatsSection() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Numbers That <span className="text-primary">Speak</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Our growth is powered by the trust and success of our community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center p-8 rounded-2xl bg-card/50 border border-border"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
