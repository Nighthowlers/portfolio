import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const Hero = () => {
    return (
        <motion.section id='home'
            className="hero" 
            initial={{ opacity: 0}}
            animate={{ opacity: 1}} 
            transition={{ duration: 0.8, delay: 0.2 }}
        >
        <div className="hero-container">
            <motion.div className="hero-content" variants={staggerContainer} initial="initial" 
            animate="animate"
            >
                <motion.div className="hero-badge">
                    <span>👋 Hello, I'm </span>
                </motion.div>
                <motion.h1 className="glitch" variants={fadeInUp}
                whileHover={{ scale: 1.02 }} 
                >
                    Pranjal Kumar Mishra
                </motion.h1>
                <motion.h2 className="hero-subtitle" variants={fadeInUp}>
                    Full-Stack Developer | React.js & AI Enthusiast
                </motion.h2>
                <motion.p className="hero-description" variants={fadeInUp}>
                    Crafting seamless digital experiences with a passion for innovation and creativity.
                </motion.p>

                <motion.div className="cta-buttons">
                    <motion.a href='#projects'  className="cta-primary" whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                        View My Work
                    </motion.a>
                    <motion.a href='#contact' className="cta-secondary" whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                        Contact Me
                    </motion.a>
                </motion.div>

                <motion.div className="social-links" variants={staggerContainer}>
                    <motion.a target='_blank' href='https://github.com/yourusername'>
                        <i className="fab fa-github"></i>
                    </motion.a>

                    <motion.a target='_blank' href='https://linkedin.com/in/yourusername'>
                        <i className="fab fa-linkedin"></i>
                    </motion.a>
                </motion.div>
            </motion.div>

            <motion.div className='hero-image-container'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className='code-display'>
                    <SyntaxHighlighter 
                    style={vscDarkPlus}
                    language="typescript"
                    customStyle={{
                        borderRadius: '20px',
                        padding: '2rem',
                        height: '100%', 
                        background: 'rgba(30, 41, 59, 0.8)',
                        backdropFilter:"blur(10px)" ,
                        marginBottom:50
                    }}
                    >

                        {`const aboutMe: DeveloperProfile = {
  codename: "Pranjal Kumar Mishra",
  origin: "🌍 Somewhere between a coffee shop and a terminal",
  role: "Fullstack Web Sorcerer",
  stack: {
    languages: ["JavaScript", "TypeScript", "SQL"],
    frameworks: ["React", "Next.js", "TailwindCSS"],
  },
  traits: [
    "pixel-perfectionist",
    "API whisperer",
    "dark mode advocate",
    "terminal aesthetic enthusiast",
  ],
  missionStatement:
    "Turning ideas into interfaces and bugs into feature",
  availability: "Available for hire",
};`}

                    </SyntaxHighlighter>
                </div>

                <motion.div className='floating-card' animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                    <div className='card-content'>
                        <span className='card-icon'>👨‍💻</span>
                        <span className='card-text'> Currently working on something Awesome!</span>
                    </div>
                </motion.div>

            </motion.div>
        </div>
        </motion.section>
    );
};