import { cn } from "@/lib/utils"

interface ProseProps {
  children: React.ReactNode
  className?: string
}

export default function Prose({ children, className }: ProseProps) {
  return (
    <div className={cn("space-y-4 text-xl leading-relaxed tracking-wide", className)}>
      {children}
    </div>
  )
}
