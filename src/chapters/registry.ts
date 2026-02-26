import type { ChapterMeta } from "@/types/chapter"

const metaModules = import.meta.glob<{ meta: ChapterMeta }>("./*/meta.ts", { eager: true })
const componentModules = import.meta.glob<{ default: React.ComponentType }>("./*/index.tsx", { eager: true })

export const chapters: { meta: ChapterMeta; Component: React.ComponentType }[] =
  Object.entries(metaModules)
    .map(([path, mod]) => {
      const dir = path.replace("/meta.ts", "/index.tsx")
      const component = componentModules[dir]
      return { meta: mod.meta, Component: component.default }
    })
    .sort((a, b) => a.meta.chapter - b.meta.chapter)

export function getChapterBySlug(slug: string) {
  return chapters.find((ch) => ch.meta.slug === slug)
}
