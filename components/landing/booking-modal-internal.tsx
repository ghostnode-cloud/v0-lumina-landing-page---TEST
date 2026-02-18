"use client"

import { useState } from "react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CalendarDays } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function BookingModal({
    open,
    onOpenChange,
}: {
    open: boolean
    onOpenChange: (open: boolean) => void
}) {
    const [selectedConcern, setSelectedConcern] = useState<string | null>(null)

    const concerns = [
        "Equity compensation",
        "R&D tax credits",
        "Entity structure",
        "Multi-state / remote team",
        "Upcoming exit or liquidity event",
    ]

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="glass-card border-border/30 sm:max-w-lg">
                <DialogHeader className="gap-2">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                        <CalendarDays className="h-6 w-6 text-accent" />
                    </div>
                    <DialogTitle className="text-center font-sans text-2xl font-extrabold tracking-tight text-foreground">
                        Book Your Tax Strategy Session
                    </DialogTitle>
                    <DialogDescription className="text-center text-muted-foreground">
                        Direct access to Marcus Chen — no gatekeepers. No runaround, no layers of junior staff.
                    </DialogDescription>
                </DialogHeader>

                <form
                    className="mt-4 flex flex-col gap-4"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="booking-name" className="text-sm text-foreground">
                            Full Name
                        </Label>
                        <Input
                            id="booking-name"
                            placeholder="Your name"
                            className="border-border/30 bg-background/50"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="booking-email" className="text-sm text-foreground">
                            Email
                        </Label>
                        <Input
                            id="booking-email"
                            type="email"
                            placeholder="you@company.com"
                            className="border-border/30 bg-background/50"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label
                            htmlFor="booking-company"
                            className="text-sm text-foreground"
                        >
                            Company
                        </Label>
                        <Input
                            id="booking-company"
                            placeholder="Your company name"
                            className="border-border/30 bg-background/50"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label
                            htmlFor="booking-message"
                            className="text-sm text-foreground"
                        >
                            What would you like to discuss?
                        </Label>
                        <Textarea
                            id="booking-message"
                            placeholder="Briefly describe your tax situation or goals..."
                            rows={3}
                            className="border-border/30 bg-background/50 resize-none"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label className="text-sm text-foreground">
                            What&apos;s your biggest tax concern?
                            <span className="ml-1 text-xs font-normal text-muted-foreground">
                                (Optional)
                            </span>
                        </Label>
                        <div className="flex flex-wrap gap-2">
                            {concerns.map((concern) => {
                                const isSelected = selectedConcern === concern
                                return (
                                    <button
                                        key={concern}
                                        type="button"
                                        onClick={() =>
                                            setSelectedConcern(isSelected ? null : concern)
                                        }
                                        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                                    >
                                        <Badge
                                            variant={isSelected ? "default" : "secondary"}
                                            className={
                                                isSelected
                                                    ? "border-transparent bg-accent text-accent-foreground hover:bg-accent/90"
                                                    : "border-border/40 bg-background/40 text-foreground hover:bg-background/70"
                                            }
                                        >
                                            {concern}
                                        </Badge>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    <Button
                        type="submit"
                        size="lg"
                        className="mt-2 w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                        Request Session
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                        {"We'll respond within 4 hours during business days."}
                    </p>
                </form>
            </DialogContent>
        </Dialog>
    )
}
