import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={cn("py-8", className)}>
      {children}
    </section>
  )
}
