import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import { Phone, ChevronRight, CheckCircle, Scale, Users, Gavel, Award, Shield, ArrowRight } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Olá! Gostaria de uma análise estratégica do meu caso.";

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-primary uppercase">Monteiro Ramalho</span>
            <span className="text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground uppercase -mt-1">Advogados Associados</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase">
            <a href="#inicio" className="hover:text-primary transition-colors">Início</a>
            <a href="#atuacao" className="hover:text-primary transition-colors">Atuação</a>
            <a href="#sobre" className="hover:text-primary transition-colors">O Escritório</a>
            <a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a>
          </div>

          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary px-6 py-2.5 rounded-full text-primary-foreground font-bold text-sm uppercase tracking-wider hover:scale-105 transition-all shadow-lg shadow-primary/20"
          >
            <Phone className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80" 
            alt="Escritório de Advocacia" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Award className="w-3 h-3" /> Especialistas em Previdenciário e Trabalhista
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.1] tracking-tight"
            >
              Está enfrentando problemas com seu <span className="text-primary italic">benefício do INSS</span> ou <span className="text-primary italic">direitos trabalhistas</span>?
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
            >
              Atendimento especializado para aposentadorias, benefícios negados, revisões e causas trabalhistas. Fale com advogados experientes agora e garanta seus direitos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-5 rounded-lg text-lg font-bold hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-2xl shadow-primary/30"
              >
                Falar com um advogado no WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex flex-col justify-center py-2 px-4 border-l border-white/10 ml-0 sm:ml-4">
                <span className="text-white font-bold text-sm">Análise Inicial</span>
                <span className="text-primary text-xs uppercase tracking-widest font-bold italic">Estratégica e Gratuita</span>
              </div>
            </motion.div>

            {/* Quick Proofs */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16 flex flex-wrap gap-8 opacity-60"
            >
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest">
                <CheckCircle className="w-4 h-4 text-primary" /> Atendimento em todo o Brasil
              </div>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest">
                <CheckCircle className="w-4 h-4 text-primary" /> Especialistas Online
              </div>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest">
                <CheckCircle className="w-4 h-4 text-primary" /> Suporte 24h via WhatsApp
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problemas Section */}
      <section id="atuacao" className="py-24 bg-card relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">Em qual dessas situações você precisa de ajuda?</h3>
            <p className="text-muted-foreground italic">Cada caso é único. Nossa equipe analisa sua situação e orienta o melhor caminho jurídico.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Benefício negado pelo INSS', desc: 'Auxiliamos na reversão de negativas indevidas.' },
              { title: 'Auxílio-doença / Acidente', desc: 'Garanta seu sustento durante a incapacidade.' },
              { title: 'Aposentadoria Especial', desc: 'Planejamento e execução de tempo de serviço.' },
              { title: 'Revisão de Benefício', desc: 'Verificamos se o valor do seu benefício está correto.' },
              { title: 'BPC / LOAS', desc: 'Assistência para idosos e pessoas com deficiência.' },
              { title: 'Rescisão Trabalhista', desc: 'Cálculos precisos de verbas rescisórias.' },
              { title: 'Horas Extras', desc: 'Recuperação de valores não pagos pela empresa.' },
              { title: 'Demissão Injusta', desc: 'Defesa em casos de demissão sem justa causa.' },
              { title: 'Assédio no Trabalho', desc: 'Reparação por danos morais e assédio.' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 border border-white/5 rounded-2xl bg-background hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Shield className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h4 className="font-bold text-xl text-white mb-3 tracking-tight">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.desc}</p>
                <a href={WHATSAPP_LINK} className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  Solicitar análise <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href={WHATSAPP_LINK}
              className="inline-flex items-center gap-3 border-2 border-primary text-primary px-10 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Solicitar análise gratuita agora
            </a>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-24 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Feedback</span>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Clientes que confiaram em nosso trabalho</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "João Carlos", text: "Fui muito bem atendido e consegui meu benefício após meses de negativa. Recomendo demais!", role: "Aposentado" },
              { name: "Maria Oliveira", text: "Escritório transparente. Resolveram minha questão trabalhista com muita rapidez e seriedade.", role: "Contadora" },
              { name: "Ricardo Santos", text: "Especialistas de verdade. O atendimento online facilitou muito minha vida. Nota 10!", role: "Motorista" }
            ].map((dep, i) => (
              <div key={i} className="p-8 rounded-2xl bg-card border border-white/5 relative">
                <div className="absolute -top-4 left-8 text-primary opacity-20 text-6xl font-serif">“</div>
                <p className="text-white italic mb-8 leading-relaxed">"{dep.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20" />
                  <div>
                    <p className="font-bold text-white text-sm tracking-tight">{dep.name}</p>
                    <p className="text-primary text-[10px] uppercase font-bold tracking-widest">{dep.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o Escritório Section */}
      <section id="sobre" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-primary/20 rounded-2xl z-0 translate-x-4 translate-y-4" />
              <img 
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80" 
                alt="Nossa Equipe" 
                className="rounded-2xl relative z-10 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-8 right-8 bg-primary p-6 rounded-xl z-20 shadow-2xl">
                <p className="text-primary-foreground font-serif text-3xl font-bold leading-none">15+</p>
                <p className="text-primary-foreground text-[10px] font-bold uppercase tracking-widest mt-1">Anos de Experiência</p>
              </div>
            </div>

            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Sobre Nós</span>
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">Experiência jurídica com atendimento próximo e estratégico</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                O escritório <span className="text-white font-bold">Monteiro Ramalho Advogados Associados</span> atua com excelência nas áreas previdenciária e trabalhista, oferecendo atendimento personalizado, análise detalhada e estratégias jurídicas eficientes para cada cliente.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-white text-sm font-medium">Equipe de especialistas altamente qualificada</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-white text-sm font-medium">Foco total em resultados e satisfação do cliente</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-white text-sm font-medium">Atendimento digital ágil e sem burocracia</span>
                </div>
              </div>
              <a href={WHATSAPP_LINK} className="text-primary font-bold uppercase tracking-[0.2em] flex items-center gap-3 hover:gap-5 transition-all">
                Conheça nossa história <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-6xl font-serif text-primary-foreground mb-8 leading-tight font-bold">Entenda seus direitos agora mesmo</h3>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-12">
              Não perca mais tempo. Fale com um advogado especialista e descubra o que pode ser feito no seu caso hoje.
            </p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-background text-foreground px-12 py-5 rounded-full text-xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl"
            >
              <Phone className="w-6 h-6 text-primary" /> Falar com um especialista
            </a>
          </div>
        </div>
      </section>

      {/* Rodapé Section */}
      <footer className="py-20 border-t border-white/5 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex flex-col mb-6">
                <span className="text-2xl font-serif font-bold tracking-tight text-primary uppercase">Monteiro Ramalho</span>
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase -mt-1">Advogados Associados</span>
              </div>
              <p className="text-muted-foreground text-sm max-w-sm leading-relaxed italic">
                Sua segurança jurídica é nossa prioridade. Atuamos com transparência e foco total no seu benefício e direitos.
              </p>
            </div>
            
            <div>
              <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Áreas de Atuação</h5>
              <ul className="text-muted-foreground text-sm space-y-4">
                <li><a href="#" className="hover:text-primary transition-colors">Direito Previdenciário</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Direito Trabalhista</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Consultoria Consultiva</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Contato</h5>
              <ul className="text-muted-foreground text-sm space-y-4">
                <li className="flex items-center gap-2 italic">contato@monteiroramalho.com.br</li>
                <li className="flex items-center gap-2 italic">+55 (11) 99999-9999</li>
                <li className="flex items-center gap-2 font-bold text-primary">Atendimento Online Brasil</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-muted-foreground text-[10px] uppercase tracking-widest mb-4">
              Aviso legal: Este site não garante resultados. Cada caso deve ser analisado individualmente.
            </p>
            <p className="text-muted-foreground text-[10px] uppercase tracking-[0.3em]">
              © 2026 Monteiro Ramalho Advogados Associados. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group animate-bounce"
      >
        <Phone className="w-8 h-8 fill-current" />
        <span className="absolute right-full mr-4 bg-background/90 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 backdrop-blur-sm">
          Fale Conosco Agora
        </span>
      </a>
    </div>
  );
}
