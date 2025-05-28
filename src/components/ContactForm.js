import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState({
        submitting: false,
        submitted: false,
        error: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus({ submitting: true, submitted: false, error: false });

        // This is where you would typically send the form data to a backend
        // For now, we'll just simulate a successful submission after a delay
        setTimeout(() => {
            setFormStatus({ submitting: false, submitted: true, error: false });
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1000);
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            {formStatus.submitted && (
                <div className="form-success">
                    Your message has been sent successfully! I'll get back to you soon.
                </div>
            )}

            {formStatus.error && (
                <div className="form-error">
                    There was an error sending your message. Please try again.
                </div>
            )}

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                ></textarea>
            </div>

            <button 
                type="submit" 
                className="submit-btn"
                disabled={formStatus.submitting}
            >
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
};

export default ContactForm;