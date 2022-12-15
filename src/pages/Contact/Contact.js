import React from 'react';
import './Contact.css';
// import Button from '../../components/Button/Button';

export default function Contact() {
    return (
    <>
        <h1>CONTACT US</h1>
        <form className="contact-us" id="contact-us">
            <div className="first-name">
                <label for="first-name">First name*</label>
                <input 
                    type="text"
                    id="first-name"
                    name="first-name"
                    placeholder="Caleb" 
                    required 
                />
            </div>
            <div className="last-name">
                <label for="last-name">Last name</label>
                <input 
                    type="text" 
                    id="last-name" 
                    name="last-name" 
                    placeholder="Wilson" 
                />
            </div>
            <div className="email">
                <label for="email">Email address*</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    autocomplete="off" 
                    placeholder="email@example.com" 
                    required
                />
            </div>
            <div className="subject">
                <label for="subject">Subject</label>
                <select 
                    name="subject" 
                    id="select" 
                    name="subject" 
                    placeholder="Select one">
                        <option value="general">General Enquiry</option>
                        <option value="registration">Player Registration</option>
                        <option value="membership">Become a Member</option>
                        <option value="donation">Donations</option>
                        <option value="volunteer">Volunteer</option>
                        <option value="tickets">Game Tickets</option>
                        <option value="sponsorship">Sponsorship</option>
                        <option value="careers">Careers</option>
                </select>
            </div>
            <div className="message">
                <label for="message">Message*</label>
                <input 
                    type="textarea" 
                    id="message" 
                    name="message" 
                    placeholder="Type your message here" 
                    required 
                />
            </div>
                    {/* <Button 
                        onClick={ this.handleClick } 
                        value="Submit"
                        styleClass="btn-primary" /> */}
        </form>
    </>
  );
}