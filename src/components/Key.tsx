'use client';

import { HTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Key(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps} = props;
    const [isPressed, setIsPressed] = useState(false);

    return( 
        <div 
            className={twMerge(
                "size-14 relative select-none cursor-pointer",
                // Main key styling
                "bg-gradient-to-b from-neutral-100 to-neutral-200",
                "inline-flex items-center justify-center",
                "rounded-xl text-xl text-neutral-900 font-medium",
                // 3D effect layers
                "border border-neutral-300",
                "shadow-[0_0.5px_0_1px_#ffffff_inset,0_-1px_0_1px_#9ca3af_inset]",
                // Bottom shadow for depth
                "after:absolute after:inset-0 after:rounded-xl",
                isPressed 
                    ? "after:shadow-[0_2px_0_0_#1f2937,0_1px_4px_0_rgba(0,0,0,0.1)] translate-y-1" 
                    : "after:shadow-[0_4px_0_0_#1f2937,0_2px_8px_0_rgba(0,0,0,0.2)]",
                "after:-z-10",
                // Transition
                "transition-all duration-75",
                className
            )} 
            role="button"
            tabIndex={0}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    setIsPressed(true);
                }
            }}
            onKeyUp={() => setIsPressed(false)}
            {...otherProps}
        >
            <span className={twMerge(
                "transition-transform",
                isPressed && "scale-95"
            )}>
                {children}
            </span>
        </div>
    );
}