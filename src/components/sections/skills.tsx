import { useTranslation } from 'react-i18next';
import { Section } from '../layout/section';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { BadgeCheck } from 'lucide-react';

export function Skills() {
  const { t } = useTranslation();

  const skills = [
    { name: "HTML", level: "Avançado", category: "frontend" },
    { name: "CSS", level: "Avançado", category: "frontend" },
    { name: "JavaScript", level: "Médio", category: "frontend" },
    { name: "React", level: "Médio", category: "frontend" },
    { name: "NodeJS", level: "Avançado", category: "backend" },
    { name: "MySql", level: "Avançado", category: "backend" },
    { name: "PHP", level: "Médio", category: "backend" },
    { name: "Oracle", level: "Médio", category: "backend" },
    { name: "Firebase", level: "Básico", category: "backend" },
    { name: "Python", level: "Básico", category: "backend" },
    { name: "Git", level: "Básico", category: "tools" },
    { name: "Bootstrap", level: "Médio", category: "frontend" }
  ];

  return (
    <Section className="bg-muted/30">
      <div className="mb-12">
        <h2 className="text-4xl font-display font-bold mb-2">{t('skills.title')}</h2>
        <h3 className="text-xl font-mono text-accent">{t('skills.subtitle')}</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="border border-border bg-background p-4 flex flex-col gap-2 hover:border-accent group transition-all"
          >
            <div className="flex justify-between items-start">
              <span className="font-display font-bold uppercase">{skill.name}</span>
              {skill.level === 'Avançado' && <BadgeCheck className="w-4 h-4 text-accent" />}
            </div>
            <div className="mt-auto">
              <span className={cn(
                "text-xs font-mono uppercase px-1.5 py-0.5 rounded-sm",
                skill.level === 'Avançado' ? "bg-accent text-accent-foreground" :
                  skill.level === 'Médio' ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              )}>
                {skill.level}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
