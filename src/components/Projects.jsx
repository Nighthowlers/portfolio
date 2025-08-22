import { motion } from 'framer-motion';

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


export const Projects = () => {
    return (
    <motion.section id='projects' 
    className='projects' 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}>

        <motion.h2 
        variants={fadeInUp} 
        initial="initial" 
        whileInView={"animate"}
        viewport={{ once: true }}
        >
            My Projects
        </motion.h2> 
            <motion.div 
            className='project-grid'
            variants={staggerContainer}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            >
                <motion.div 
                className='project-card' 
                variants={fadeInUp}
                whileHover={{ y:-10,transition:{duration:0.3} }}>

                    <motion.div className='project-image'
                    style={{ backgroundImage: "url('/projects/Digital clock.png')" }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}/>
                        <h3>Digital Clock</h3>
                        <p>A simple digital clock using javascript and the ui is quite good of it.</p>
                        <div className='project-tech'>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                            
                        </div>
                </motion.div>

                <motion.div 
                className='project-card' 
                variants={fadeInUp}
                whileHover={{ y:-10,transition:{duration:0.3} }}>

                    <motion.div className='project-image'
                    style={{ backgroundImage: "url('/projects/to-do list.png')" }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}/>
                        <h3>To Do List</h3>
                        <p>A simple and intuitive to-do list application built with React, featuring a clean UI and local storage support.</p>
                        <div className='project-tech'>
                            <span>React</span>
                            <span>Vite</span>
                            <span>Tailwind CSS</span>
                        </div>
                </motion.div>

                <motion.div 
                className='project-card' 
                variants={fadeInUp}
                whileHover={{ y:-10,transition:{duration:0.3} }}>

                    <motion.div className='project-image'
                    style={{ backgroundImage: "url('/projects/ecommerce.png')" }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}/>
                        <h3>E Commerce Website</h3>
                        <p>ShopEasy: A modern e-commerce app with React, Vite, Tailwind CSS, featuring intuitive navigation, product displays, and seamless checkout.</p>
                        <div className='project-tech'>
                            <span>React</span>
                            <span>Vite</span>
                            <span>Tailwind CSS</span>
                            <span>React Router</span>
                        </div>
                    
                </motion.div>

            </motion.div>

    </motion.section>
    );
};