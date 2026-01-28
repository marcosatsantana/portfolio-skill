import { useTranslation } from 'react-i18next';
import { Marquee } from '../magicui/marquee';
import { RetroGrid } from '../magicui/retro-grid';
import { cn } from '../../lib/utils';

const skills = [
  "HTML", "CSS", "JavaScript", "React", "TypeScript",
  "TailwindCSS", "NextJS", "ViteJS", "ShadcnUI",
  "Axios", "React Query", "NodeJS", "NestJS",
  "PHP", "MySql", "Oracle", "Prisma", "Knex",
  "Firebase", "Python", "SOLID", "DDD",
  "Clean Arch.", "Arq. Camadas", "Git", "Docker"
];

const firstRow = skills.slice(0, Math.ceil(skills.length / 2));
const secondRow = skills.slice(Math.ceil(skills.length / 2));

const SkillCard = ({ name }: { name: string }) => {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center px-8 py-4 overflow-hidden rounded-xl border",
        "border-border bg-card/50 backdrop-blur-sm",
        "transition-all duration-300 hover:border-accent hover:shadow-[0_0_15px_-5px_hsl(var(--accent))]",
        "group cursor-default z-10"
      )}
    >
      <span className="font-display font-medium text-lg tracking-wide group-hover:text-accent transition-colors">
        {name}
      </span>
    </div>
  );
};

export function Skills() {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen py-20 border-b border-border relative overflow-hidden flex flex-col justify-center">
      <RetroGrid />

      <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center w-full relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-display font-bold mb-2">{t('skills.title')}</h2>
          <h3 className="text-xl font-mono text-accent">{t('skills.subtitle')}</h3>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:40s]">
            {firstRow.map((skill) => (
              <SkillCard key={skill} name={skill} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s] mt-4">
            {secondRow.map((skill) => (
              <SkillCard key={skill} name={skill} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
