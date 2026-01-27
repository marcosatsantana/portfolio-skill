import { useTranslation } from 'react-i18next';
import { Section } from '../layout/section';
import { BentoGrid, BentoCard } from '../magicui/bento-grid';
import { Code2, Globe, Laptop, User } from 'lucide-react';
import Logo from "../../assets/about-1.jpg";

export function About() {
  const { t } = useTranslation();

  const stats = [
    { label: t('about.stats.years'), value: "8", subLabel: t('about.stats.experience') },
    { label: t('about.stats.completed'), value: "48+", subLabel: t('about.stats.projects') },
    { label: t('about.stats.support'), value: "24/7", subLabel: t('about.stats.availability') },
  ];

  const features = [
    {
      Icon: User,
      name: t('about.title'),
      description: t('about.description'),
      href: "#",
      cta: "More About Me",
      background: <img src={Logo} className="absolute inset-0 h-full w-full object-cover object-top opacity-20 filter grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0" />,
      className: "md:col-span-2",
    },
    {
      Icon: Code2,
      name: "Tech Stack",
      description: "React, Node.js, TypeScript, Tailwind, Next.js, Postgres, Docker.",
      href: "#",
      cta: "View Skills",
      className: "md:col-span-1",
      background: (
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <Code2 className="w-64 h-64" />
        </div>
      ),
    },
    {
      Icon: Laptop,
      name: t('about.stats.years') + " " + t('about.stats.experience'),
      description: `${stats[0].value}+ Years of dedicated development workflow.`,
      href: "#",
      cta: "My Journey",
      className: "md:col-span-1",
      background: (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-9xl font-bold opacity-5">{stats[0].value}</span>
        </div>
      )
    },
    {
      Icon: Globe,
      name: t('about.stats.availability'),
      description: "Global services, available for remote work worldwide.",
      href: "#contact",
      cta: "Hire Me",
      className: "md:col-span-2",
      background: (
        <div className="absolute inset-0 bg-dotted-pattern opacity-50" />
      )
    }
  ];

  return (
    <Section className="bg-background">
      <div className="mb-12">
        <h2 className="text-4xl font-display font-bold mb-4">{t('about.title')}</h2>
        <h3 className="text-xl font-mono text-accent mb-6">{t('about.subtitle')}</h3>
      </div>

      <BentoGrid>
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </Section>
  );
}
