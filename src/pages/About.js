import React from 'react';
import aboutusimg from '../assets/aboutusimg2.jpg';
import '../styles/About.css'
function About() {
  return (
    <div className='about'>
        <div className='aboutTop'
        style={{ backgroundImage: `url(${aboutusimg})` }}
        ></div>
        <div className='aboutBottom'>
            <h1>About Us</h1>
            <p className='aboutus1'>
            Welcome to RGV construction, your trusted partner in construction services in the heart of the Rio Grande Valley, Texas.
            As a family-owned and operated business, we understand the value of hard work, dedication, and integrity. With a legacy
            spanning 10 years, we take immense pride in our craftsmanship and unwavering commitment to excellence.
            At RGV construction, we believe that every project tells a story, and we are passionate about bringing your vision to life.
            Whether it's building custom decks, sheds, carports, or any other residential property item, we approach each endeavor with
            meticulous attention to detail and a dedication to exceeding expectations.
           </p>
           <p className='aboutus2'>
           What sets us apart is not just the <strong>quality of our workmanship,</strong>  but also the relationships we build with our clients. We understand the
           importance of trust, and our solid reputation in the community speaks volumes about our reliability and professionalism. From the initial
           consultation to the final touches, we prioritize clear communication, transparency, and customer satisfaction every step of the way.
           As proud members of the Rio Grande Valley community, we are committed to contributing positively to its growth and prosperity. We strive to
           uphold our values of integrity, honesty, and respect in everything we do, both on and off the job site.
           Thank you for considering RGV construction for your construction needs. We look forward to the opportunity to serve you and to create something
            truly exceptional together.
           </p>
        </div>
    </div>
  );
}

export default About;
