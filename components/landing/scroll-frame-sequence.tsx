"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useBookingModal } from "./booking-modal";
import { LearnMoreModal } from "./learn-more-modal";
import { Magnetic } from "./magnetic";

interface ScrollFrameSequenceProps {
    frameCount: number;
    baseUrl: string;
    extension: string;
}

export function ScrollFrameSequence({ frameCount, baseUrl, extension }: ScrollFrameSequenceProps) {
    const { openModal } = useBookingModal();
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // SUPER SMOOTH PHYSICS: 15 stiffness / 30 damping for that luxurious "float"
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 15,
        damping: 30,
        restDelta: 0.0001
    });

    // --- THREE ANCHOR POINTS LOGIC (80 frames per phase) ---
    // Anchor 1: Phase 1 (Frame 1-80)
    // Anchor 2: Phase 2 (Frame 81-160)
    // Anchor 3: Hero End (Frame 161-240)
    const frameIndexMotion = useTransform(
        smoothProgress,
        [0, 0.25, 0.45, 0.65, 0.85, 1], // Scroll benchmarks for dwell stops
        [1, 80, 80, 160, 160, 240]      // Exact 80-frame chapter mapping
    );

    // Preload images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            const frameNum = i.toString().padStart(4, "0");
            img.src = `${baseUrl}${frameNum}${extension}`;
            img.onload = () => {
                loadedCount++;
                setImagesLoaded(loadedCount);
            };
            loadedImages.push(img);
        }
        imagesRef.current = loadedImages;
    }, [frameCount, baseUrl, extension]);

    // Render to canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || imagesLoaded < frameCount) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const render = (val: number) => {
            const index = Math.max(0, Math.min(frameCount - 1, Math.floor(val) - 1));
            const img = imagesRef.current[index];
            if (img && img.complete) {
                const canvasAspect = canvas.width / canvas.height;
                const imgAspect = img.width / img.height;
                let drawWidth, drawHeight, offsetX, offsetY;

                if (canvasAspect > imgAspect) {
                    drawWidth = canvas.width; drawHeight = canvas.width / imgAspect;
                    offsetX = 0; offsetY = -(drawHeight - canvas.height) / 2;
                } else {
                    drawHeight = canvas.height; drawWidth = canvas.height * imgAspect;
                    offsetX = -(drawWidth - canvas.width) / 2; offsetY = 0;
                }

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }
        };

        render(frameIndexMotion.get());
        const unsubscribe = frameIndexMotion.on("change", (latest) => render(latest));
        return () => unsubscribe();
    }, [imagesLoaded, frameCount, frameIndexMotion]);

    // Resize handler
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth * window.devicePixelRatio;
                canvasRef.current.height = window.innerHeight * window.devicePixelRatio;
                const val = frameIndexMotion.get();
                const index = Math.max(0, Math.min(frameCount - 1, Math.floor(val) - 1));
                const img = imagesRef.current[index];
                const ctx = canvasRef.current.getContext("2d");
                if (ctx && img) {
                    const canvasAspect = canvasRef.current.width / canvasRef.current.height;
                    const imgAspect = img.width / img.height;
                    let drawWidth, drawHeight, offsetX, offsetY;
                    if (canvasAspect > imgAspect) {
                        drawWidth = canvasRef.current.width; drawHeight = canvasRef.current.width / imgAspect;
                        offsetX = 0; offsetY = -(drawHeight - canvasRef.current.height) / 2;
                    } else {
                        drawHeight = canvasRef.current.height; drawWidth = canvasRef.current.height * imgAspect;
                        offsetX = -(drawWidth - canvasRef.current.width) / 2; offsetY = 0;
                    }
                    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
                }
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, [frameIndexMotion, imagesLoaded, frameCount]);

    return (
        <div ref={containerRef} className="relative h-[1200vh] w-full bg-[#050808]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Cinematic Background Canvas */}
                <canvas ref={canvasRef} className="absolute inset-0 h-full w-full object-cover grayscale-[0.2]" />

                {/* Visibility Treatments (High Contrast) */}
                <div className="absolute inset-0 pointer-events-none bg-black/40 mix-blend-multiply" />
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,8,8,0.7)_100%)]" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#050808]/95" />

                {/* LOADING STATE */}
                {imagesLoaded < frameCount && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#050808] z-50">
                        <div className="flex flex-col items-center gap-6">
                            <div className="w-64 h-[2px] bg-white/10 overflow-hidden relative">
                                <motion.div initial={{ x: "-100%" }} animate={{ x: `${(imagesLoaded / frameCount) * 100 - 100}%` }} className="absolute inset-0 bg-brass shadow-[0_0_15px_rgba(181,153,101,0.5)]" />
                            </div>
                            <p className="text-[10px] uppercase font-sans tracking-[0.5em] text-white/30">Syncing Master Frame Sequence</p>
                        </div>
                    </div>
                )}

                {/* --- SCROLL TO EXPLORE: CENTRAL MASTER (Brass, Bold, Serif) --- */}
                <motion.div
                    style={{
                        opacity: useTransform(smoothProgress, [0, 0.05], [1, 0]),
                        scale: useTransform(smoothProgress, [0, 0.05], [1, 1.15]),
                    }}
                    className="absolute inset-0 flex flex-col items-center justify-center z-40 px-6 text-center pointer-events-none"
                >
                    <div className="flex flex-col items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="flex flex-col items-center gap-8"
                        >
                            <div className="h-[2px] w-32 bg-brass" />
                            <h2 className="font-serif text-6xl sm:text-8xl lg:text-9xl text-brass italic leading-none drop-shadow-[0_15px_45px_rgba(0,0,0,1)]">
                                Scroll to Explore
                            </h2>
                            <div className="h-[2px] w-32 bg-brass" />
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                            className="text-brass"
                        >
                            <ChevronDown size={72} strokeWidth={0.5} />
                        </motion.div>
                    </div>
                </motion.div>

                {/* --- PHASE 1 REVEAL --- */}
                <motion.div
                    style={{
                        opacity: useTransform(smoothProgress, [0.05, 0.12, 0.35, 0.42], [0, 1, 1, 0]),
                        y: useTransform(smoothProgress, [0.05, 0.42], [40, -40]),
                    }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 pointer-events-none"
                >
                    <div className="flex flex-col items-center">
                        <span className="mb-10 block text-xs font-sans font-bold uppercase tracking-[0.6em] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,1)]">
                            Strategic Wealth Alpha
                        </span>

                        <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.85] tracking-tight max-w-[95vw] drop-shadow-[0_30px_70px_rgba(0,0,0,1)]">
                            <span className="text-white">Legacy in</span> <br /><span className="italic text-brass highlight-brass">Motion</span>.
                        </h1>

                        <div className="mt-16 bg-black/30 backdrop-blur-2xl border border-white/5 px-12 py-7 rounded-none shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
                            <p className="text-white text-sm md:text-lg lg:text-xl font-sans uppercase tracking-[0.4em] drop-shadow-lg font-bold">
                                Strategic Tax Optimization for the <span className="text-brass font-black">Next Guard</span>.
                            </p>
                        </div>

                        <div className="mt-20 flex flex-col items-center gap-10 sm:flex-row pointer-events-auto">
                            <Magnetic>
                                <Button onClick={openModal} className="group bg-brass hover:bg-white text-[#050808] px-20 py-10 text-xl font-bold rounded-none tracking-[0.25em] uppercase transition-all duration-700 shadow-2xl">
                                    Secure Access
                                    <ArrowRight className="ml-5 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Magnetic>
                        </div>
                    </div>
                </motion.div>

                {/* --- PHASE 2 REVEAL --- */}
                <motion.div
                    style={{
                        opacity: useTransform(smoothProgress, [0.45, 0.52, 0.75, 0.82], [0, 1, 1, 0]),
                        y: useTransform(smoothProgress, [0.45, 0.82], [40, -40])
                    }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 pointer-events-none"
                >
                    <h2 className="text-5xl sm:text-8xl md:text-[9.5rem] lg:text-[12rem] font-serif leading-[0.9] drop-shadow-[0_40px_100px_rgba(0,0,0,1)]">
                        <span className="text-white">Strategic</span> <br /><span className="text-brass italic underline decoration-brass/30 underline-offset-[25px]">Perspective</span>
                    </h2>
                    <p className="text-white/90 text-xs md:text-lg font-sans uppercase tracking-[1em] mt-24 max-w-5xl leading-loose font-black drop-shadow-2xl">
                        Unrivaled Detail Across Every Dimension.
                    </p>
                    <div className="h-48 w-[2px] bg-gradient-to-b from-brass to-transparent mt-24" />
                </motion.div>

                {/* --- PHASE 3 REVEAL --- */}
                <motion.div
                    style={{
                        opacity: useTransform(smoothProgress, [0.85, 0.92, 1], [0, 1, 1]),
                        y: useTransform(smoothProgress, [0.85, 1], [40, 0])
                    }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 pointer-events-none"
                >
                    <h2 className="text-5xl sm:text-8xl md:text-[9.5rem] lg:text-[12rem] font-serif mb-20 drop-shadow-[0_40px_100px_rgba(0,0,0,1)] leading-[0.85] tracking-tighter">
                        <span className="text-white">The Next</span> <br /><span className="italic text-brass font-normal">Horizon</span>.
                    </h2>
                    <div className="flex flex-col items-center gap-14 pointer-events-auto">
                        <Button onClick={openModal} className="bg-brass px-24 py-14 text-3xl font-bold text-[#050808] rounded-none uppercase tracking-[0.4em] shadow-[0_60px_150px_rgba(181,153,101,0.5)] hover:scale-105 hover:bg-white transition-all duration-700">
                            Connect Directly
                        </Button>
                        <div className="flex items-center gap-10 text-white/40 text-xs uppercase tracking-[0.8em] font-sans font-black">
                            <span>Principal Strategist</span>
                            <div className="h-4 w-4 rounded-full border-2 border-brass shadow-[0_0_20px_rgba(181,153,101,0.5)]" />
                            <span>Marcus Chen</span>
                        </div>
                    </div>
                </motion.div>

                {/* Phase Timeline Indicators (Left Side) */}
                <div className="absolute left-12 top-1/2 -translate-y-1/2 flex flex-col gap-16 z-40 h-[600px] justify-center items-center">
                    {[0, 1, 2].map((i) => (
                        <div key={i} className="relative flex flex-col items-center">
                            <motion.div
                                style={{
                                    height: useTransform(smoothProgress, [i * 0.4, (i * 0.4) + 0.2], ["6px", "140px"]),
                                    opacity: useTransform(smoothProgress, [i * 0.4, (i * 0.4) + 0.2], [0.15, 1]),
                                }}
                                className="w-[5px] bg-brass rounded-full shadow-[0_0_20px_rgba(181,153,101,0.4)]"
                            />
                            <motion.span
                                style={{
                                    opacity: useTransform(smoothProgress, [i * 0.4, (i * 0.4) + 0.2], [0, 1])
                                }}
                                className="absolute left-10 top-1/2 -translate-y-1/2 text-[10px] font-sans font-black text-white uppercase tracking-[1em] vertical-rl rotate-180"
                            >
                                CH.0{i + 1}
                            </motion.span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
        .highlight-brass {
          text-shadow: 0 0 60px rgba(181, 153, 101, 0.7);
        }
      `}</style>
        </div>
    );
}
