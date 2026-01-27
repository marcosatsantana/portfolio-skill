import { useTranslation } from 'react-i18next';
import { Section } from '../layout/section';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Mail, MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  const { t } = useTranslation();

  return (
    <Section className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="mb-12">
            <h2 className="text-4xl font-display font-bold mb-2">{t('contact.title')}</h2>
            <h3 className="text-xl font-mono text-accent">{t('contact.subtitle')}</h3>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 border border-border hover:border-accent transition-colors">
              <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent rounded-full">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider">{t('contact.email')}</h4>
                <p className="text-muted-foreground break-all">marcost.santana@hotmail.com</p>
              </div>
              <Button variant="ghost" size="sm" className="ml-auto text-xs uppercase">
                {t('contact.send')}
              </Button>
            </div>

            <div className="flex items-center gap-4 p-4 border border-border hover:border-accent transition-colors">
              <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent rounded-full">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider">{t('contact.whatsapp')}</h4>
                <p className="text-muted-foreground">+55 (62) 9 8590-5272</p>
              </div>
              <Button variant="ghost" size="sm" className="ml-auto text-xs uppercase">
                {t('contact.send')}
              </Button>
            </div>

            <div className="flex items-center gap-4 p-4 border border-border hover:border-accent transition-colors">
              <div className="w-12 h-12 flex items-center justify-center bg-accent/10 text-accent rounded-full">
                <Send className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider">{t('contact.messenger')}</h4>
                <p className="text-muted-foreground">user.fb123</p>
              </div>
              <Button variant="ghost" size="sm" className="ml-auto text-xs uppercase">
                {t('contact.send')}
              </Button>
            </div>
          </div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="border-2 border-border p-8 bg-card relative"
        >
          <h4 className="text-2xl font-display font-bold mb-6">{t('contact.form.title')}</h4>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {t('contact.form.name')}
              </label>
              <Input placeholder={t('contact.form.namePlaceholder') || ""} />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {t('contact.form.email')}
              </label>
              <Input type="email" placeholder={t('contact.form.emailPlaceholder') || ""} />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {t('contact.form.project')}
              </label>
              <Textarea placeholder={t('contact.form.projectPlaceholder') || ""} />
            </div>

            <Button variant="brutalist" className="w-full">
              {t('contact.form.submit')}
            </Button>
          </form>

          {/* Decor */}
          <div className="absolute top-0 right-0 w-4 h-4 bg-accent" />
          <div className="absolute bottom-0 left-0 w-4 h-4 bg-accent" />
        </motion.div>
      </div>
    </Section>
  );
}
