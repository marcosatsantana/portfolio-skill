import { useTranslation } from 'react-i18next';
import { Section } from '../layout/section';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Briefcase, GraduationCap } from 'lucide-react';
import { Particles } from '../magicui/particles';

interface TimelineItem {
  id: number;
  type: 'work' | 'education';
  title: string;
  organization: string;
  period: string;
  description?: string;
}

export function Experience() {
  const { t } = useTranslation();

  const history: TimelineItem[] = [
    {
      id: 1,
      type: 'work',
      title: "Dev. FullStack",
      organization: "Carpal Tratores LTDA",
      period: "2025 - Atual"
    },
    {
      id: 2,
      type: 'education',
      title: "Explorer e Ignite",
      organization: "Rocketseat",
      period: "2022 - 2024"
    },
    {
      id: 3,
      type: 'work',
      title: "Ass. T.I.",
      organization: "Carpal Tratores LTDA",
      period: "2023 - 2025"
    },
    {
      id: 4,
      type: 'work',
      title: "Analista de Sistemas",
      organization: "Drogaria Santa Marta - LTDA",
      period: "2021 - 2023"
    },
    {
      id: 5,
      type: 'education',
      title: "ADS",
      organization: "UniGoias",
      period: "2022 - Atual"
    },
    {
      id: 6,
      type: 'work',
      title: "Anl. de Banco de Dados",
      organization: "Sesc",
      period: "2022 - 2022"
    },
    {
      id: 7,
      type: 'work',
      title: "Suporte Técnico",
      organization: "Thato LTDA",
      period: "2018 - 2020"
    }
  ];

  // Sort by ID or manually ordered above. The user provided order seems chronological/importance mixed.
  // I will respect the array order above which integrates the new education items.

  return (
    <Section className="bg-background/95 relative overflow-hidden">
      {/* Background - Particles */}
      <Particles
        className="absolute inset-0 z-0 w-full h-full"
        quantity={80}
        ease={80}
        size={0.6}
        refresh
      />

      <div className="mb-16 relative z-10">
        <h2 className="text-4xl font-display font-bold mb-2">{t('experience.title')}</h2>
        <h3 className="text-xl font-mono text-accent">{t('experience.subtitle')}</h3>
      </div>

      <div className="relative z-10 space-y-8 md:space-y-12 pb-12">
        {/* Central Vertical Line for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-2 bottom-0 w-[2px] bg-border -translate-x-1/2" />

        {/* Left Vertical Line for Mobile */}
        <div className="md:hidden absolute left-[19px] top-2 bottom-0 w-[2px] bg-border" />

        {history.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative flex flex-col md:flex-row items-center w-full",
                isEven ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Spacer for desktop 50% split */}
              <div className="flex-1 w-full md:w-1/2" />

              {/* Center Dot with Pulse Effect */}
              <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
                <div className="w-4 h-4 rounded-full bg-accent relative">
                  <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-25"></div>
                </div>
              </div>

              {/* Content Side */}
              <div className={cn(
                "w-full md:w-1/2 pl-12 md:pl-0",
                isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
              )}>
                <div className={cn(
                  "p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-accent/50 transition-all duration-300 relative group",
                  isEven ? "md:origin-right" : "md:origin-left"
                )}>
                  {/* Connecting Line Horizontal */}
                  <div className={cn(
                    "hidden md:block absolute top-1/2 w-12 h-[2px] bg-gradient-to-r from-border to-transparent transition-colors",
                    isEven ? "right-[-49px] scale-x-[-1]" : "left-[-49px]"
                  )} />

                  {item.type === 'work' ? (
                    <Briefcase className={cn("w-5 h-5 mb-2 text-accent/80", isEven ? "md:ml-auto" : "")} />
                  ) : (
                    <GraduationCap className={cn("w-5 h-5 mb-2 text-accent/80", isEven ? "md:ml-auto" : "")} />
                  )}

                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-mono font-bold mb-3 rounded-full border border-accent/20">
                    {item.period}
                  </span>
                  <h4 className="text-xl font-bold font-display tracking-tight">{item.title}</h4>
                  <p className="text-muted-foreground font-medium">{item.organization}</p>

                  {/* Decorative Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
