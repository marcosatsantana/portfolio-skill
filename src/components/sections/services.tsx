import { useTranslation } from 'react-i18next';
import { Section } from '../layout/section';
import { MagicCard } from '../magicui/magic-card';
import { Palette, Share2, Box } from 'lucide-react';

export function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Box,
      title: t('services.items.productDesign'),
      description: "Creating intuitive and scalable digital products with a focus on user experience.",
    },
    {
      icon: Palette,
      title: t('services.items.graphicDesign'),
      description: "Visual identity, branding, and creative assets that tell your story.",
    },
    {
      icon: Share2,
      title: t('services.items.marketing'),
      description: "Strategic digital marketing solutions to grow your audience and engagement.",
    }
  ];

  return (
    <Section className="bg-background">
      <div className="mb-16">
        <h2 className="text-4xl font-display font-bold mb-2">{t('services.title')}</h2>
        <h3 className="text-xl font-mono text-accent">{t('services.subtitle')}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <MagicCard
            key={index}
            className="flex flex-col items-center justify-center p-8 text-center min-h-[300px] border-border"
            gradientColor="hsl(var(--accent))"
            gradientOpacity={0.10}
          >
            <service.icon className="w-12 h-12 mb-6 text-accent" />
            <h4 className="text-2xl font-display font-bold mb-4">
              {service.title}
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {service.description}
            </p>
          </MagicCard>
        ))}
      </div>
    </Section>
  );
}
