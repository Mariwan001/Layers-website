import Image from "next/image";
import logoImage from '@/assets/images/logo.svg';

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
                    <div>
                        <Image src={logoImage} alt="Layers logo" />
                    </div>
                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map((link, index) => (
                                <a 
                                    key={index} 
                                    href={link.href} 
                                    className="text-sm text-white/50 hover:text-white transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}
