import { useTranslation } from 'react-i18next';
import { Section } from '../layout/section';
import { Marquee } from '../magicui/marquee';
import { cn } from '../../lib/utils';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Ana Silva",
    username: "@ana_tech",
    body: "O trabalho do Marcos no nosso e-commerce aumentou as conversões em 40%. Incrível!",
    img: "https://avatar.vercel.sh/ana",
  },
  {
    name: "Carlos Mendes",
    username: "@carlos_dev",
    body: "Profissional extremamente qualificado. A arquitetura que ele propôs escalou perfeitamente.",
    img: "https://avatar.vercel.sh/carlos",
  },
  {
    name: "Juliana Costa",
    username: "@jujucosta",
    body: "A interface do nosso app ficou linda e muito rápida. Recomendo demais!",
    img: "https://avatar.vercel.sh/juliana",
  },
  {
    name: "Roberto Almeida",
    username: "@beto_almeida",
    body: "Entregou o projeto antes do prazo e com uma qualidade de código impecável.",
    img: "https://avatar.vercel.sh/roberto",
  },
  {
    name: "Fernanda Lima",
    username: "@fer_lima",
    body: "Solução criativa para um problema complexo de backend. Muito bom!",
    img: "https://avatar.vercel.sh/fernanda",
  },
  {
    name: "Ricardo Souza",
    username: "@ricsouza",
    body: "Excelente comunicação e domínio técnico. O sistema de agendamento funciona perfeitamente.",
    img: "https://avatar.vercel.sh/ricardo",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-border bg-card hover:bg-accent/5 transition-colors",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-muted-foreground">{body}</blockquote>
      <div className="flex gap-0.5 mt-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3 h-3 fill-accent text-accent" />
        ))}
      </div>
    </figure>
  );
};

export function Testimonials() {
  const { t } = useTranslation();

  return (
    <Section className="bg-background overflow-hidden relative">
      <div className="mb-12">
        <h2 className="text-4xl font-display font-bold mb-2">{t('testimonials.title')}</h2>
        <h3 className="text-xl font-mono text-accent">{t('testimonials.subtitle')}</h3>
      </div>

      <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </Section>
  );
}
