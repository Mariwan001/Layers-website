'use client';

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useAnimate } from "framer-motion";

export default function CallToAction() {
    const [isHovered, setIsHovered] = useState(false);
    const [scope, animate] = useAnimate();
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ['start end', 'end end']
    });

    useEffect(() => {
        const controls = animate(
            scope.current,
            { x: "-50%" },
            {
                duration: 29,
                ease: 'linear',
                repeat: Infinity,
            }
        );

        if (isHovered) {
            controls.speed = 0.5;
        } else {
            controls.speed = 1;
        }

        return () => controls.stop();
    }, [animate, isHovered, scope]);

    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex" ref={scrollTarget}>
                <motion.div
                    ref={scope}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="flex flex-none gap-16 pr-16 md:text-8xl text-7xl font-medium"
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-16">
                            <span className="text-lime-400 text-7xl">&#10038;</span>
                            <span>Try it for free</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
