import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Code2, Server, Database, Download } from "lucide-react";

const roles = [
    "Backend .NET Developer",
    
    "Software Engineer",
];

const HeroSection = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    // Effect للتحكم في كتابة المسمى الوظيفي
    useEffect(() => {
        const currentRole = roles[roleIndex];
        const speed = isDeleting ? 50 : 100;

        if (!isDeleting && displayText === currentRole) {
            setTimeout(() => setIsDeleting(true), 2000);
            return;
        }

        if (isDeleting && displayText === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setDisplayText((prev) =>
                isDeleting
                    ? prev.slice(0, -1)
                    : currentRole.slice(0, prev.length + 1)
            );
        }, speed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-24"
        >
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-8 items-center">
                    <div className="text-center lg:text-left">
                        {/* Greeting */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                        >
                            <span className="text-foreground">Hi </span>{" "}
                            <span className="text-gradient">I 'm</span>
                        </motion.h1>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                        >
                            <span className="text-foreground">Fayez</span>{" "}
                            <span className="text-gradient">Mohammed</span>
                        </motion.h1>

                        {/* Animated Role */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="h-12 md:h-16 flex items-center justify-center lg:justify-start mb-6"
                        >
                            <span className="text-xl md:text-3xl font-medium text-muted-foreground">
                                {displayText}
                                <span className="text-primary animate-pulse">|</span>
                            </span>
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
                        >
                            Building scalable, secure web applications and RESTful APIs using C#, ASP.NET Core, and Clean Architecture.
                            <br />
                            <span className="text-primary/80 italic">"Focused on performance, scalability, and clean code."</span>
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
                        >
                            <a href="#projects" className="btn-primary">
                                View Projects
                            </a>
                            <a
                                href="/Fayez_Mohammed_CV.pdf"
                                download="Fayez_Mohammed_CV.pdf"
                                className="btn-cv group"
                            >
                                <Download size={18} className="group-hover:animate-bounce" />
                                Download CV
                            </a>
                        </motion.div>

                        {/* Quick Stats / Tech Focus */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
                        >
                            {[
                                { icon: Server, label: "ASP.NET Core" },
                                { icon: Code2, label: "Clean Architecture" },
                                { icon: Database, label: "SQL Server" },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-card/30 border border-border/30 card-glow glow-effect-sm hover:glow-effect hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:scale-105 transform-gpu hover:shadow-lg transition-all duration-200"
                                >
                                    <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-200" />
                                    <span className="text-xs text-muted-foreground group-hover:text-white transition-colors duration-200">{item.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Panel - Permanent Single Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="relative w-full max-w-xl mx-auto lg:mx-0"
                    >
                        <div className="relative rounded-3xl border border-border/50 bg-gradient-to-b from-card/80 via-card/40 to-card/90 p-3 shadow-[0_30px_100px_hsl(187_100%_40%_/_0.18)] overflow-hidden h-[23rem] md:h-[27rem]">
                            {/* خلفية التوهج الشعاعي */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-primary/10 to-transparent pointer-events-none z-0" />

                            {/* صورتك الشخصية ثابتة دائماً */}
                            <motion.img
                                src="/fayez.png"
                                alt="Fayez Mohammed"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                className="relative z-10 w-full h-full object-cover object-center translate-y-5 rounded-2xl drop-shadow-[0_10px_20px_rgba(0,180,216,0.25)]"
                                loading="eager"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;