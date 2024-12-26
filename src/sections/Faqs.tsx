'use client';

import Tag from "@/components/Tag";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
    {
        question: "How is Layers different from other design tools?",
        answer: "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
    },
    {
        question: "Is there a learning curve?",
        answer: "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
    },
    {
        question: "How do you handle version control?",
        answer: "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
    },
    {
        question: "Can I work offline?",
        answer: "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
    },
    {
        question: "How does Layers handle collaboration?",
        answer: "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setSelectedIndex(selectedIndex === index ? null : index);
    };

    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Faqs</Tag>
                </div>
                    <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">Questions? We've Got <span className="text-lime-400">Answers</span></h2>
                    <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                        {faqs.map((faq, faqIndex) => (
                            <div key={faq.question} className="bg-neutral-900 rounded-2xl border border-white/10 p-6">
                                <div 
                                    className="flex justify-between items-center cursor-pointer" 
                                    onClick={() => handleClick(faqIndex)}
                                >
                                    <h3 className="font-medium">{faq.question}</h3>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        className={twMerge(
                                            "feather feather-plus text-lime-400 flex-shrink-0 transition-transform duration-300 ease-in-out", 
                                            selectedIndex === faqIndex && 'rotate-45'
                                        )}
                                    >
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </div>
                                <div 
                                    className={twMerge(
                                        "grid transition-all duration-500 ease-in-out",
                                        selectedIndex === faqIndex ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"
                                    )}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-white/50">
                                            {faq.answer.split(' ').map((word, wordIndex) => (
                                                <span
                                                    key={wordIndex}
                                                    className="inline-block mr-2"
                                                    style={{
                                                        opacity: selectedIndex === faqIndex ? 1 : 0,
                                                        transform: selectedIndex === faqIndex 
                                                            ? 'translateX(0)' 
                                                            : 'translateX(-8px)',
                                                        transition: `all 0.8s ease-out ${wordIndex * 0.1}s`,
                                                    }}
                                                >
                                                    {word}
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
            </div>
        </section>
    );
}
