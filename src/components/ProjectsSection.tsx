import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ShoppingBag, Warehouse, HeartPulse, GraduationCap } from "lucide-react";

const projects = [
    {
        title: "WallsShop – Furniture E-Commerce Platform",
        description:
            "Developed a scalable e-commerce backend using ASP.NET Core, Entity Framework Core, and Clean Architecture. Implemented JWT authentication and role-based authorization using ASP.NET Core Identity, along with a bilingual product management system supporting Arabic and English localization.",
        tags: ["ASP.NET Core", "Clean Architecture", "JWT", "ASP.NET Identity", "EF Core", "Localization"],
        icon: ShoppingBag,
        featured: true,
        links: {
            github: "https://github.com/Fayez-Mohammed/wallsshop",
            demo: "https://wallsshop-furniture.com",
        },
    },
    {
        title: "Smart Warehouse & POS Management System (ERP/POS)",
        description:
            "Developed an ERP backend for inventory, sales, purchasing, and financial management using ASP.NET Core. Implemented transactional workflows with Entity Framework Core to ensure data consistency, custom middleware, and centralized exception handling for reliable API responses.",
        tags: ["ASP.NET Core", "EF Core", "ERP Systems", "SQL Transactions", "Custom Middleware"],
        icon: Warehouse,
        featured: false,
        links: {
            github: "https://github.com/Fayez-Mohammed/WarehouseForTheFIrst",
            demo: "https://warhouse-management-three.vercel.app/",
        },
    },
    {
        title: "Be Positive – Blood Donation Platform",
        badge: "Graduation Project – Excellent with Honors",
        description:
            "Developed a location-aware blood donation platform connecting hospitals with compatible nearby donors. Implemented real-time communication using SignalR, background job scheduling with Hangfire, and role-based authorization to secure access across hospitals, donors, and administrators.",
        tags: ["ASP.NET Core", "SignalR", "Hangfire", "RBAC", "RESTful APIs"],
        icon: HeartPulse,
        featured: true,
        links: {
            github: "https://github.com/Fayez-Mohammed/BePositive",
            demo: null,
        },
    },
    {
        title: "EduGate – E-Learning & Virtual Labs Platform",
        badge: "1st Place & Top 5 Nationwide – DEPI",
        description:
            "Led backend development for a 5-member team, designing the backend architecture and relational database. Developed secure RESTful APIs with JWT authentication and multi-role authorization, while optimizing database queries and API performance to support real-time academic dashboards.",
        tags: ["ASP.NET Core", "JWT Auth", "Database Design", "Query Optimization", "System Architecture"],
        icon: GraduationCap,
        featured: true,
        links: {
            github: "https://github.com/Fayez-Mohammed/EduGate",
            demo: null,
        },
    },
];

const ProjectsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="py-24 relative" ref={ref}>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-heading">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="section-subheading mx-auto">
                        Real-world applications focused on enterprise architecture, database optimization, and backend logic
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="project-card"
                        >
                            <div className="p-6 md:p-8">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <div className="p-3 rounded-xl bg-primary/10 text-primary glow-effect-sm">
                                            <project.icon size={24} />
                                        </div>
                                        {project.badge ? (
                                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
                                                {project.badge}
                                            </span>
                                        ) : (
                                            project.featured && (
                                                <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                                                    Featured
                                                </span>
                                            )
                                        )}
                                    </div>
                                    <div className="flex gap-2">
                                        {project.links.github && (
                                            <a
                                                href={project.links.github}
                                                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github size={18} />
                                            </a>
                                        )}
                                        {project.links.demo && (
                                            <a
                                                href={project.links.demo}
                                                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => {
                                        const isSpecial = ["ASP.NET Core", "Clean Architecture", "EF Core", "JWT", "JWT Auth"].includes(tag);
                                        return (
                                            <span
                                                key={tag}
                                                className={`px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground ${isSpecial
                                                    ? "hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white transform-gpu hover:scale-105 hover:shadow-md transition-all duration-200"
                                                    : "transition-colors"
                                                    }`}
                                            >
                                                {tag}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Decorative gradient line */}
                            <div className="h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
                        </motion.div>
                    ))}
                </div>

                {/* More Projects CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-12 text-center"
                >
                    <a
                        href="https://github.com/Fayez-Mohammed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline inline-flex items-center gap-2"
                    >
                        <Github size={18} />
                        View All Projects on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;