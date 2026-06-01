"use client";

import { useState } from "react";

export function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xojbovny", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("Message sent successfully.");
      form.reset();
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl border bg-secondary/40 p-8 md:p-14">
        <p className="mb-3 text-sm font-medium text-muted-foreground">
          Contact
        </p>

        <h2 className="text-4xl font-bold tracking-tight">
          Let&apos;s work together.
        </h2>

        <p className="mt-5 max-w-2xl text-muted-foreground">
          Send me a message for opportunities, collaborations, or full-stack
          development projects.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-5">
          <input
            name="name"
            required
            placeholder="Your name"
            className="rounded-2xl border bg-background px-5 py-4 outline-none"
          />

          <input
            name="email"
            type="email"
            required
            placeholder="Your email"
            className="rounded-2xl border bg-background px-5 py-4 outline-none"
          />

          <textarea
            name="message"
            required
            placeholder="Your message"
            rows={6}
            className="rounded-2xl border bg-background px-5 py-4 outline-none"
          />

          <button
            type="submit"
            className="rounded-full bg-primary px-6 py-4 font-medium text-primary-foreground"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="mt-5 text-sm text-muted-foreground">{status}</p>
        )}
      </div>
    </section>
  );
}