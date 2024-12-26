'use client';

import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Key from "@/components/Key";
import mindBlowing from '@/assets/images/'

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    Where power meets <span className="text-lime-400">simplicity</span>
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 lg:grid-cols-3">
                    {/* Feature Card 1 */}
                    <FeatureCard
                        title="Real-Time Collaboration"
                        description="Work together seamlessly with conflict-free team editing"
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image src={avatar1} alt="Avatar 1" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500">
                                <Image src={avatar2} alt="Avatar 2" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-20">
                                <Image src={avatar3} alt="Avatar 3" className="rounded-full" />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1 relative">
                                    <Image
                                        src={avatar4}
                                        alt="Avatar 4"
                                        className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                                    />
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span
                                            className="size-1.5 rounded-full bg-white inline-flex"
                                            key={i}
                                        ></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>

                    {/* Feature Card 2 */}
                    <FeatureCard
                        title="Interactive Prototyping"
                        description="Engage your clients with prototypes that react to user actions"
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center group-hover:text-white/10 transition duration-500">
                                We've achieved{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                                    incredible
                                    <video
                                        src="https://tenor.com/view/bitcoin-ligthning-satsback-mind-blown-gif-26527821"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500"
                                    />
                                </span>{" "}
                                growth this year
                            </p>
                        </div>
                    </FeatureCard>

                    {/* Feature Card 3 */}
                    <FeatureCard
                        title="Keyboard Quick Actions"
                        description="Powerful commands to help you create designs more quickly"
                        className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto group"
                    >
                        <div className="aspect-video flex items-center justify-center gap-4">
                            <div className="relative">
                                <Key 
                                    className="w-28"
                                    onClick={() => {
                                        const audio = new Audio('/key-press.mp3');
                                        audio.volume = 0.5;
                                        audio.play().catch(() => {});
                                    }}
                                >
                                    Shift
                                </Key>
                                <div className="absolute inset-0 outline outline-2 outline-offset-4 outline-lime-400 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 delay-[0ms] group-hover:delay-[0ms]"></div>
                            </div>
                            <div className="relative">
                                <Key 
                                    onClick={() => {
                                        const audio = new Audio('/key-press.mp3');
                                        audio.volume = 0.5;
                                        audio.play().catch(() => {});
                                    }}
                                >
                                    Alt
                                </Key>
                                <div className="absolute inset-0 outline outline-2 outline-offset-4 outline-lime-400 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 delay-[300ms] group-hover:delay-[150ms]"></div>
                            </div>
                            <div className="relative">
                                <Key 
                                    onClick={() => {
                                        const audio = new Audio('/key-press.mp3');
                                        audio.volume = 0.5;
                                        audio.play().catch(() => {});
                                    }}
                                >
                                    C
                                </Key>
                                <div className="absolute inset-0 outline outline-2 outline-offset-4 outline-lime-400 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 delay-[600ms] group-hover:delay-[300ms]"></div>
                            </div>
                        </div>
                    </FeatureCard>
                </div>

                {/* Feature Tags */}
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="bg-neutral-900 border-white/10 inline-flex px-3 py-1.5 rounded-2xl gap-3 items-center md:px-5 md:py-2"
                        >
                            <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl">
                                &#100038;
                            </span>
                            <span className="font-medium md:text-lg">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
