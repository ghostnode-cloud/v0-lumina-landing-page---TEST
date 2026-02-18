"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Slider } from "@/components/ui/slider"
import { Calculator, TrendingUp } from "lucide-react"

export function RoiCalculator() {
    const [revenue, setRevenue] = useState(1000000)

    // Simplified calculation: 4% avg savings identified by Lumina
    const savings = revenue * 0.047

    return (
        <div className="flex h-full flex-col justify-between">
            <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/20">
                    <Calculator className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                    Tax Savings Calculator
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                    Estimate your potential annual savings with proactive strategic planning.
                </p>
            </div>

            <div className="mt-8 space-y-6">
                <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                        <span className="font-medium text-muted-foreground">Annual Revenue</span>
                        <span className="font-bold text-foreground">
                            £{revenue.toLocaleString()}
                        </span>
                    </div>
                    <Slider
                        defaultValue={[revenue]}
                        max={10000000}
                        min={100000}
                        step={100000}
                        onValueChange={(vals) => setRevenue(vals[0])}
                        className="cursor-pointer"
                    />
                </div>

                <motion.div
                    key={savings}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="rounded-xl border border-accent/20 bg-accent/5 p-4 text-center"
                >
                    <p className="text-xs font-bold uppercase tracking-widest text-accent">
                        Est. Annual Savings
                    </p>
                    <p className="mt-1 font-serif text-3xl font-normal tracking-tight text-accent">
                        £{Math.round(savings).toLocaleString()}
                    </p>
                    <div className="mt-2 flex items-center justify-center gap-1 text-[10px] text-accent/60">
                        <TrendingUp className="h-3 w-3" />
                        <span>Based on avg. 4.7% liability reduction</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
