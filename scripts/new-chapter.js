import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const chaptersDir = path.resolve(__dirname, "../src/chapters")

const args = process.argv.slice(2)
if (args.length < 1) {
  console.error("Usage: npm run new-chapter -- <title>")
  console.error('Example: npm run new-chapter -- "Building Great Software"')
  process.exit(1)
}

const title = args.join(" ")
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "")

const componentName = title
  .replace(/[^a-zA-Z0-9 ]/g, "")
  .split(" ")
  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
  .join("")

const existingChapters = fs
  .readdirSync(chaptersDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
const chapterNumber = existingChapters.length + 1

const today = new Date().toISOString().split("T")[0]

const chapterDir = path.join(chaptersDir, slug)
if (fs.existsSync(chapterDir)) {
  console.error(`Chapter directory already exists: ${slug}`)
  process.exit(1)
}

fs.mkdirSync(chapterDir, { recursive: true })

const metaContent = `import type { ChapterMeta } from "@/types/chapter"

export const meta: ChapterMeta = {
  title: "${title}",
  chapter: ${chapterNumber},
  description: "",
  slug: "${slug}",
  date: "${today}",
  wordCount: 0,
}
`

const indexContent = `import { meta } from "./meta"
import Section from "@/components/ui/Section"
import Heading from "@/components/ui/Heading"
import Prose from "@/components/ui/Prose"
import ReadingTime from "@/components/ui/ReadingTime"

export default function ${componentName}() {
  return (
    <>
      <Section>
        <Heading level={1}>Chapter {meta.chapter}: {meta.title}</Heading>
        <p className="mt-2 text-sm text-muted-foreground">{meta.date}</p>
        <ReadingTime wordCount={meta.wordCount} />
      </Section>

      <Section>
        <Prose>
          <p>
            Start writing here...
          </p>
        </Prose>
      </Section>
    </>
  )
}
`

fs.writeFileSync(path.join(chapterDir, "meta.ts"), metaContent)
fs.writeFileSync(path.join(chapterDir, "index.tsx"), indexContent)

console.log(`Created chapter ${chapterNumber}: "${title}"`)
console.log(`  → src/chapters/${slug}/meta.ts`)
console.log(`  → src/chapters/${slug}/index.tsx`)
