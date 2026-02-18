"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { MousePointer2, TrendingUp, Sparkles } from "lucide-react"
import React from "react"

export function StrategicInsightCard() {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <div className="group perspective-1000 relative">
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateY,
                    rotateX,
                    transformStyle: "preserve-3d",
                }}
                className="relative h-72 w-full max-w-[340px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-colors duration-500 hover:bg-white/[0.05]"
            >
                {/* Animated background glow */}
                <div
                    className="absolute -inset-[100%] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                        background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
                        transform: "translateZ(-1px)"
                    }}
                />

                <div
                    style={{
                        transform: "translateZ(50px)",
                        transformStyle: "preserve-3d",
                    }}
                    className="flex h-full flex-col justify-between"
                >
                    <div className="flex items-start justify-between">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/20 text-accent ring-1 ring-accent/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-accent/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                            <TrendingUp className="h-6 w-6" />
                        </div>
                        <div className="flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-tighter text-white/40 ring-1 ring-white/10 group-hover:text-accent/60 group-hover:ring-accent/20">
                            <Sparkles className="h-3 w-3" />
                            <span>Live Projection</span>
                        </div>
                    </div>

                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <div className="h-1 w-8 rounded-full bg-accent/50" />
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/80">
                                Strategic Insight
                            </p>
                        </div>
                        <h3 className="text-3xl font-bold tracking-tight text-white">
                            $124,500
                        </h3>
                        <p className="mt-1 text-sm font-medium text-white/70">
                            Potential Savings Identified
                        </p>
                        <p className="mt-4 text-[13px] leading-relaxed text-white/40">
                            Unclaimed R&D credits detected from Q4 development cycles and
                            eligible entity restructuring.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 pt-4">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="h-6 w-6 rounded-full border-2 border-[#0B0F1A] bg-accent/20 text-[8px] flex items-center justify-center text-accent ring-1 ring-accent/20"
                                >
                                    {i}
                                </div>
                            ))}
                        </div>
                        <span className="text-[10px] font-medium text-white/30">
                            +4 more optimizations found
                        </span>
                    </div>
                </div>

                {/* Dynamic Inner Glow */}
                <motion.div
                    className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                        background: useTransform(
                            [mouseXSpring, mouseYSpring],
                            ([x, y]) => {
                                return `radial-gradient(circle at ${Number(x) * 100 + 50}% ${Number(y) * 100 + 50}%, rgba(255, 255, 255, 0.08) 0%, transparent 60%)`
                            }
                        )
                    }}
                />
            </motion.div>

            {/* Decorative shadow/glow behind */}
            <div className="absolute -bottom-4 left-1/2 -z-10 h-10 w-4/5 -translate-x-1/2 bg-accent/20 blur-2xl transition-all duration-500 group-hover:bg-accent/30 group-hover:blur-3xl" />
        </div>
    )
}
