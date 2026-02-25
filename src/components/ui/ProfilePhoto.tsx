import { cn } from "@/lib/utils"

interface ProfilePhotoProps {
  src: string
  alt: string
  size?: "sm" | "md" | "lg"
  className?: string
}

const sizes = {
  sm: "h-20 w-20",
  md: "h-32 w-32",
  lg: "h-44 w-44",
}

export default function ProfilePhoto({ src, alt, size = "md", className }: ProfilePhotoProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("rounded-full object-cover border border-border", sizes[size], className)}
    />
  )
}
