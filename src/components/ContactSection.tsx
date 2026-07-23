import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, ArrowUpRight, Phone, Copy, MapPin } from "lucide-react";

const socials = [
    {
        name: "GitHub",
        icon: Github,
        href: "https://github.com/Fayez-Mohammed",
        color: "hover:text-white hover:bg-[#333]",
    },
    {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://www.linkedin.com/in/fayez-mohammed-meabed",
        color: "hover:text-white hover:bg-[#0077B5]",
    },
];

const ContactSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="py-24 relative" ref={ref}>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-heading">
                        Let's <span className="text-gradient">Connect</span>
                    </h2>
                    <p className="section-subheading mx-auto">
                        Open to software engineering opportunities, backend development roles, and technical collaborations
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto"
                >
                    {/* Email CTA */}
                    <div className="project-card p-8 mb-10 text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/30 glow-effect">
                            <Mail className="text-primary" size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">
                            Reach Out Directly
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Have a project idea or software engineering inquiry? My inbox is always open.
                        </p>
                        <button
                            type="button"
                            className="btn-primary inline-flex items-center gap-2"
                            onClick={(e) => {
                                e.preventDefault();
                                const to = 'fayzb315@gmail.com';
                                const subject = '';
                                const body = '';
                                const gmailWeb = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                                    to
                                )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                                const gmailApp = `googlegmail://co?to=${encodeURIComponent(
                                    to
                                )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                                const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

                                if (isMobile) {
                                    try {
                                        window.location.href = gmailApp;
                                    } catch (err) {
                                        // ignore
                                    }
                                    setTimeout(() => {
                                        window.open(gmailWeb, '_blank', 'noopener');
                                    }, 600);
                                } else {
                                    window.open(gmailWeb, '_blank', 'noopener');
                                }
                            }}
                        >
                            Send an Email
                            <ArrowUpRight size={16} />
                        </button>

                        {/* Location Badge */}
                        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>Cairo, Egypt</span>
                        </div>

                        <div className="mt-4 text-sm">
                            <div className="inline-flex items-center gap-3 text-muted-foreground">
                                <Phone className="w-5 h-5 text-primary" />
                                <a href="tel:+201027016323" className="font-medium text-foreground">+20 1027016323</a>
                                <button
                                    type="button"
                                    aria-label="Copy phone"
                                    onClick={() => navigator.clipboard?.writeText('+201027016323')}
                                    className="p-2 rounded-md bg-secondary/10 hover:bg-secondary/20 transition-colors"
                                >
                                    <Copy className="w-4 h-4 text-muted-foreground" />
                                </button>
                            </div>

                            <EmailCopyRow />
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                        {socials.map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                className={`skill-card p-6 text-center group transition-all duration-300 ${social.color}`}
                            >
                                <social.icon className="w-8 h-8 mx-auto mb-3 transition-transform group-hover:scale-110" />
                                <span className="text-sm font-medium">{social.name}</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;

function EmailCopyRow() {
    const [copied, setCopied] = useState(false);
    const email = 'fayzb315@gmail.com';

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch (e) {
            // ignore
        }
    };

    return (
        <div className="mt-3 inline-flex items-center gap-3 text-muted-foreground">
            <Mail className="w-5 h-5 text-primary" />
            <a href="mailto:fayzb315@gmail.com" className="font-medium text-foreground">{email}</a>
            <button
                type="button"
                aria-label="Copy email"
                onClick={handleCopy}
                className="p-2 rounded-md bg-secondary/10 hover:bg-secondary/20 transition-colors"
            >
                <Copy className="w-4 h-4 text-muted-foreground" />
            </button>
            <span className="ml-2 text-sm text-primary" aria-hidden>{copied ? 'Copied!' : ''}</span>
        </div>
    );
}