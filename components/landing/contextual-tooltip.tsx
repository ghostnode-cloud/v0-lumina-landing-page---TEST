"use client"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Info } from "lucide-react"

interface ContextualTooltipProps {
    term: string
    definition: string
}

export function ContextualTooltip({ term, definition }: ContextualTooltipProps) {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={300}>
                <TooltipTrigger asChild>
                    <span className="group relative cursor-help border-b border-dashed border-accent text-foreground transition-colors hover:text-accent">
                        {term}
                        <Info className="ml-1 inline-block h-3 w-3 opacity-20 transition-opacity group-hover:opacity-100" />
                    </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs p-3 glass-card bg-popover/90 text-xs leading-relaxed">
                    <p>{definition}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
