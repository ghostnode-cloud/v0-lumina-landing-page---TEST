"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const symbols = ["£", "$", "%", "20", "40", "12", "02", "15", "∑", "∆"]

export function FloatingNumbers() {
    const [elements, setElements] = useState<{ id: number, x: number, y: number, scale: number, duration: number, delay: number, text: string }[]>([])

    useEffect(() => {
        const newElements = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            scale: 0.5 + Math.random() * 1,
            duration: 10 + Math.random() * 20,
            delay: Math.random() * -20,
            text: symbols[Math.floor(Math.random() * symbols.length)]
        }))
        setElements(newElements)
    }, [])

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
            {elements.map((el) => (
                <motion.div
                    key={el.id}
                    className="absolute font-serif text-4xl font-bold text-primary"
                    initial={{
                        x: `${el.x}%`,
                        y: `${el.y}%`,
                        opacity: 0,
                        scale: el.scale
                    }}
                    animate={{
                        y: [`${el.y}%`, `${el.y - 10}%`, `${el.y}%`],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: el.duration,
                        delay: el.delay,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {el.text}
                </motion.div>
            ))}
        </div>
    )
}
