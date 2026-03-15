import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={cn("py-8 space-y-4", className)}>
      {children}
    </section>
  )
}
