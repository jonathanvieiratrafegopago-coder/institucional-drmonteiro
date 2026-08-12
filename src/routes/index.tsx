import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Phone, ChevronRight, CheckCircle, Scale, Users, Gavel } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <h1 className="text-xl font-serif font-bold text-primary">Monteiro Ramalho</h1>
          <a href="https://wa.me/5511999999999" className="flex items-center gap-2 bg-primary px-4 py-2 rounded-full text-primary-foreground font-medium hover:opacity-90 transition-opacity">
            <Phone className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="container mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight"
          >
            Está enfrentando problemas com seu <br/> <span className="text-primary">benefício do INSS</span> ou <span className="text-primary">direitos trabalhistas</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Atendimento especializado para aposentadorias, benefícios negados, revisões e causas trabalhistas. Fale com advogados experientes agora.
          </motion.p>
          <motion.a 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            href="https://wa.me/5511999999999"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-bold hover:bg-primary/90 transition-transform hover:scale-105"
          >
            <Phone className="w-5 h-5" /> Falar com um advogado no WhatsApp
          </motion.a>
        </div>
      </section>

      {/* Problemas */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-serif text-center mb-12">Em qual dessas situações você precisa de ajuda?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {['Benefício negado pelo INSS', 'Auxílio-doença', 'Aposentadoria', 'Revisão de benefício', 'BPC/LOAS', 'Rescisão trabalhista', 'Horas extras', 'Demissão injusta', 'Assédio no trabalho'].map((item) => (
              <div key={item} className="p-6 border border-border rounded-lg hover:border-primary transition-colors bg-background">
                <CheckCircle className="w-8 h-8 text-primary mb-4" />
                <p className="font-medium text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-serif text-center mb-16">Por que escolher nosso escritório?</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Phone, title: 'Atendimento Rápido' },
              { icon: Scale, title: 'Especialistas' },
              { icon: Users, title: 'Transparência Total' },
              { icon: Gavel, title: 'Estratégia Personalizada' }
            ].map((d) => (
              <div key={d.title} className="text-center">
                <d.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-bold text-lg mb-2">{d.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border bg-card">
        <div className="container mx-auto px-4 text-center">
          <h5 className="font-serif font-bold text-xl mb-4">Monteiro Ramalho Advogados Associados</h5>
          <p className="text-muted-foreground text-sm">© 2026. Especialistas em Direito Previdenciário e Trabalhista.</p>
        </div>
      </footer>
    </div>
  );
}
