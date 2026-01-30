"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const TWO_HOURS_IN_SECONDS = 2 * 60 * 60

export function AirdropSection() {
  const [timeLeft, setTimeLeft] = useState(TWO_HOURS_IN_SECONDS)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return TWO_HOURS_IN_SECONDS
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = Math.floor(timeLeft / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60

  const formatTime = (num: number) => num.toString().padStart(2, "0")

  return (
    <section className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Vortex Airdrop — <span className="text-primary">Rewarding Loyalty</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            We&apos;re giving back to our loyal and active users through an exclusive airdrop. 
            This celebration marks our milestones, community support, and platform success.
          </p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center items-center gap-4 md:gap-6"
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-card border border-border flex items-center justify-center">
                <span className="text-3xl md:text-5xl font-bold text-foreground">{formatTime(hours)}</span>
              </div>
              <span className="text-muted-foreground text-sm mt-2">Hours</span>
            </div>
            <span className="text-3xl md:text-5xl font-bold text-primary">:</span>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-card border border-border flex items-center justify-center">
                <span className="text-3xl md:text-5xl font-bold text-foreground">{formatTime(minutes)}</span>
              </div>
              <span className="text-muted-foreground text-sm mt-2">Minutes</span>
            </div>
            <span className="text-3xl md:text-5xl font-bold text-primary">:</span>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-card border border-border flex items-center justify-center">
                <span className="text-3xl md:text-5xl font-bold text-foreground">{formatTime(seconds)}</span>
              </div>
              <span className="text-muted-foreground text-sm mt-2">Seconds</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
