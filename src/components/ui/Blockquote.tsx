import { cn } from "@/lib/utils"

interface BlockquoteProps {
  children: React.ReactNode
  className?: string
}

export default function Blockquote({ children, className }: BlockquoteProps) {
  return (
    <blockquote className={cn("border-l-[3px] border-muted-foreground/40 pl-4 text-muted-foreground/80 italic", className)}>
      {children}
    </blockquote>
  )
}
