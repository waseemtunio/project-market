"use client";
import { useState } from "react";
import { HeroAllSection } from "../components/HeroAllSection";
import { TextCounterSection } from "../components/TextCounterSection";
import AnimatedButton from "../components/AnimatedButton";

export default function page() {
  const [status, setStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };
  return (
    <>
      <HeroAllSection
        title1={"let’s talk about"}
        title2={"growing your business"}
        description={`Need better visibility, stronger branding, <br/> or scroll-stopping video? Tell us what you<br/> need — we’ll help you get there.`}
      />

      <TextCounterSection
        text={`Start your project — or just start the conversation.`}
        paragraph={`Tell us what’s not working — and where you want to go. We’ll respond with clear steps to help.`}
      />

      <section className="contact-sec">
        <div className="container-w1">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="projectType">Project Type*</label>
                <select id="projectType" name="projectType" required>
                  <option value="" disabled>
                    Select project type
                  </option>
                  <option>Web Design</option>
                  <option>Branding</option>
                  <option>Marketing</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="budget">Project Budget*</label>
                <select id="budget" name="budget" required>
                  <option value="" disabled>
                    Select budget
                  </option>
                  <option>Under $1,000</option>
                  <option>$1,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000+</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="referral">How did you hear about us?</label>
              <select id="referral" name="referral">
                <option value="" disabled>
                  Select
                </option>
                <option>Google</option>
                <option>Social Media</option>
                <option>Friend/Referral</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell us about your project*</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us more..."
                required
              ></textarea>
            </div>

            <div className="btn form-btn">
              <AnimatedButton as="button" type="submit">
                Submit
              </AnimatedButton>
            </div>

            {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
          </form>
        </div>
      </section>
    </>
  );
}
