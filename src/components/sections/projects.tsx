import { useTranslation } from 'react-i18next';
import { Section } from '../layout/section';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';
import { ExternalLink } from 'lucide-react';
import BarbeariasImg from '../../assets/barbearias.png';
import VtexImg from '../../assets/vtex.png';
import TotemImg from '../../assets/totem.png';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
}

export function Projects() {
  const { t } = useTranslation();

  const projects: Project[] = [
    {
      id: 1,
      title: "Barbearias.app",
      description: "Plataforma SaaS completa para gestão e agendamento de barbearias. O sistema conecta clientes a estabelecimentos através de geolocalização e permite agendamento online com pagamentos integrados (Stripe).",
      tags: ["ReactJS", "NodeJS", "TypeScript", "PostgreSQL", "Stripe", "SaaS"],
      image: BarbeariasImg,
      link: "#"
    },
    {
      id: 2,
      title: "VTEX Catalog Automation",
      description: "Solução robusta para automação de catálogo VTEX. Scraper de fabricantes, tratamento de imagens via API, dashboard em tempo real.",
      tags: ["ReactJS", "NodeJS", "VTEX API", "Puppeteer", "Cloudinary", "SSE"],
      image: VtexImg,
      link: "#"
    },
    {
      id: 3,
      title: "Totem Interativo & CMS",
      description: "Ecossistema para autoatendimento digital. PWA para Totem e CMS administrativo. Controle de vídeo streaming e gestão hierárquica de produtos.",
      tags: ["ReactJS", "NodeJS", "PWA", "Video Streaming", "Multer"],
      image: TotemImg,
      link: "#"
    },
    {
      id: 4,
      title: "Ferramentaria Carpal",
      description: "Gerenciamento de empréstimos de ferramentas. Controle de estoque, técnicos e histórico de movimentações.",
      tags: ["ReactJS", "NodeJS", "ShadcnUI", "Dashboard"],
      link: "#"
    },
    {
      id: 5,
      title: "Dashboard Chamados",
      description: "Dashboard de desempenho para monitoramento de KPIs de atendimento e suporte.",
      tags: ["ReactJS", "Recharts", "TailwindCSS"],
      link: "#"
    }
  ];

  return (
    <Section className="bg-background">
      <div className="mb-16">
        <h2 className="text-4xl font-display font-bold mb-2">{t('portfolio.title')}</h2>
        <h3 className="text-xl font-mono text-accent">{t('portfolio.subtitle')}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, _) => {
          // Asymmetrical layout logic: Every 3rd item spans 2 cols? Or just masonry?
          // For simplicity in grid, we can span-2 for the first item or key items.
          const isFeatured = 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={cn(
                "group border-2 border-border bg-card overflow-hidden hover:border-accent transition-colors flex flex-col",
                isFeatured ? "md:col-span-2" : "md:col-span-1"
              )}
            >
              {/* Image Placeholder Area */}
              <div className={cn(
                "bg-muted aspect-video w-full flex items-center justify-center text-muted-foreground font-mono text-sm relative overflow-hidden",
                isFeatured ? "h-[300px] md:h-[400px]" : "h-[200px]"
              )}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-accent/5 group-hover:bg-accent/10 transition-colors" />
                    <span className="z-10">[ Project Image Preview ]</span>
                  </>
                )}
              </div>

              <div className="p-8 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-mono px-2 py-1 border border-border rounded-full hover:bg-accent hover:text-accent-foreground transition-colors cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>

                <h4 className="text-2xl md:text-3xl font-display font-bold mb-3">{project.title}</h4>
                <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all">
                  {project.description}
                </p>

                <div className="mt-auto flex gap-4">
                  <Button variant="outline" size="sm" className="group-hover:bg-foreground group-hover:text-background transition-colors">
                    {t('portfolio.viewProject')} <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
