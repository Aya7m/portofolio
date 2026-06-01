export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            About Me
          </p>

          <h2 className="text-4xl font-bold tracking-tight">
            Full Stack Developer focused on building useful, real-world
            applications.
          </h2>
        </div>

        <div className="space-y-5 text-muted-foreground">
          <p>
            I am a Computer Science graduate from Minia University with a Very
            Good grade and a Full Stack Developer specializing in React,
            Next.js, Express.js, NestJS, MongoDB, and PostgreSQL.
          </p>

          <p>
            I enjoy building complete web applications that solve real-world
            problems, from designing intuitive user interfaces to developing
            scalable backend systems and efficient database architectures.
          </p>

          <p>
            My projects include a School Management System, a Personalized
            Nutrition Platform, and an English Learning Platform, all focused
            on solving practical challenges through technology.
          </p>

          <p>
            My work emphasizes authentication, role-based access control,
            dashboards, business logic, API development, and database design.
          </p>

          <p>
            I care about clean code, maintainable architecture, user experience,
            and transforming ideas into complete digital products.
          </p>
        </div>
      </div>
    </section>
  );
}