import Section from "@/components/ui/Section"
import Heading from "@/components/ui/Heading"
import Prose from "@/components/ui/Prose"
import ProfilePhoto from "@/components/ui/ProfilePhoto"
import { Link } from "react-router-dom"
import { ArrowRightIcon } from "lucide-react"

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
            How is it that you want to be remembered?
          </p>
        </div>
      </Section>

      <Section>
        <Prose className="mt-4">
          <p>
            Much of my time recently has been spent on advancing my career; I've been working on ways
            to improve my skills, and to get better at my craft. Almost all of the projects
            I've built in the last year or so have been to push this goal forward.
          </p>
          <p>
            I wanted to try something different.
          </p>
          <p>
            The things I put on here won't be work related, and some of it might be a jumble
            of incoherent thoughts; nonetheless, they serve as an insight into the inner machinations 
            of my mind.
          </p>
          <p>Not written with AI, obviously.</p>
          <Link to="/chapters" className="text-primary underline">
            Chapters
            <ArrowRightIcon className="ml-2 inline-block w-4 h-4" />
          </Link>
        </Prose>
      </Section>
    </>
  )
}
