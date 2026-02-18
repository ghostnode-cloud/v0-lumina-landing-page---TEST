"use client"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect } from "react"

const orbs = [
  {
    id: 1,
    className: "h-[600px] w-[600px] lg:h-[800px] lg:w-[800px]",
    gradient: "radial-gradient(circle, rgba(166,137,75,0.15) 0%, transparent 70%)",
    initial: { x: -100, y: -50, scale: 0.9, opacity: 0.3 },
    animate: {
      x: ["-100px", "80px", "-60px", "-100px"],
      y: ["-50px", "60px", "-80px", "-50px"],
      scale: [0.9, 1.15, 0.85, 0.9],
      opacity: [0.3, 0.55, 0.25, 0.3],
    },
    duration: 22,
    position: "left-[10%] top-[5%]" as const,
    parallax: 0.05,
  },
  {
    id: 2,
    className: "h-[400px] w-[400px] lg:h-[550px] lg:w-[550px]",
    gradient: "radial-gradient(circle, rgba(15,30,36,0.1) 0%, transparent 70%)",
    initial: { x: 60, y: 30, scale: 1, opacity: 0.2 },
    animate: {
      x: ["60px", "-40px", "80px", "60px"],
      y: ["30px", "-70px", "50px", "30px"],
      scale: [1, 0.85, 1.2, 1],
      opacity: [0.2, 0.4, 0.15, 0.2],
    },
    duration: 18,
    position: "right-[5%] top-[15%]" as const,
    parallax: -0.05,
  },
  {
    id: 3,
    className: "h-[500px] w-[500px] lg:h-[700px] lg:w-[700px]",
    gradient: "radial-gradient(circle, rgba(30,41,59,0.25) 0%, transparent 70%)",
    initial: { x: 0, y: 80, scale: 1.1, opacity: 0.3 },
    animate: {
      x: ["0px", "-70px", "50px", "0px"],
      y: ["80px", "-30px", "60px", "80px"],
      scale: [1.1, 0.9, 1.15, 1.1],
      opacity: [0.3, 0.5, 0.2, 0.3],
    },
    duration: 25,
    position: "left-[30%] bottom-[5%]" as const,
    parallax: 0.03,
  },
  {
    id: 4,
    className: "h-[300px] w-[300px] lg:h-[400px] lg:w-[400px]",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)",
    initial: { x: -30, y: -40, scale: 0.95, opacity: 0.15 },
    animate: {
      x: ["-30px", "50px", "-60px", "-30px"],
      y: ["-40px", "40px", "-20px", "-40px"],
      scale: [0.95, 1.1, 0.8, 0.95],
      opacity: [0.15, 0.35, 0.1, 0.15],
    },
    duration: 20,
    position: "right-[20%] bottom-[20%]" as const,
    parallax: -0.02,
  },
]

export function AuroraBackground() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const springConfig = { damping: 25, stiffness: 150 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Aurora orbs */}
      {orbs.map((orb) => {
        const x = useTransform(springX, (val) => val * orb.parallax)
        const y = useTransform(springY, (val) => val * orb.parallax)

        return (
          <motion.div
            key={orb.id}
            className={`absolute ${orb.position} ${orb.className}`}
            style={{
              background: orb.gradient,
              filter: "blur(100px)",
              mixBlendMode: "multiply",
              willChange: "transform",
              x,
              y,
            }}
            initial={orb.initial}
            animate={orb.animate}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        )
      })}

      {/* Radial vignette overlay -- darker at edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, hsl(45 23% 94% / 0.8) 100%)",
        }}
      />
    </div>
  )
}
