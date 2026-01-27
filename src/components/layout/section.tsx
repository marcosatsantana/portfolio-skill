import { cn } from "../../lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerClassName?: string
}

export function Section({ className, containerClassName, children, ...props }: SectionProps) {
  return (
    <section
      className={cn("min-h-screen py-20 px-6 border-b border-border relative overflow-hidden", className)}
      {...props}
    >
      <div className={cn("max-w-7xl mx-auto h-full flex flex-col justify-center", containerClassName)}>
        {children}
      </div>
    </section>
  )
}
