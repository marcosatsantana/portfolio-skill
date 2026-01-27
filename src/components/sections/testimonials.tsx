import { useTranslation } from 'react-i18next';
import { Section } from '../layout/section';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Ana Silva",
      role: "Santa Marta (R.H.)",
      date: "01/01/2021",
      content: "Estou extremamente satisfeita com o trabalho excepcional da equipe! Eles superaram todas as expectativas, entregando um produto final de alta qualidade."
    },
    {
      name: "Carlos Mendes",
      role: "Santa Marta (T.I.)",
      date: "01/11/2021",
      content: "Trabalhar com essa equipe foi uma experiência incrível. Eles não apenas entenderam nossas necessidades, mas também trouxeram insights valiosos que aprimoraram significativamente o projeto."
    },
    {
      name: "Isabela Santos",
      role: "Carpal Tratores (Contador)",
      date: "01/11/2022",
      content: "Os serviços prestados foram além das minhas expectativas. A equipe mostrou grande profissionalismo, comunicação eficiente e entregou no prazo."
    }
  ];

  return (
    <Section className="bg-muted/20">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-display font-bold mb-2">{t('testimonials.title')}</h2>
        <h3 className="text-xl font-mono text-accent">{t('testimonials.subtitle')}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="flex flex-col bg-background p-8 border-2 border-border hover:border-accent shadow-[4px_4px_0px_0px_rbga(0,0,0,0.1)] transition-all"
          >
            <Quote className="w-8 h-8 text-accent mb-4 opacity-50" />
            <p className="text-muted-foreground italic mb-6 leading-relaxed flex-1">
              "{item.content}"
            </p>
            <div className="mt-auto border-t border-border pt-4">
              <h4 className="font-display font-bold text-lg">{item.name}</h4>
              <div className="flex justify-between items-center text-xs font-mono text-muted-foreground mt-1">
                <span>{item.role}</span>
                <span>{item.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
