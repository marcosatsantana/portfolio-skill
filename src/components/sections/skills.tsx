import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Section } from '../layout/section';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { BadgeCheck, Code2, Database, LayoutTemplate, Terminal, Layers } from 'lucide-react';

export function Skills() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const skills = [
    { name: "HTML", level: "Avançado", category: "frontend" },
    { name: "CSS", level: "Avançado", category: "frontend" },
    { name: "JavaScript", level: "Avançado", category: "frontend" },
    { name: "React", level: "Avançado", category: "frontend" },
    { name: "TypeScript", level: "Avançado", category: "frontend" },
    { name: "TailwindCSS", level: "Avançado", category: "frontend" },
    { name: "NextJS", level: "Avançado", category: "frontend" },
    { name: "ViteJS", level: "Avançado", category: "tools" },
    { name: "ShadcnUI", level: "Avançado", category: "frontend" },
    { name: "Axios", level: "Avançado", category: "frontend" },
    { name: "React Query", level: "Avançado", category: "frontend" },
    { name: "NodeJS", level: "Avançado", category: "backend" },
    { name: "NestJS", level: "Avançado", category: "backend" },
    { name: "PHP", level: "Médio", category: "backend" },
    { name: "MySql", level: "Avançado", category: "backend" },
    { name: "Oracle", level: "Médio", category: "backend" },
    { name: "Prisma", level: "Avançado", category: "backend" },
    { name: "Knex", level: "Avançado", category: "backend" },
    { name: "Firebase", level: "Básico", category: "backend" },
    { name: "Python", level: "Básico", category: "backend" },
    { name: "SOLID", level: "Avançado", category: "architecture" },
    { name: "DDD", level: "Médio", category: "architecture" },
    { name: "Clean Arch.", level: "Avançado", category: "architecture" },
    { name: "Arq. Camadas", level: "Avançado", category: "architecture" },
    { name: "Git", level: "Avançado", category: "tools" },
    { name: "Docker", level: "Médio", category: "tools" }
  ];

  const categories = [
    { id: 'all', label: 'All', icon: Layers },
    { id: 'frontend', label: 'Frontend', icon: LayoutTemplate },
    { id: 'backend', label: 'Backend', icon: Database },
    { id: 'architecture', label: 'Arch.', icon: Code2 },
    { id: 'tools', label: 'Tools', icon: Terminal },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <Section className="bg-muted/30">
      <div className="mb-8 md:mb-12">
        <h2 className="text-4xl font-display font-bold mb-2">{t('skills.title')}</h2>
        <h3 className="text-xl font-mono text-accent">{t('skills.subtitle')}</h3>
      </div>

      {/* Mobile-First Tab Navigation */}
      <div className="flex overflow-x-auto pb-4 mb-6 gap-2 no-scrollbar md:justify-center">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium whitespace-nowrap transition-all",
              activeCategory === cat.id
                ? "bg-accent text-accent-foreground border-accent shadow-lg shadow-accent/25"
                : "bg-background border-border hover:border-accent/50 text-muted-foreground"
            )}
          >
            <cat.icon className="w-4 h-4" />
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        <AnimatePresence mode='popLayout'>
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              key={skill.name}
              className="border border-border bg-background p-4 flex flex-col gap-2 hover:border-accent group transition-all rounded-xl hover:shadow-lg hover:-translate-y-1 cursor-default"
            >
              <div className="flex justify-between items-start">
                <span className="font-display font-bold uppercase text-sm md:text-base">{skill.name}</span>
                {skill.level === 'Avançado' && <BadgeCheck className="w-4 h-4 text-accent" />}
              </div>

              <div className="mt-auto pt-2">
                <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden mb-2">
                  <div
                    className={cn("h-full rounded-full",
                      skill.level === 'Avançado' ? "bg-accent w-[90%]" :
                        skill.level === 'Médio' ? "bg-primary w-[60%]" : "bg-muted-foreground w-[30%]"
                    )}
                  />
                </div>
                <span className={cn(
                  "text-[10px] font-mono uppercase px-1.5 py-0.5 rounded-sm inline-block",
                  skill.level === 'Avançado' ? "bg-accent/10 text-accent" :
                    skill.level === 'Médio' ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                )}>
                  {skill.level}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
