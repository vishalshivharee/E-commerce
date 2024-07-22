import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Whether you have a question, comment, or concern, please don't hesitate to reach out.</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" />
        <br />
        <br />
        <input type="submit" value="Send" />
      </form>
      <p>Alternatively, you can reach us at:</p>
      <ul>
        <li>Phone: 8253011939</li>
        <li>Email: <a href="mailto:vishalshivhare7015.com">vishalshivhare7015@gmail.com</a></li>
        <li>Social Media: <a href="https://www.twitter.com/example">@dimpycollection</a></li>
      </ul>
      <p>Our operating hours are:</p>
      <ul>
        <li>Monday - Friday: 9am - 5pm EST</li>
        <li>Saturday - Sunday: Closed</li>
      </ul>
    </div>
  );
};

export default ContactUs;