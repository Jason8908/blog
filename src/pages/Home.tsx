import Section from "@/components/ui/Section"
import Heading from "@/components/ui/Heading"
import Prose from "@/components/ui/Prose"
import ProfilePhoto from "@/components/ui/ProfilePhoto"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <Section className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
        <ProfilePhoto
          src="/profile.png"
          alt="Jason Su"
          size="lg"
        />
        <div>
          <Heading level={1}>Jason Su</Heading>
          <p className="mt-2 text-lg text-muted-foreground">
            What makes life worth living?
          </p>
        </div>
      </Section>

      <Section>
        <Prose className="mt-4">
          <p>
            Much of my time recently has been spent on advancing my career; working on ways
            to improve my skills, and to get better at my craft. Almost all of the projects
            I've built in the last year or so have been to push this goal forward.
          </p>
          <p>
            This site is different.
          </p>
          <p>
            Most of the things I put on here won't be work related, and some of it might be a jumble
            of incoherent thoughts; nonetheless, they serve as an insight into the inner machinations 
            of my mind.
          </p>
          <p>Not written with AI, obviously.</p>
          <Link to="/chapters" className="text-primary underline">View Chapters</Link>
        </Prose>
      </Section>
    </>
  )
}
