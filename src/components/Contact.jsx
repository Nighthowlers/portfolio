import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'; 
import { useState } from 'react';

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

export const Contact = () => {

   const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: '',
   });
   const [formStatus, setFormStatus] = useState({
       success: false,
       error: false,
       submitting: false,
       message: '',
   });


   const handleInputChange = (e) => {
       const { name, value } = e.target;
       setFormData((prev) => ({
           ...prev,
           [name]: value,
       }));
   };

   const handleSubmit = async (e) => {
         e.preventDefault();

         setFormStatus({ 
            success: false,
            error: false,
            submitting: true,
            message: '',
        });

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }
            );
            setFormStatus({ 
                success: true, 
                error: false, 
                submitting: false, 
                message: 'Message sent successfully!' //when mail is sent successfully
            });
            setFormData({ 
                name: '', 
                email: '', 
                message: '',
            }); // this is to Reset form

        
        } catch (error) {
            setFormStatus({ 
                success: false, 
                error: true, 
                submitting: false, 
                message: 'An error occurred while sending the message.' // when error occurs
            });
        }
    };

    return (
    <motion.section 
    id='contact'
    className='contact'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    >
        <motion.h2 
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
        >
            Get in Touch
        </motion.h2>

        <motion.div className='contact-content'
        variants={fadeInUp}
        >
            <motion.form 
            className='contact-form' 
            onSubmit={handleSubmit}>
                <motion.input 
                type="text" 
                name="name" 
                placeholder='Your Name...' 
                required
                whileFocus={{ scale: 1.03 }}
                onChange={handleInputChange}/>

                <motion.input 
                type="email" 
                name="email" 
                required
                placeholder='Your Email...' 
                whileFocus={{ scale: 1.03 }}
                onChange={handleInputChange}/>

                <motion.textarea
                name="message"
                required
                placeholder='Your Message...'
                whileFocus={{ scale: 1.03 }}
                onChange={handleInputChange}
                />

                <motion.button 
                type="submit"
                className='submit-btn'
                whileHover={{ scale: 1.05}}
                whileTap={{ scale: 0.95 }} 
                disabled={formStatus.submitting}
                >
                    {formStatus.submitting ? 'Sending...' : 'Send Message'}
                </motion.button>
                 {formStatus.message && (
                    <motion.div 
                    className={`form-status ${
                        formStatus.success ? 'success' : 'error'
                    } `}>
                        {formStatus.message}
                    </motion.div>
                 )}

            </motion.form>
        </motion.div>
    </motion.section>
    );
};