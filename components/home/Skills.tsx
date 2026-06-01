const skills = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "Mongoose", "Prisma"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "Deployment"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-3 text-4xl font-bold">Technical Skills</h2>

      <p className="mb-12 text-muted-foreground">
        Technologies I use to build full-stack web applications.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <div key={group.title} className="rounded-2xl border p-6">
            <h3 className="mb-4 text-xl font-semibold">{group.title}</h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}