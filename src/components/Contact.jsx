import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, CalendarDays } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 section-gradient-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 font-display gradient-text">Let's Connect</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary-700">Let's Collaborate</h3>
              <p className="text-neutral-700 mb-6">
                Whether you’re looking to launch a digital campaign, refresh your brand visuals, 
                or need project management support — I’d love to connect and bring your ideas to life.
              </p>
              
             {/* Contact Details */}
              <div className="space-y-5">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-primary-600 mr-3" />
                  <a
                    href="mailto:makhosazana.mthethwa@email.com"
                    className="text-neutral-700 hover:text-primary-600 transition-colors"
                  >
                    khosmthethwa96@gmail.com
                  </a>
                </div>

                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-primary-600 mr-3" />
                  <span className="text-neutral-700">+27 76 877 6425</span>
                </div>
              </div>

              {/* Calendly Button */}
              <motion.a
                href="https://calendly.com/makhosazana-mthethwa" // Replace with her real Calendly link
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center mt-8 px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg shadow-md hover:opacity-90 transition-all font-medium"
              >
                <CalendarDays className="w-5 h-5 mr-2" />
                Book Appointment
              </motion.a>
            </div>

            {/* Right Column - Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-neutral-200"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-primary"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;