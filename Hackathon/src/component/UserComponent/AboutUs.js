import React from 'react';
// import '../../script.css';

const About = () => {
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
            <h1 style={styles.header}>About Us</h1>
            <h3>Welcome to the Labor Connection Platform!</h3>

<h3>Our Mission:</h3>
<p>At Labor Connection, we aim to bridge the gap between skilled laborers and clients in need of their services. We believe that every laborer deserves a fair opportunity to showcase their skills and connect with those who require their expertise.</p>

<h3>Who We Are:</h3>
<p>Our team is dedicated to creating a user-friendly platform that empowers laborers to share their work experience, specialties, and pricing. We understand the challenges laborers face in finding clients, and we strive to provide a space where they can be easily discovered and hired.</p>

<h3>What We Offer:</h3>

<p>Laborer Profiles: Laborers can submit detailed profiles, including their work types, years of experience, and hourly charges, allowing clients to find the right fit for their needs.</p>
Easy Navigation: 
Clients can effortlessly browse through a diverse range of laborers, filter results based on their requirements, and initiate contact directly.
Transparent Communication: Our platform encourages clear communication between clients and laborers, enabling them to negotiate terms and ensure mutual understanding.
<h3>Why Choose Us:</h3>

Empowerment: We prioritize giving laborers a voice and a platform to promote their skills.
Accessibility: Our easy-to-use interface ensures that both laborers and clients can navigate the platform with confidence.
Community Focus: We believe in building a supportive community where laborers can thrive and clients can find reliable help.
Join Us:
Whether you’re a laborer looking to expand your clientele or a client seeking skilled professionals for your projects, Labor Connection is here to facilitate that connection. Together, we can create a more equitable marketplace for labor services.

Thank you for being a part of our journey!
            <p style={styles.paragraph}>
                Welcome to our community! We are dedicated to supporting laborers by providing a
                captivating platform that orchestrates opportunities and resources. Our goal is to
                transcend barriers and ensure that every individual can navigate the labyrinth of
                their career path with confidence.
            </p>
            <p style={styles.paragraph}>
                Our vision is a verdant mosaic of support, where victuals of knowledge and skills
                intertwine to empower everyone. We believe in reimagined possibilities and aim to
                be a crucible of growth for all.
            </p>
            <p style={styles.paragraph}>
                Join us as we continue to explore the enigmatic challenges faced by laborers and
                work together to craft a brighter future.
            </p>
        </div>
    );
};


export default About;