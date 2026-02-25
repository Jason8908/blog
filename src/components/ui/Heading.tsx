import { cn } from "@/lib/utils"

type Level = 1 | 2 | 3 | 4

const styles: Record<Level, string> = {
  1: "text-4xl font-bold tracking-tight",
  2: "text-3xl font-semibold tracking-tight",
  3: "text-2xl font-semibold",
  4: "text-xl font-medium",
}

interface HeadingProps {
  level?: Level
  children: React.ReactNode
  className?: string
}

export default function Heading({ level = 1, children, className }: HeadingProps) {
  const Tag = `h${level}` as const

  return (
    <Tag className={cn(styles[level], className)}>
      {children}
    </Tag>
  )
}
