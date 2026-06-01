"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const techs = [
  "React",
  "Next.js",
  "Express.js",
  "NestJS",
  "MongoDB",
  "PostgreSQL",
];

export function Hero() {
  return (
    <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <motion.span
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex rounded-full border bg-secondary/40 px-4 py-2 text-sm text-muted-foreground"
        >
          Full Stack Developer • Open To Opportunities
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Hi, I&apos;m Aya Ahmed👋
          <br />
          Building modern full-stack web applications.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground"
        >
          Computer Science graduate from Minia University with a Very Good
          grade. I build scalable applications using React, Next.js, Express.js,
          NestJS, MongoDB, and PostgreSQL.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border px-7 py-3 text-sm font-medium transition hover:bg-secondary"
          >
            Contact Me
          </a>

          <a
            href="/resume.pdf"
            download
            className="rounded-full border px-7 py-3 text-sm font-medium transition hover:bg-secondary"
          >
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {techs.map((tech) => (
            <span
              key={tech}
              className="rounded-full border bg-background/60 px-4 py-2 text-sm text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative hidden lg:flex justify-center"
      >
        <div className="absolute left-8 top-8 h-52 w-52 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-8 right-8 h-52 w-52 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative">
          <div className="overflow-hidden rounded-[2.5rem] border bg-background/70 p-4 shadow-2xl backdrop-blur">
            <Image src="/avatar.png" alt="Aya Avatar" width={430} height={520} />
          </div>

          <FloatingCard
            className="-left-10 top-10"
            title="CS Graduate"
            subtitle="Minia University"
          />
          <FloatingCard
            className="-right-8 top-28"
            title="MERN Stack"
            subtitle="Developer"
          />
          <FloatingCard
            className="bottom-10 -left-8"
            title="Open To Work"
            subtitle="Remote / On-site"
          />
        </div>
      </motion.div>
    </section>
  );
}

function FloatingCard({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle: string;
  className: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute rounded-2xl border bg-background/80 text-purple-700 px-5 py-4 shadow-xl backdrop-blur ${className}`}
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </motion.div>
  );
}
