import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GlowBox } from "./GlowBox";

// استيراد أيقونات وشعارات مضمونة 100% في جميع إصدارات react-icons
import {
    SiDotnet,
    SiPython,
    SiGit,
    SiGithub,
    SiDocker,
    SiPostman,
    SiSwagger,
} from "react-icons/si";

import {
    FaCode,
    FaServer,
    FaDatabase,
    FaLayerGroup,
    FaProjectDiagram,
    FaSitemap,
    FaCogs,
    FaLink,
    FaUserLock,
    FaLock,
    FaTable,
    FaShieldAlt,
    FaDesktop,
    FaExchangeAlt,
    FaSearch,
    FaGlobe,
    FaKey,
    FaTerminal,
} from "react-icons/fa";

const techGroups = [
    {
        heading: "Backend Development",
        items: [
            { label: "C#", icon: <FaCode />, color: "rgb(168, 85, 247)" },
            { label: "ASP.NET Core", icon: <SiDotnet />, color: "rgb(81, 43, 212)" },
            { label: "ASP.NET MVC", icon: <FaGlobe />, color: "rgb(59, 130, 246)" },
            { label: "EF Core", icon: <FaDatabase />, color: "rgb(124, 58, 237)" },
            { label: "LINQ", icon: <FaSearch />, color: "rgb(6, 182, 212)" },
            { label: "AutoMapper", icon: <FaExchangeAlt />, color: "rgb(236, 72, 153)" },
        ],
    },
    {
        heading: "Software Engineering & Patterns",
        items: [
            { label: "Clean Architecture", icon: <FaLayerGroup />, color: "rgb(56, 189, 248)" },
            { label: "SOLID Principles", icon: <FaProjectDiagram />, color: "rgb(74, 222, 128)" },
            { label: "Repository Pattern", icon: <FaSitemap />, color: "rgb(251, 146, 60)" },
            { label: "Unit of Work", icon: <FaCogs />, color: "rgb(192, 132, 252)" },
            { label: "RESTful APIs", icon: <FaLink />, color: "rgb(45, 212, 191)" },
        ],
    },
    {
        heading: "Security Frameworks",
        items: [
            { label: "JWT Auth", icon: <FaKey />, color: "rgb(250, 204, 21)" },
            { label: "ASP.NET Identity", icon: <FaUserLock />, color: "rgb(129, 140, 248)" },
            { label: "RBAC Auth", icon: <FaLock />, color: "rgb(248, 113, 113)" },
        ],
    },
    {
        heading: "Databases & Optimization",
        items: [
            { label: "MS SQL Server", icon: <FaDatabase />, color: "rgb(204, 41, 43)" },
            { label: "Database Design", icon: <FaTable />, color: "rgb(56, 189, 248)" },
            { label: "SQL Transactions", icon: <FaShieldAlt />, color: "rgb(245, 158, 11)" },
        ],
    },
    {
        heading: "Tools & DevOps",
        items: [
            { label: "Git", icon: <SiGit />, color: "rgb(240, 80, 50)" },
            { label: "GitHub", icon: <SiGithub />, color: "rgb(255, 255, 255)" },
            { label: "Postman", icon: <SiPostman />, color: "rgb(255, 108, 55)" },
            { label: "Swagger", icon: <SiSwagger />, color: "rgb(133, 234, 45)" },
            { label: "Docker", icon: <SiDocker />, color: "rgb(36, 150, 237)" },
            { label: "Visual Studio", icon: <FaDesktop />, color: "rgb(198, 120, 221)" },
        ],
    },
    {
        heading: "Programming Languages",
        items: [
            { label: "C#", icon: <FaCode />, color: "rgb(168, 85, 247)" },
            { label: "C++", icon: <FaTerminal />, color: "rgb(0, 89, 156)" },
            { label: "Python", icon: <SiPython />, color: "rgb(55, 118, 171)" },
        ],
    },
];

const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="py-24 relative z-10" ref={ref}>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-heading">
                        Tech <span className="text-gradient">Stack</span>
                    </h2>
                    <p className="section-subheading mx-auto">
                        Technologies, architectural patterns, and tools I use to build scalable enterprise systems
                    </p>
                </motion.div>

                <div className="flex flex-col gap-14 max-w-6xl mx-auto">
                    {techGroups.map((group, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: idx * 0.12 }}
                            className="text-center"
                        >
                            <h3 className="text-base sm:text-lg font-semibold text-gray-300 mb-8 tracking-wider border-b border-white/5 pb-2 inline-block">
                                {group.heading}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
                                {group.items.map((item) => (
                                    <GlowBox
                                        key={item.label}
                                        icon={item.icon}
                                        color={item.color}
                                        title={item.label}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;