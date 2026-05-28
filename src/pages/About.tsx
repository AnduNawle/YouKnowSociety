import { motion } from 'motion/react';
import { Target, Eye, Heart, Award, History, Building2, TrendingUp, ShieldCheck } from 'lucide-react';

const values = [
  { t: 'Innovation', d: 'Anticiper les technologies de demain pour créer de la valeur aujourd\'hui.', i: TrendingUp },
  { t: 'Excellence', d: 'Une exigence de qualité sans compromis dans chaque projet.', i: Award },
  { t: 'Intégrité', d: 'Une transparence totale et un respect rigoureux de nos engagements.', i: ShieldCheck },
  { t: 'Proximité', d: 'Un accompagnement personnalisé au plus proche de vos besoins.', i: Heart },
];

export default function About() {
  return (
    <div className="pb-32 overflow-hidden relative">
      {/* Hero */}
      <section className="py-24 border-b border-white/5 relative">
        {/* Floating elements */}
        <motion.div 
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-20 right-1/4 text-blue-500/10"
        >
          <Building2 size={120} />
        </motion.div>
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-10 left-1/4 text-indigo-500/10"
        >
          <History size={80} />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-[10px] uppercase tracking-[0.6em] font-black text-blue-500 mb-8">ADN DU GROUPE</h1>
              <h2 className="text-6xl lg:text-8xl font-black text-white tracking-tighter leading-none mb-10 uppercase italic">
                Une vision <br /> globale pour <br /> <span className="text-gradient underline decoration-blue-500/30">un futur IT</span>.
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed max-w-lg font-medium">
                YOUKNOW est une holding technologique supervisant un écosystème dynamique d'experts. Nous centralisons l'innovation pour offrir une résilience maximale.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-2 border-white/10 glass-card p-2">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                  alt="Modern office" 
                  className="w-full h-full object-cover rounded-[3.5rem] opacity-70"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 w-72 p-10 bg-blue-600 text-white rounded-[2.5rem] shadow-2xl hidden md:block"
              >
                 <div className="text-6xl font-black mb-2 tracking-tighter">10+</div>
                 <div className="text-[10px] font-black uppercase tracking-[0.3em] opacity-90 italic leading-tight">Années d'Excellence Technologique</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 mt-40">
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="p-16 glass-card border-white/5 flex flex-col gap-10 hover:bg-white/10"
          >
            <div className="w-20 h-20 bg-blue-600/20 text-blue-400 rounded-3xl flex items-center justify-center shadow-inner">
              <Target size={40} />
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-extrabold text-white tracking-tight uppercase italic underline decoration-blue-500/20">Notre Mission</h3>
              <p className="text-slate-400 leading-relaxed text-xl">
                Propulser la transformation numérique globale en fournissant des infrastructures critiques et des logiciels de pointe avec une éthique de sécurité absolue.
              </p>
            </div>
          </motion.div>
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-16 glass-card bg-slate-900/40 border-white/5 text-white flex flex-col gap-10 shadow-2xl hover:bg-white/10"
          >
            <div className="w-20 h-20 bg-indigo-600/20 text-indigo-400 rounded-3xl flex items-center justify-center shadow-inner">
              <Eye size={40} />
            </div>
            <div className="space-y-6">
              <h3 className="text-4xl font-extrabold text-white tracking-tight uppercase italic underline decoration-indigo-500/20">Notre Vision</h3>
              <p className="text-slate-500 leading-relaxed text-xl">
                Devenir l'intégrateur technologique leader sur le continent, reconnu pour sa capacité à sécuriser les actifs numériques les plus précieux.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-6 mt-40">
        <div className="text-center mb-24">
          <h2 className="text-[10px] uppercase tracking-[0.8em] font-black text-blue-500 mb-6">PILIERS DU GROUPE</h2>
          <h3 className="text-5xl font-black text-white tracking-tighter uppercase italic">L'ADN <span className="text-blue-500 underline">Youknow</span></h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              className="text-center p-12 glass-card hover:border-blue-500/30"
            >
              <div className="w-16 h-16 bg-white/5 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                <v.i size={32} />
              </div>
              <h4 className="text-2xl font-black text-white mb-4 italic tracking-tight uppercase">{v.t}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-40 py-32 bg-slate-900/20 relative">
        <div className="frosted-bg opacity-20" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter uppercase italic">Pourquoi <span className="text-blue-500">YOUKNOW</span> ?</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Efficience Opérationnelle', a: 'Une centralisation des ressources IT permettant une réduction drastique des délais de livraison.' },
              { q: 'Sécurité de Grade Militaire', d: 'Chaque filiale suit des protocoles de sécurité audités et certifiés IEC/ISO.' },
              { q: 'Culture de l\'Invention', d: 'Nous allouons 20% de nos ressources à l\'exploration des technologies émergentes.' },
              { q: 'Support Omnicanal 24/7', d: 'Une assistance proactive garantie par notre centre de supervision unifié.' },
            ].map((item, i) => (
              <div key={i} className="p-8 glass-card border-white/5 flex gap-8 items-center hover:bg-white/5">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl shrink-0 shadow-lg shadow-blue-900/40">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h4 className="font-black text-white text-xl uppercase italic tracking-tight mb-2">{item.q}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.a || item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
