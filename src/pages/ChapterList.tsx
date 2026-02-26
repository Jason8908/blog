import { Link } from "react-router-dom"
import { chapters } from "@/chapters/registry"
import Section from "@/components/ui/Section"
import Heading from "@/components/ui/Heading"
import { BookMarked } from "lucide-react"

export default function ChapterList() {
  return (
    <>
      <Section>
        <Heading level={1} className="font-normal">
          Chapters
        </Heading>
      </Section>
      {chapters.length === 0 ? (
        <p className="text-muted-foreground">Nothing here yet!</p>
      ) : (
      <div className="space-y-6">
        {chapters.map(({ meta }) => (
          <Link
            key={meta.slug}
            to={`/chapters/${meta.slug}`}
            className="flex items-center gap-6 rounded-lg border border-border p-5 transition-colors hover:bg-accent"
          >
            <span className="text-4xl select-none">
              <BookMarked className="w-8 h-8" />
            </span>
            <div>
              <h2 className="text-xl font-semibold">
                {meta.title}
                <span className="ml-4 mt-1 text-sm text-muted-foreground">{meta.date}</span>
              </h2>
              <p className="mt-2 text-muted-foreground">{meta.description}</p>
            </div>
          </Link>
        ))}
      </div>
      )}
    </>
  ) 
}
