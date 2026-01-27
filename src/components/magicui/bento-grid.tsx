import { type ReactNode } from "react";
import { cn } from "../../lib/utils";

export const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon?: any;
  description: string;
  href?: string;
  cta?: string;
}) => {
  return (
    <div
      key={name}
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden border border-border bg-card",
        "hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      <div>{background}</div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        {Icon && <Icon className="h-12 w-12 origin-left transform-gpu text-accent transition-all duration-300 ease-in-out group-hover:scale-75" />}
        <h3 className="text-xl font-bold font-display text-card-foreground">
          {name}
        </h3>
        <p className="max-w-lg text-muted-foreground">{description}</p>
      </div>

      <a // Changed div to a for href
        href={href}
        className={cn( // Moved className here
          "absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        <span className="text-sm font-bold text-accent uppercase tracking-wider">
          {cta}
        </span>
      </a>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-white/[.03]" />
    </div>
  );
};
