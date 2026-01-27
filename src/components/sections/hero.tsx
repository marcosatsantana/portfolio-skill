import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { ArrowDown } from 'lucide-react';
import { Particles } from '../magicui/particles';
import Logo from "../../assets/about-1.jpg"

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background py-20 px-6 border-b border-border">
      {/* Background - Particles */}
      <Particles
        className="absolute inset-0 z-0 w-full h-full"
        quantity={100}
        ease={80}
        size={1}
        refresh
      />

      {/* Content Container */}
      <div className="relative z-10 container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl md:text-2xl font-mono text-accent mb-2">
              MKDesigners
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] tracking-tighter uppercase">
              {t('hero.role').split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Button variant="brutalist" size="lg" className="w-full sm:w-auto">
              {t('hero.cta')}
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Download CV
            </Button>
          </motion.div>
        </div>

        {/* Hero Image / Graphic Area */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative h-[400px] md:h-[600px] w-full border-2 border-border bg-muted/20 flex items-center justify-center overflow-hidden px-8"
        >
          {/* Placeholder for "Fotos minhas com foco" */}
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-mono uppercase text-sm tracking-widest bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale mix-blend-overlay opacity-50">
            {/* Image is handled by CSS bg, overlay text here */}
          </div>

          <span className="relative z-10 bg-background/80 p-2 border border-border backdrop-blur-sm">
            <img src={Logo} alt="Hero" width={500} height={500} className="object-cover" />
          </span>

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-20 h-20 border-t-4 border-r-4 border-accent" />
          <div className="absolute bottom-4 left-4 w-20 h-20 border-b-4 border-l-4 border-accent" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs font-mono uppercase tracking-widest">{t('hero.scroll')}</span>
        <ArrowDown className="animate-bounce" />
      </motion.div>
    </section>
  );
}
