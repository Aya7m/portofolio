"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/app/data/projects";
import Image from "next/image";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 text-sm font-medium text-muted-foreground">
          Portfolio
        </p>

        <h2 className="mb-3 text-4xl font-bold tracking-tight">
          Featured Projects
        </h2>

        <p className="mb-12 max-w-2xl text-muted-foreground">
          Selected projects demonstrating full-stack development, business
          logic, authentication, dashboards, and database design.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-background/80 shadow-sm backdrop-blur transition hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mb-5 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="mt-auto text-sm font-medium transition group-hover:translate-x-1">
                  View Case Study →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}