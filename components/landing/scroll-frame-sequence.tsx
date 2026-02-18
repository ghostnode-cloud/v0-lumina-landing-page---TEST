"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion, useMotionValue } from "framer-motion";

interface ScrollFrameSequenceProps {
    frameCount: number;
    baseUrl: string; // e.g., "/frames/frame_"
    extension: string; // e.g., ".jpg"
}

export function ScrollFrameSequence({ frameCount, baseUrl, extension }: ScrollFrameSequenceProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress (0 to 1) to frame index (1 to frameCount)
    const frameIndexMotion = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

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
            const index = Math.floor(val) - 1;
            const img = imagesRef.current[index];
            if (img && img.complete) {
                // Handle aspect ratio
                const canvasAspect = canvas.width / canvas.height;
                const imgAspect = img.width / img.height;
                let drawWidth, drawHeight, offsetX, offsetY;

                if (canvasAspect > imgAspect) {
                    drawWidth = canvas.width;
                    drawHeight = canvas.width / imgAspect;
                    offsetX = 0;
                    offsetY = -(drawHeight - canvas.height) / 2;
                } else {
                    drawHeight = canvas.height;
                    drawWidth = canvas.height * imgAspect;
                    offsetX = -(drawWidth - canvas.width) / 2;
                    offsetY = 0;
                }

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }
        };

        // Initial render
        render(frameIndexMotion.get());

        // Subscribe to motion value changes
        const unsubscribe = frameIndexMotion.on("change", (latest) => {
            render(latest);
        });

        return () => unsubscribe();
    }, [imagesLoaded, frameCount, frameIndexMotion]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth * window.devicePixelRatio;
                canvasRef.current.height = window.innerHeight * window.devicePixelRatio;
                // Re-render immediately
                const ctx = canvasRef.current.getContext("2d");
                const val = frameIndexMotion.get();
                const index = Math.floor(val) - 1;
                const img = imagesRef.current[index];
                if (ctx && img) {
                    const canvasAspect = canvasRef.current.width / canvasRef.current.height;
                    const imgAspect = img.width / img.height;
                    let drawWidth, drawHeight, offsetX, offsetY;

                    if (canvasAspect > imgAspect) {
                        drawWidth = canvasRef.current.width;
                        drawHeight = canvasRef.current.width / imgAspect;
                        offsetX = 0;
                        offsetY = -(drawHeight - canvasRef.current.height) / 2;
                    } else {
                        drawHeight = canvasRef.current.height;
                        drawWidth = canvasRef.current.height * imgAspect;
                        offsetX = -(drawWidth - canvasRef.current.width) / 2;
                        offsetY = 0;
                    }
                    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
                }
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initial set

        return () => window.removeEventListener("resize", handleResize);
    }, [frameIndexMotion, imagesLoaded]);

    return (
        <div ref={containerRef} className="relative h-[400vh] w-full bg-slate-950">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                <canvas
                    ref={canvasRef}
                    className="h-full w-full object-cover"
                    style={{ width: "100%", height: "100%" }}
                />

                {/* Loading Indicator */}
                {imagesLoaded < frameCount && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950 text-parchment font-serif">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-48 h-[1px] bg-ivory/20 overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(imagesLoaded / frameCount) * 100}%` }}
                                    className="h-full bg-brass"
                                />
                            </div>
                            <p className="text-xs uppercase tracking-widest opacity-60">Initializing Asset {Math.round((imagesLoaded / frameCount) * 100)}%</p>
                        </div>
                    </div>
                )}

                {/* Private Wealth Aesthetic Overlays */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/60" />

                <motion.div
                    style={{
                        opacity: useTransform(scrollYProgress, [0, 0.1, 0.4, 0.5, 0.8, 1], [0, 1, 1, 0, 0, 0]),
                        y: useTransform(scrollYProgress, [0, 0.5], [0, -50])
                    }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10"
                >
                    <h2 className="text-5xl md:text-8xl font-serif text-parchment mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        Ascending Wealth
                    </h2>
                    <div className="h-[1px] w-24 bg-brass mb-6" />
                    <p className="text-ivory/90 text-sm md:text-base max-w-xl font-sans uppercase tracking-[0.3em] leading-relaxed">
                        The next generation of financial strategic deployment.
                    </p>
                </motion.div>

                <motion.div
                    style={{
                        opacity: useTransform(scrollYProgress, [0, 0.5, 0.6, 0.9, 1], [0, 0, 1, 1, 0]),
                        y: useTransform(scrollYProgress, [0.5, 1], [50, 0])
                    }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10"
                >
                    <h2 className="text-5xl md:text-8xl font-serif text-parchment mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        Precision View
                    </h2>
                    <p className="text-ivory/90 text-sm md:text-base max-w-xl font-sans uppercase tracking-[0.3em] leading-relaxed">
                        Unrivaled detail across your entire portfolio spectrum.
                    </p>
                </motion.div>
            </div>
        </div>
    );
}
