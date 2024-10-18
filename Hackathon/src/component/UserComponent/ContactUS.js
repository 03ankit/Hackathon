// import React from 'react';
// import '../../script.css';

const ContactUs = () => {
    const styles = {
        container: {
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        },
        header: {
            color: '#333',
            fontSize: '2em',
            marginBottom: '10px',
        },
        paragraph: {
            color: '#555',
            lineHeight: '1.6',
        },
    };
    return (
        <div style={styles.container} className='about-container'>
            <h1 style={styles.header}>Contact Us</h1>
            <h3>We’d love to hear from you!</h3>
            <p>At Labor Connection, we believe that open communication is key to fostering strong relationships between laborers and clients. Whether you have questions, feedback, or need assistance, our team is here to help.</p>

            <h3>Get in Touch:</h3>
            <p>smth here.</p>

            <h3>For Laborers:</h3>
            <p>If you’re a laborer looking to submit your information, update your profile, or need assistance with the platform, please reach out to us. We're here to support you in connecting with clients.</p>

            <h3>For Clients:</h3>

            <p>If you have questions about our services, need help navigating the platform, or want to learn more about hiring laborers, don’t hesitate to contact us. We’re committed to ensuring you find the right professional for your needs.</p>
            <h3>Contact Information:</h3>
            <h4>Email:</h4>
            <p>For general inquiries or support, please email us at support@laborconnection.com.</p>
            <h4>Phone:</h4>
            <p>You can reach us at (123) 456-7890 during business hours (9 AM - 5 PM EST).</p>
            <h4>Social Media:</h4>
            <p>Follow us on our social media channels for updates, tips, and community stories!</p>
            <p>Facebook: facebook.com/laborconnection<br />
Twitter: twitter.com/laborconnection<br />
Instagram: instagram.com/laborconnection</p>
            <h4>Feedback:</h4>
            <p>Your feedback is invaluable to us! If you have suggestions for improving our platform or want to share your experience, please let us know. We’re constantly striving to enhance our services for both laborers and clients.
            </p>
            <p>Thank you for choosing Labor Connection! We look forward to hearing from you soon.</p>

        </div>
    );
};


export default ContactUs;