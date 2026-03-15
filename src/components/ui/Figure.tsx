import { cn } from "@/lib/utils"

interface FigureProps {
  src: string
  alt: string
  caption?: string
  className?: string
}

export default function Figure({ src, alt, caption, className }: FigureProps) {
  return (
    <figure className={cn("space-y-2 ", className)}>
      <img
        src={src}
        alt={alt}
        className="w-full rounded-lg border-2 border-border object-cover"
      />
      {caption && (
        <figcaption className="text-center text-sm text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
