import { createFileRoute } from '@tanstack/react-router';
import { HeadContent } from '@tanstack/react-router';

import { motion } from 'framer-motion';
import { Phone, ChevronRight, CheckCircle, Scale, Users, Gavel, Award, Shield, ArrowRight } from 'lucide-react';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: "Monteiro Ramalho Advogados Associados | Direito Previdenciário e Trabalhista" },
      { name: "description", content: "Especialistas em INSS, aposentadorias, benefícios e causas trabalhistas. Atendimento online em todo o Brasil. Fale com um advogado agora." },
      { property: "og:title", content: "Monteiro Ramalho Advogados Associados" },
      { property: "og:description", content: "Justiça Previdenciária e Trabalhista com excelência e estratégia." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const WHATSAPP_LINK = "https://wa.me/5585994443223?text=Olá! Gostaria de uma consultoria jurídica estratégica.";

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-white uppercase">Monteiro Ramalho</span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-primary uppercase -mt-1 font-bold">Advogados Associados</span>
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
              <Award className="w-3 h-3" /> Hub jurídico estratégico para empresas e legados
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.1] tracking-tight"
            >
              Transformamos o jurídico em um <span className="text-primary italic font-serif">ativo estratégico</span>.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
            >
              Empresas crescem. Patrimônios se transformam. Mas crescer sem estratégia jurídica significa assumir riscos que poderiam ser evitados. Nossa atuação começa antes do problema surgir.
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
                Falar com um especialista agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex flex-col justify-center py-2 px-4 border-l border-white/10 ml-0 sm:ml-4">
                <span className="text-white font-bold text-sm">Visão de Negócio</span>
                <span className="text-primary text-xs uppercase tracking-widest font-bold">Estratégica e Consultiva</span>
              </div>
            </motion.div>

            {/* Quick Proofs */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12"
            >
              <div>
                <p className="text-3xl font-serif text-primary font-bold">+10</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Anos de atuação</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-primary font-bold">100</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Empresas assessoradas</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-primary font-bold">+150M</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Recuperados em créditos</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-primary font-bold">5000</p>
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Ações patrocinadas</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problemas Section */}
      <section id="atuacao" className="py-24 bg-card relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">Soluções jurídicas para diferentes desafios</h3>
            <p className="text-muted-foreground">Combinamos visão jurídica, inteligência de negócios e planejamento para gerar previsibilidade e eficiência para empresas e legados.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Direito Empresarial', desc: 'Constituição societária, governança, acordos entre sócios e contratos estratégicos.', icon: Scale },
              { title: 'Direito Tributário', desc: 'Planejamento, recuperação de créditos e defesas administrativas focadas em ganho financeiro.', icon: Shield },
              { title: 'Direito Imobiliário', desc: 'Regularizações, due diligence e segurança jurídica em cada operação patrimonial.', icon: CheckCircle },
              { title: 'Direito Condominial', desc: 'Gestão jurídica segura para condomínios, implantação, convenções e mediação.', icon: Users },
              { title: 'Compliance Trabalhista', desc: 'Estruturação de processos internos para redução de riscos e prevenção de passivos.', icon: Gavel },
              { title: 'Planejamento Patrimonial', desc: 'Holding, sucessão e governança para preservar legados e proteger gerações.', icon: Award }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 border border-white/5 rounded-2xl bg-background hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h4 className="font-bold text-xl text-white mb-3 tracking-tight">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.desc}</p>
                <a href={WHATSAPP_LINK} className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                  Entender mais <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href={WHATSAPP_LINK}
              className="inline-flex items-center gap-3 border-2 border-primary text-primary px-10 py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Solicitar diagnóstico estratégico gratuito
            </a>
          </div>
        </div>
      </section>

      {/* Processo Section */}
      <section id="processo" className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Como Atuamos</span>
            <h3 className="text-4xl md:text-5xl font-serif text-white">Como conduzimos sua estratégia jurídica</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              { step: '01', title: 'Diagnóstico', icon: '🔍' },
              { step: '02', title: 'Análise Jurídica', icon: '⚖️' },
              { step: '03', title: 'Estratégia', icon: '🎯' },
              { step: '04', title: 'Implementação', icon: '⚙️' },
              { step: '05', title: 'Acompanhamento', icon: '📊' },
              { step: '06', title: 'Resultados', icon: '🏆' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center p-6 border border-white/5 rounded-xl bg-card text-center group hover:border-primary/30 transition-all">
                <span className="text-primary/40 group-hover:text-primary font-bold text-xs mb-4">{item.step}</span>
                <span className="text-3xl mb-4">{item.icon}</span>
                <h5 className="text-white text-xs font-bold uppercase tracking-widest leading-tight">{item.title}</h5>
              </div>
            ))}
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
                <p className="text-white mb-8 leading-relaxed">"{dep.text}"</p>
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
              <h3 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">Hub jurídico estratégico para empresas e legados</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Fundada em 2015, o <span className="text-white font-bold">Monteiro Ramalho Advogados Associados</span> nasceu com um propósito claro: oferecer uma advocacia moderna, próxima e orientada por resultados, disponibilidade e falando a linguagem do cliente. Acreditamos que o papel do advogado não é apenas resolver conflitos, mas contribuir para que eles sejam evitados.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {[
                  'Williams Ramalho',
                  'Monteiro Neto',
                  'Giovanna Alcântara',
                  'Abraão Vasconcelos'
                ].map((name, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-white text-sm font-bold tracking-tight">{name}</span>
                  </div>
                ))}
              </div>
              <a href={WHATSAPP_LINK} className="text-primary font-bold uppercase tracking-[0.2em] flex items-center gap-3 hover:gap-5 transition-all">
                Agende uma conversa estratégica <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Clientes Section */}
      <section className="py-24 border-t border-white/5 bg-background overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.3em] mb-12 block">Confiança e Parceria</span>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-40 grayscale">
            {['Grupo Marva', 'Terran', 'Fantastique', 'Direcional', 'VGA Construtora', 'Duna Engenharia', 'Metalix', 'Grupo Inovar'].map((client, i) => (
              <span key={i} className="text-xl md:text-2xl font-serif text-white font-bold">{client}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-6xl font-serif text-primary-foreground mb-8 leading-tight font-bold">Sua empresa merece um parceiro jurídico estratégico</h3>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-12">
              Independendentemente do momento do seu negócio, contar com uma assessoria jurídica preparada para antecipar riscos e apoiar decisões faz toda a diferença.
            </p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-background text-foreground px-12 py-5 rounded-full text-xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-2xl"
            >
              <Phone className="w-6 h-6 text-primary" /> Vamos conversar?
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
                <span className="text-2xl font-serif font-bold tracking-tight text-white uppercase">Monteiro Ramalho</span>
                <span className="text-[10px] tracking-[0.3em] text-primary uppercase -mt-1 font-bold">Advogados Associados</span>
              </div>
              <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                Hub jurídico estratégico para empresas e legados. Oferecemos advocacia moderna, próxima e orientada por resultados.
              </p>
            </div>
            
            <div>
              <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Áreas de Atuação</h5>
              <ul className="text-muted-foreground text-sm space-y-4">
                <li><a href="#" className="hover:text-primary transition-colors">Direito Empresarial</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Direito Tributário</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Direito Imobiliário</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Compliance Trabalhista</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Contato</h5>
              <ul className="text-muted-foreground text-sm space-y-4">
                <li className="flex items-center gap-2">contato@monteiroramalho.adv.br</li>
                <li className="flex items-center gap-2">+55 (85) 99444-3223</li>
                <li className="flex items-center gap-2 text-[10px] uppercase font-bold text-primary">R. Albert Sabin, 65 - Fortaleza - CE</li>
                
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
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
      >
        <Phone className="w-8 h-8 fill-current" />
        <span className="absolute right-full mr-4 bg-background/90 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 backdrop-blur-sm">
          Fale Conosco Agora
        </span>
      </a>
    </div>
  );
}
