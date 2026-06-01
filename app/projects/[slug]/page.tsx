import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { projects } from "@/app/data/projects";
import { FadeIn } from "@/components/shared/FadeIn";
import { FaGithub } from "react-icons/fa";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetails({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={16} />
        Back to Projects
      </Link>

      <section className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <FadeIn>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Full Stack Case Study
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.liveDemo}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>

            <a
              href={project.frontendGithub}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium hover:bg-secondary"
            >
              <FaGithub size={16} />
              Frontend
            </a>

            <a
              href={project.backendGithub}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium hover:bg-secondary"
            >
              <FaGithub size={16} />
              Backend
            </a>
          </div>
        </FadeIn>

        <FadeIn className="h-fit rounded-3xl border bg-secondary/30 p-6 lg:sticky lg:top-24">
          <h2 className="mb-6 text-xl font-semibold">Project Info</h2>

          <div className="space-y-5">
            <Info label="Role" value={project.role} />
            <Info label="Frontend" value={project.frontend} />
            <Info label="Backend" value={project.backend} />
            <Info label="Database" value={project.database} />
            <Info label="Year" value={project.year} />
            <Info label="Status" value={project.status} />
          </div>
        </FadeIn>
      </section>

      <FadeIn className="mt-14 overflow-hidden rounded-[2rem] border bg-secondary/30">
        <Image
          src={project?.image}
          alt={project.title}
          width={1600}
          height={900}
          priority
          className="w-full object-cover"
        />
      </FadeIn>

      {project.metrics?.length > 0 && (
        <FadeIn className="grid gap-6 py-20 md:grid-cols-4">
          {project.metrics.map((metric) => (
            <div key={metric} className="rounded-3xl border p-6 text-center">
              <h3 className="text-2xl font-bold">{metric}</h3>
            </div>
          ))}
        </FadeIn>
      )}

      <FadeIn className="grid gap-12 py-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            Overview
          </p>
          <h2 className="text-4xl font-bold tracking-tight">
            What this project solves
          </h2>
        </div>

        <div className="space-y-6 text-lg text-muted-foreground">
          <p>{project.overview}</p>
          <p>
            This project covers frontend development, backend API design,
            authentication, database modeling, and real business logic.
          </p>
        </div>
      </FadeIn>

      {project.gallery?.length > 0 && (
        <FadeIn className="py-16">
          <SectionTitle label="Gallery" title="Project Screens" />

          <div className="grid gap-6 md:grid-cols-2">
            {project.gallery.map((image) => (
              <div
                key={image}
                className="overflow-hidden rounded-3xl border bg-secondary/40"
              >
                <Image
                  src={image}
                  alt={project.title}
                  width={900}
                  height={600}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      )}

      <FadeIn className="py-16">
        <SectionTitle label="Tech Stack" title="Technologies used" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(project.techStack).map(([category, items]) => (
            <div key={category} className="rounded-3xl border p-6">
              <h3 className="mb-4 text-xl font-semibold capitalize">
                {category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border px-3 py-1 text-sm text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="py-16">
        <SectionTitle
          label="Development Process"
          title="How the project was built"
        />

        <div className="space-y-6">
          {project.timeline.map((step, index) => (
            <div key={step.title} className="flex gap-6 rounded-3xl border p-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {index + 1}
              </div>

              <div>
                <h3 className="text-xl font-semibold">{step.title}</h3>

                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
      <FadeIn className="py-16">
        <SectionTitle label="Features" title="Key functionality" />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {project.features.map((feature, index) => (
            <div
              key={feature}
              className="rounded-3xl border p-6 transition hover:-translate-y-1 hover:bg-secondary/40"
            >
              <span className="text-sm text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{feature}</h3>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="py-16">
        <div className="rounded-3xl border bg-secondary/40 p-8 md:p-10">
          <SectionTitle label="Architecture" title="System structure" />

          <div className="grid gap-4 md:grid-cols-3">
            <ArchitectureCard label="Client" value="React Frontend" />
            <ArchitectureCard label="Server" value="Express REST API" />
            <ArchitectureCard label="Database" value="MongoDB" />
          </div>
        </div>
      </FadeIn>

      <FadeIn className="grid gap-6 py-16 md:grid-cols-2">
        <div className="rounded-3xl border p-8">
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            Challenge
          </p>
          <h2 className="mb-4 text-3xl font-bold">Main technical challenge</h2>
          <p className="text-muted-foreground">{project.challenge}</p>
        </div>

        <div className="rounded-3xl border p-8">
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            Learning
          </p>
          <h2 className="mb-4 text-3xl font-bold">What I learned</h2>
          <p className="text-muted-foreground">{project.learned}</p>
        </div>
      </FadeIn>
      <NextProjectCard currentSlug={slug} projects={projects} />
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-sm font-medium text-muted-foreground">{label}</p>
      <h2 className="text-4xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

function ArchitectureCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-background p-6 text-center shadow-sm">
      <p className="text-sm text-muted-foreground">{label}</p>
      <h3 className="mt-2 text-xl font-semibold">{value}</h3>
    </div>
  );
}

function NextProjectCard({
  currentSlug,
  projects,
}: {
  currentSlug: string;
  projects: any[];
}) {
  const currentIndex = projects.findIndex((item) => item.slug === currentSlug);

  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <FadeIn className="py-20">
      <Link
        href={`/projects/${nextProject.slug}`}
        className="group block rounded-[2rem] border bg-secondary/40 p-8 transition hover:-translate-y-1 hover:shadow-xl md:p-12"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Next Project
        </p>

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">
              {nextProject.title}
            </h2>

            <p className="mt-4 max-w-2xl text-muted-foreground">
              {nextProject.description}
            </p>
          </div>

          <span className="text-lg font-medium transition group-hover:translate-x-2">
            View Case Study →
          </span>
        </div>
      </Link>
    </FadeIn>
  );
}
