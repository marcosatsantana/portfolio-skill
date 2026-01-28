import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Section } from '../layout/section';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { Particles } from '../magicui/particles';
import { MagicCard } from '../magicui/magic-card';
import { cn } from '../../lib/utils';

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
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

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
      type: 'education',
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

  const items = history.filter(item => item.type === activeTab);

  return (
    <Section className="bg-background/95 relative overflow-visible min-h-screen flex flex-col justify-center">
      {/* Background - Particles */}
      <Particles
        className="absolute inset-0 z-0 w-full h-full"
        quantity={80}
        ease={80}
        size={0.6}
        refresh
      />

      <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col gap-8 md:gap-12">
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-2">{t('experience.title')}</h2>
            <h3 className="text-xl font-mono text-accent">{t('experience.subtitle')}</h3>
          </div>

          {/* Disruptive Toggle Switch */}
          <div className="p-1.5 bg-card/40 backdrop-blur-md border border-border/50 rounded-full flex gap-1 shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <button
              onClick={() => setActiveTab('work')}
              className={cn(
                "relative z-10 px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2",
                activeTab === 'work'
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              )}
            >
              <Briefcase className="w-4 h-4" />
              {t('experience.work')}
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={cn(
                "relative z-10 px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2",
                activeTab === 'education'
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              )}
            >
              <GraduationCap className="w-4 h-4" />
              {t('experience.education')}
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode='popLayout'>
            {items.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "col-span-1",
                  // Make the first item span 2 cols on desktop for variety ("Disruptive" Bento feel)
                  (item.id === 1 || item.id === 5) ? "md:col-span-2" : ""
                )}
              >
                <MagicCard
                  className="w-full cursor-pointer flex-col items-start justify-center p-6 h-full min-h-[180px] bg-card/40 hover:bg-card/60 transition-colors border-white/10"
                  gradientColor="hsl(var(--accent))"
                  gradientOpacity={0.15}
                >
                  <div className="flex flex-col h-full justify-between gap-4">
                    <div className="flex justify-between items-start w-full">
                      <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-mono font-bold rounded-lg border border-accent/20 backdrop-blur-sm">
                        {item.period}
                      </span>
                      {item.type === 'work' ? (
                        <Briefcase className="w-5 h-5 text-muted-foreground/50" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-muted-foreground/50" />
                      )}
                    </div>

                    <div>
                      <h4 className="text-2xl md:text-3xl font-display font-bold leading-tight mb-2 text-foreground/90">
                        {item.title}
                      </h4>
                      <p className="text-lg text-muted-foreground font-medium border-l-2 border-accent/30 pl-3">
                        {item.organization}
                      </p>
                    </div>
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
}
