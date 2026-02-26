import { useParams, Navigate } from "react-router-dom"
import { getChapterBySlug } from "@/chapters/registry"

export default function ChapterPost() {
  const { slug } = useParams<{ slug: string }>()
  const chapter = slug ? getChapterBySlug(slug) : undefined

  if (!chapter) {
    return <Navigate to="/chapters" replace />
  }

  return <chapter.Component />
}
