import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
    {
        title: "Backend Development",
        skills: [
            { name: "ASP.NET Core API", icon: "🚀" },
            { name: "ASP.NET MVC", icon: "🌐" },
            { name: "EF Core", icon: "⚡" },
            { name: "LINQ", icon: "🔍" },
          
        ],
    },
    {
        title: "Software Engineering",
        skills: [
            { name: "Clean Architecture", icon: "🏛️" },
            { name: "SOLID Principles", icon: "📐" },
            { name: "Repository Pattern", icon: "🗃️" },
            { name: "Unit of Work", icon: "🔄" },
            { name: "RESTful APIs", icon: "🔗" },
      
        ],
    },
    {
        title: "Security Frameworks",
        skills: [
            { name: "JWT Authentication", icon: "🔑" },
            { name: "ASP.NET Core Identity", icon: "👤" },
            { name: "RBAC Authorization", icon: "🔐" },
           
        ],
    },
    {
        title: "Database Systems",
        skills: [
            { name: "Microsoft SQL Server", icon: "🗄️" },
            
            { name: "Database Design", icon: "🛠️" },
            { name: "SQL Transactions", icon: "⚡" },
            { name: "Query Optimization", icon: "📊" },
        ],
    },
    {
        title: "Tools & Platforms",
        skills: [
            { name: "Git & GitHub", icon: "📦" },
            { name: "Postman", icon: "🚀" },
            { name: "Swagger / OpenAPI", icon: "📄" },
            { name: "Docker", icon: "🐳" },
            { name: "IIS Server", icon: "🖥️" },
            { name: "Visual Studio", icon: "💻" },
        ],
    },
    {
        title: "Programming Languages",
        skills: [
            { name: "C#", icon: "🔷" },
            { name: "SQL", icon: "📊" },
            { name: "C++", icon: "⚡" },
            { name: "Python", icon: "🐍" },
        ],
    },
];

const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="py-24 relative" ref={ref}>
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
                        Technologies, security mechanisms, and architectural patterns I use to build robust backend systems
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="skill-card p-6"
                        >
                            <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-primary" />
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{
                                            duration: 0.3,
                                            delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                                        }}
                                        className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group cursor-default"
                                    >
                                        <span className="text-lg group-hover:scale-110 transition-transform">
                                            {skill.icon}
                                        </span>
                                        <span className="text-sm text-foreground font-medium">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Skill Philosophy */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card border border-border/50">
                        <span className="text-primary">💡</span>
                        <span className="text-muted-foreground text-sm">
                            Dedicated to writing clean, maintainable, and scalable enterprise code
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;