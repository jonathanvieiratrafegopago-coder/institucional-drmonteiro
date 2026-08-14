import { createFileRoute } from '@tanstack/react-router';
import { HeadContent } from '@tanstack/react-router';
import heroPartnersAsset from '@/assets/hero-partners.png.asset.json';
import quemSomosBgAsset from '@/assets/quem-somos-bg.png.asset.json';
import direitoTributarioAsset from '@/assets/direito-tributario.png.asset.json';
import direitoImobiliarioAsset from '@/assets/direito-imobiliario.png.asset.json';
import direitoCondominialAsset from '@/assets/direito-condominial.png.asset.json';
import complianceTrabalhistaAsset from '@/assets/compliance-trabalhista.png.asset.json';
import planejamentoPatrimonialAsset from '@/assets/planejamento-patrimonial.png.asset.json';

import { motion } from 'framer-motion';
import { Phone, ChevronRight, CheckCircle, Scale, Users, Gavel, Award, Shield, ArrowRight, Gavel as GavelIcon, Star } from 'lucide-react';

import clientesGrid1Asset from '@/assets/clientes-grid-1.png.asset.json';
import clientesGrid2Asset from '@/assets/clientes-grid-2.png.asset.json';
 import equipeGridAsset from '@/assets/equipe-grid.png.asset.json';
import logoMraAsset from '@/assets/logo-mra.png.asset.json';


export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: "Monteiro Ramalho Advogados Associados | Direito Previdenciário e Trabalhista" },
      { name: "description", content: "Especialistas em INSS, aposentadorias, benefícios e causas trabalhistas. Atendimento online em todo o Brasil. Fale com um advogado agora." },
      { property: "og:title", content: "Monteiro Ramalho Advogados Associados" },
      { property: "og:description", content: "Justiça Previdenciária e Trabalhista com excelência e estratégia." },
      { property: "og:image", content: heroPartnersAsset.url },
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center">
            <img src={logoMraAsset.url} alt="Monteiro Ramalho Advogados" className="h-10 md:h-12 w-auto filter brightness-110" />
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
            src={heroPartnersAsset.url} 
            alt="Sócios Monteiro Ramalho" 
            className="w-full h-full object-cover opacity-30 grayscale contrast-125 mix-blend-luminosity"
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

            {/* Removed redundant quick proofs from hero */}
          </div>
        </div>
      </section>

      {/* Nosso Impacto Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
            >
              Nosso Impacto
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif text-white leading-tight mb-16"
            >
              Uma trajetória construída com <br className="hidden md:block" />
              <span className="text-primary italic">consistência e resultados</span>.
            </motion.h3>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-5 gap-8 p-12 rounded-3xl border border-white/10 bg-card/30 backdrop-blur-sm relative overflow-hidden group"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
              
              {[
                { value: '+10', label: 'Anos de atuação' },
                { value: '100', label: 'Empresas assessoradas' },
                { value: '+150M', label: 'Recuperados em créditos tributários' },
                { value: '5000', label: 'Ações patrocinadas' },
                { value: '8', label: 'Áreas integradas' }
              ].map((item, i) => (
                <div key={i} className="text-center relative">
                  <p className="text-3xl md:text-4xl font-serif text-white font-bold mb-2">{item.value}</p>
                  <p className="text-[10px] md:text-[11px] uppercase tracking-widest text-muted-foreground font-bold leading-tight px-2">{item.label}</p>
                </div>
              ))}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: 'Direito Empresarial', 
                desc: 'Constituição societária, governança, acordos entre sócios e contratos estratégicos.', 
                icon: Scale,
                image: null,
                bullets: ['Sociedades', 'Contratos', 'Governança', 'Startups'],
                highlight: 'Muito além da burocracia, buscamos ser parceiros estratégicos do seu crescimento empresarial.'
              },
              { 
                title: 'Direito Tributário', 
                desc: 'Planejamento, recuperação de créditos e defesas administrativas focadas em ganho financeiro.', 
                icon: Shield,
                image: direitoTributarioAsset.url,
                mainTitle: 'Eficiência tributária também gera resultados.',
                bullets: ['Planejamento.', 'Recuperação de créditos.', 'Revisões fiscais.', 'Defesas administrativas.', 'Regularizações.'],
                highlight: 'MUITO ALÉM DA CONFORMIDADE, BUSCAMOS IDENTIFICAR OPORTUNIDADES LEGÍTIMAS DE GANHO FINANCEIRO PARA NOSSOS CLIENTES.'
              },
              { 
                title: 'Direito Imobiliário', 
                desc: 'Regularizações, due diligence e segurança jurídica em cada operação patrimonial.', 
                icon: CheckCircle,
                image: direitoImobiliarioAsset.url,
                mainTitle: 'Segurança em cada decisão imobiliária.',
                bullets: ['Regularizações.', 'Due diligence.', 'Contratos.', 'Negociações.', 'Defesa patrimonial.'],
                highlight: 'MUITO ALÉM DA NEGOCIAÇÃO DE IMÓVEIS, ATUAMOS PARA PROTEGER PATRIMÔNIOS, REDUZIR RISCOS E OFERECER SEGURANÇA JURÍDICA EM CADA OPERAÇÃO.'
              },
              { 
                title: 'Direito Condominial', 
                desc: 'Gestão jurídica segura para condomínios, implantação, convenções e mediação.', 
                icon: Users,
                image: direitoCondominialAsset.url,
                mainTitle: 'Gestão condominial exige respaldo jurídico.',
                bullets: ['Implantação.', 'Assembleias.', 'Convenções.', 'Contratos.', 'Síndicos.', 'Prestação de contas.', 'Previsão Orçamentária.', 'Obras.', 'Mediação.'],
                highlight: 'MAIS DO QUE SOLUCIONAR CONFLITOS, CONTRIBUÍMOS PARA UMA GESTÃO CONDOMINIAL SEGURA, TRANSPARENTE E JURIDICAMENTE ESTRUTURADA.'
              },
              { 
                title: 'Compliance Trabalhista', 
                desc: 'Estruturação de processos internos para redução de riscos e prevenção de passivos.', 
                icon: Gavel,
                image: complianceTrabalhistaAsset.url,
                mainTitle: 'A conformidade começa antes da fiscalização.',
                bullets: ['NR-1.', 'PGR.', 'Rotinas.', 'Documentação.', 'Processos internos.', 'Treinamentos.', 'Prevenção de passivos.'],
                highlight: 'MUITO ALÉM DA ADEQUAÇÃO ÀS NORMAS, ESTRUTURAMOS PROCESSOS QUE REDUZEM RISCOS, FORTALECEM A GESTÃO E PREVINEM PASSIVOS TRABALHISTAS.'
              },
              { 
                title: 'Planejamento Patrimonial', 
                desc: 'Holding, sucessão e governança para preservar legados e proteger gerações.', 
                icon: Award,
                image: planejamentoPatrimonialAsset.url,
                mainTitle: 'Patrimônio protegido. Futuro organizado.',
                bullets: ['Holding.', 'Sucessão.', 'Governança.', 'Famílias empresárias.', 'Eficiência Tributária.'],
                highlight: 'MAIS DO QUE ORGANIZAR BENS, ESTRUTURAMOS ESTRATÉGIAS PARA PROTEGER PATRIMÔNIOS, PRESERVAR LEGADOS E GARANTIR SEGURANÇA ÀS PRÓXIMAS GERAÇÕES.'
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col h-full border border-white/5 rounded-2xl overflow-hidden bg-background hover:border-primary/50 transition-all"
              >
                {/* Visual Header with Image and Overlay */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-20" />
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                      <item.icon className="w-16 h-16 text-primary/20" />
                    </div>
                  )}
                  
                  {/* Badge */}
                  <div className="absolute top-6 left-6 z-30">
                    <span className="px-3 py-1 rounded-full border border-primary/30 bg-background/80 backdrop-blur-sm text-[10px] font-bold text-primary uppercase tracking-widest">
                      {item.title}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-2xl font-serif text-white mb-4 leading-tight">
                    {item.mainTitle || item.title}
                  </h4>
                  
                  {/* Bullet list from prints */}
                  <div className="mb-6 flex-grow">
                    <ul className="space-y-2">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-white transition-colors">
                          <span className="text-primary mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlight text from prints */}
                  <p className="text-[10px] md:text-[11px] font-bold text-muted-foreground group-hover:text-primary leading-relaxed border-t border-white/5 pt-6 uppercase tracking-wider transition-colors">
                    {item.highlight}
                  </p>
                </div>
                
                {/* CTA Link */}
                <div className="px-8 pb-8">
                  <a href={WHATSAPP_LINK} className="inline-flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                    Consultar Especialista <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
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

      {/* Diferencial Estratégico Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-[#101947] leading-tight mb-4"
            >
              Não entregamos apenas advocacia.
            </motion.h3>
          </div>

          {/* Timeline-style grid */}
          <div className="relative max-w-6xl mx-auto mb-16">
            {/* Desktop Horizontal Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 relative z-10">
              {[
                { step: '01', title: 'ENTREGAMOS ESTRATÉGIA PARA DECISÕES' },
                { step: '02', title: 'SEGURANÇA PARA CRESCER' },
                { step: '03', title: 'ORGANIZAÇÃO PATRIMONIAL' },
                { step: '04', title: 'PROTEÇÃO EMPRESARIAL' },
                { step: '05', title: 'RECUPERAÇÃO FINANCEIRA QUANDO APLICÁVEL' },
                { step: '06', title: 'RELACIONAMENTOS DURADOUROS' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#101947] text-white flex items-center justify-center font-bold text-sm mb-6 shadow-lg shadow-[#101947]/20 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h5 className="text-[10px] font-bold text-[#101947] uppercase tracking-wider leading-tight px-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h5>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl font-serif text-[#101947] leading-relaxed"
            >
              Porque acreditamos que o jurídico deve contribuir para o crescimento do negócio, e não apenas atuar quando o problema já aconteceu.
            </motion.p>
          </div>
        </div>
      </section>


      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
            >
              Depoimentos
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { 
                name: "Vinicius Dias", 
                text: "Atendimento sensacional! O escritório é rápido, eficiente e extremamente profissional em tudo.", 
                initial: "V",
                source: "Via Google"
              },
              { 
                name: "Bruno Pinheiro", 
                text: "Profissionais que transmitem segurança e compromisso!", 
                initial: "B",
                source: "Via Google"
              },
              { 
                name: "Thais Lima", 
                text: "Atendimento perfeito! Atende a distância também! Advogado super qualificado.", 
                initial: "T",
                source: "Via Google"
              },
              { 
                name: "Helamã Souza", 
                text: "Agradeço ao Dr. Lucas e a todos que fazem parte da Monteiro Ramalho Advogados. Eficiência e profissionalismo!", 
                initial: "H",
                source: "Via Google"
              }
            ].map((dep, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex flex-col bg-[#101947] rounded-3xl p-8 pt-12 shadow-2xl shadow-slate-200"
              >
                {/* Avatar Badge */}
                <div className="absolute -top-6 left-8 flex items-center">
                  <div className="w-14 h-14 rounded-full bg-white border-4 border-[#101947] flex items-center justify-center text-[#101947] font-bold text-xl shadow-lg">
                    {dep.initial}
                  </div>
                  <div className="ml-4 bg-white rounded-r-full py-2 px-6 pr-10 shadow-md">
                    <p className="font-bold text-[#101947] text-sm leading-tight">{dep.name}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest">{dep.source}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-col h-full">
                  <p className="text-white/90 text-sm leading-relaxed mb-6 italic flex-grow">"{dep.text}"</p>
                  
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clientes Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
            >
              Clientes
            </motion.div>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif text-[#101947] leading-tight"
            >
              A confiança é o nosso maior reconhecimento.
            </motion.h3>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50"
            >
              <img 
                src={clientesGrid1Asset.url} 
                alt="Nossos Clientes - Grade 1" 
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50"
            >
              <img 
                src={clientesGrid2Asset.url} 
                alt="Nossos Clientes - Grade 2" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipe Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full border border-slate-200 bg-white text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
            >
              Equipe
            </motion.div>
          </div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl overflow-hidden"
            >
              <img 
                src={equipeGridAsset.url} 
                alt="Equipe Monteiro Ramalho" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>


      {/* Quem Somos Section */}
      <section id="sobre" className="relative py-32 overflow-hidden">
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/90 z-10" />
          <img 
            src={quemSomosBgAsset.url} 
            alt="Escritório Monteiro Ramalho" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-6 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-8"
              >
                Quem Somos
              </motion.div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-serif text-white leading-tight"
              >
                Hub jurídico estratégico para <span className="text-primary italic">empresas e legados</span>.
              </motion.h3>
            </div>

            <div className="md:col-span-7 space-y-8 pt-4">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Fundada em 2015, o <span className="text-white font-bold">Monteiro Ramalho Advogados Associados</span> nasceu com um propósito claro: oferecer uma advocacia moderna, próxima e orientada por resultados, disponibilidade e falando a linguagem do cliente.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                Ao longo da nossa trajetória, consolidamos uma atuação consultiva que integra diferentes áreas do Direito para apoiar decisões empresariais, patrimoniais e condominiais com segurança jurídica e visão estratégica.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground leading-relaxed italic"
              >
                "Acreditamos que o papel do advogado não é apenas resolver conflitos, mas contribuir para que eles sejam evitados."
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10"
              >
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
              </motion.div>
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
      <footer className="py-20 border-t border-primary/10 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="mb-6">
                <img src={logoMraAsset.url} alt="Monteiro Ramalho Advogados" className="h-12 w-auto mb-4" />
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
                <li className="flex items-center gap-2"><span className="text-primary">•</span> contato@monteiroramalho.adv.br</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> (85) 99444-3223</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> linkedin.com/company/monteiroramalhoadvassociados</li>
                <li className="flex items-center gap-2"><span className="text-primary">•</span> @monteiroramalhoadv</li>
                <li className="flex items-center gap-2 text-[10px] uppercase font-bold text-primary mt-4">
                  R. Albert Sabin, 65 - Guararapes, Fortaleza - CE
                </li>
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
