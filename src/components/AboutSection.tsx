import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
    GraduationCap,
    Target,
    Code2,
    Award,
} from "lucide-react";

const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-24 relative" ref={ref}>
            <div className="container mx-auto px-6">
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-heading">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <p className="section-subheading mx-auto">
                        Computer Science graduate passionate about building scalable, secure enterprise backends
                    </p>
                </motion.div>

                {/* Unified Balanced Grid */}
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid md:grid-cols-2 gap-6"
                    >
                        {/* Education */}
                        <div className="skill-card p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    <GraduationCap size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">
                                        Education
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Bachelor of Computer Science from{" "}
                                        <span className="text-primary font-medium">Fayoum University</span> (Graduated Jun 2026).
                                        Achieved GPA <span className="font-semibold text-foreground">3.69/4.0 (Excellent)</span> with Graduation Project: <span className="text-primary font-medium">Excellent with Honors</span>.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Backend Development */}
                        <div className="skill-card p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    <Code2 size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">
                                        Backend Development
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Specialized <span className="text-primary font-medium">Backend .NET Developer</span> building
                                        scalable RESTful APIs using C#, ASP.NET Core, EF Core, SQL Server, and Clean Architecture.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Achievements & Traineeships */}
                        <div className="skill-card p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">
                                        Honors & Achievements
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Awarded <span className="text-primary font-medium">Top Performing Student</span> by MCIT (DEPI). Led backend for EduGate winning <span className="text-primary font-medium">1st Place</span> in DEPI E-Learning track.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Focus Areas */}
                        <div className="skill-card p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-2">
                                        Focus Areas
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Deep focus on <span className="text-primary font-medium">Clean Architecture</span>,
                                        <span className="text-primary font-medium"> SOLID Principles</span>, Enterprise Security (JWT/RBAC), and
                                        high-performance database optimization.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Centered Professional Quote */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-8 p-6 rounded-xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20 text-center"
                    >
                        <p className="text-base md:text-lg italic text-muted-foreground">
                            "Passionate about designing secure, maintainable, and high-quality backend systems with a strong focus on performance, scalability, and clean code."
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;