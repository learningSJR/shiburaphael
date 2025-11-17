import React from "react";
import Reveal from "@/components/common/Reveal.jsx";
import Button from "@/components/ui/Button.jsx";
import profile from "@/data/profile.js";

export default function Contact() {
  return (
    <main className="section space-y-12 xl:px-12">
      <Reveal className="pt-28">
        <h2 className="text-4xl font-heading font-bold text-primary mb-6 text-center">
          Get in Touch
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-10">
        <Reveal direction="right">
          <form onSubmit={(e) => e.preventDefault()} className="card space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-slate-300 rounded-lg p-2 focus:border-primary outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-slate-300 rounded-lg p-2 focus:border-primary outline-none"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-slate-300 rounded-lg p-2 focus:border-primary outline-none"
            ></textarea>
            <Button type="submit">Send Message</Button>
          </form>
        </Reveal>

        <Reveal direction="left" delay={0.2}>
          <div className="card space-y-2 text-sm">
            <p>
              <strong>Email:</strong> {profile.email}
            </p>
            <p>
              <strong>Phone:</strong> {profile.phone}
            </p>
            <p>
              <strong>Location:</strong> {profile.location}
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={profile.website}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                {profile.website}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
