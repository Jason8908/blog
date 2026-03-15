import { cn } from "@/lib/utils"
import { Clock } from "lucide-react"

interface ReadingTimeProps {
  wordCount: number
  className?: string
}

export default function ReadingTime({ wordCount, className }: ReadingTimeProps) {
  const minutes = Math.max(1, Math.round(wordCount / 230))

  return (
    <p className={cn("flex items-center gap-1.5 text-sm text-muted-foreground", className)}>
      <Clock className="size-3.5" />
      {minutes} min read
    </p>
  )
}