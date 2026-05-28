import { motion } from 'motion/react';
import { CheckCircle2, TrendingUp, Clock, Target, ArrowRight } from 'lucide-react';

const cases = [
  {
    title: 'Modernisation Bancaire',
    client: 'FinBank SA',
    desc: 'Migration complète de l\'infrastructure on-premise vers un cloud hybride sécurisé.',
    problem: 'Lenteur des transactions et vulnérabilités de sécurité accrues.',
    solution: 'Architecture micro-services et déploiement d\'un WAF robuste.',
    result: 'Disponibilité de 99.99% et réduction de 40% des coûts d\'exploitation.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop',
    tags: ['Cloud', 'Finance', 'Security'],
  },
  {
    title: 'Plateforme E-Gov',
    client: 'Ministère du Numérique',
    desc: 'Développement d\'une plateforme centralisée pour les services citoyens.',
    problem: 'Processus administratifs papier longs et inefficaces.',
    solution: 'Portail mobile-first avec authentification biométrique.',
    result: 'Plus de 2 millions d\'utilisateurs actifs en 6 mois.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop',
    tags: ['Public Sector', 'Web App', 'UX'],
  },
  {
    title: 'Supply Chain Optima',
    client: 'LogiTrans Group',
    desc: 'Outil de suivi en temps réel des flottes logistiques africaines.',
    problem: 'Manque de visibilité sur le transit des marchandises.',
    solution: 'Intégration IoT et tableau de bord prédictif via IA.',
    result: 'Optimisation de 25% du temps de livraison moyen.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    tags: ['IoT', 'AI', 'Logistics'],
  },
];

export default function CaseStudies() {
  return (
    <div className="pb-32">
       {/* Header */}
       <section className="py-24 max-w-7xl mx-auto px-6 border-b border-white/5 technical-grid">
        {/* Floating icons */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-10 right-20 text-blue-500/10 pointer-events-none"
        >
          <TrendingUp size={150} />
        </motion.div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-10 text-indigo-500/10 pointer-events-none"
        >
          <Clock size={200} />
        </motion.div>

        <h1 className="text-[10px] uppercase tracking-[0.6em] font-black text-blue-500 mb-6">Impact & Résultats</h1>
        <h2 className="text-6xl lg:text-9xl font-black text-white tracking-tighter leading-none mb-10 uppercase italic">
          Histoires de <br /> <span className="text-gradient">réussites</span> clients.
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
          Découvrez comment nous aidons nos partenaires à surmonter leurs défis technologiques avec des solutions innovantes et concrètes.
        </p>
      </section>

      {/* Cases */}
      <div className="max-w-7xl mx-auto px-6 space-y-32 mt-20">
        {cases.map((c, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="lg:w-1/2">
              <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl glass-card p-2 border-white/10 group">
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 rounded-[2.5rem]" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-8 left-8 flex gap-2">
                  {c.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 rounded-full text-[10px] font-black uppercase text-blue-400 tracking-widest whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-10">
              <div>
                <div className="text-blue-500 font-black mb-2 uppercase tracking-[0.4em] text-[10px] italic">{c.client}</div>
                <h3 className="text-5xl font-black text-white mb-8 leading-none uppercase italic tracking-tighter">{c.title}</h3>
                <p className="text-slate-400 text-xl leading-relaxed italic border-l-4 border-blue-500/20 pl-8 mb-10">
                  "{c.desc}"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-xs">
                    <Target size={18} className="text-blue-500" /> Défi
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{c.problem}</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-xs">
                    <CheckCircle2 size={18} className="text-blue-400" /> Solution
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{c.solution}</p>
                </div>
              </div>

              <div className="glass-card p-10 bg-blue-600/5 border-white/5 flex items-center justify-between group cursor-help">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-black tracking-[0.3em] mb-2">Impact Mesuré</div>
                  <div className="text-3xl font-black text-white italic uppercase tracking-tighter">{c.result}</div>
                </div>
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-500 shadow-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <TrendingUp size={28} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust Section */}
      <section className="mt-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card p-24 text-center border-white/5 bg-slate-900/40 relative overflow-hidden">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute inset-0 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"
            />
            <h2 className="text-slate-500 text-[10px] uppercase font-black tracking-[0.8em] mb-16 relative z-10">NETWORK_TRUST</h2>
            <div className="flex flex-wrap justify-center gap-16 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700 relative z-10">
              {['TechCorp', 'InnoVentures', 'GlobalLogistics', 'FinanceOne'].map(logo => (
                <div key={logo} className="text-white font-black text-3xl tracking-tighter uppercase italic hover:text-blue-500 cursor-default">
                  {logo}
                </div>
              ))}
            </div>
            <p className="text-slate-500 mt-20 text-xs italic uppercase tracking-[0.4em] font-black">
              Rejoignez les leaders qui ont choisi l'excellence avec YOUKNOW.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
