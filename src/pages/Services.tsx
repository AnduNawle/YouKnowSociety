import { motion } from 'motion/react';
import { Layout, Cloud, Shield, Headphones, Lightbulb, Code, Terminal, Server, Database, Lock, Search, Smartphone } from 'lucide-react';

const serviceCategories = [
  {
    hero: 'Développement Logiciel',
    icon: Code,
    desc: 'Conception et réalisation de solutions applicatives performantes et évolutives.',
    items: [
      { t: 'Applications Web', d: 'React, Vue, Node.js, architectures modernes.', i: Layout },
      { t: 'Apps Mobiles', d: 'iOS, Android via React Native ou Flutter.', i: Smartphone },
      { t: 'SaaS & Plateformes', d: 'Solutions multi-tenants évolutives.', i: Database },
    ],
  },
  {
    hero: 'Infrastructure & Cloud',
    icon: Cloud,
    desc: 'Hébergement haute disponibilité et gestion optimisée de vos ressources.',
    items: [
      { t: 'Migration Cloud', d: 'AWS, Azure, Google Cloud Platform.', i: Server },
      { t: 'DevOps & CI/CD', d: 'Automatisation des déploiements.', i: Terminal },
      { t: 'Virtualisation', d: 'Gestion de serveurs et conteneurs (Docker).', i: Database },
    ],
  },
  {
    hero: 'Cybersécurité',
    icon: Shield,
    desc: 'Protection proactive de vos actifs numériques et conformité.',
    items: [
      { t: 'Audits de Sécurité', d: 'Tests d\'intrusion et analyses de vulnérabilité.', i: Search },
      { t: 'Gouvernance & Risques', d: 'Conformité RGPD et normes ISO.', i: Lock },
      { t: 'Protection Réseau', d: 'Pare-feux, WAF et monitoring SOC.', i: Shield },
    ],
  },
  {
    hero: 'Support & Conseil',
    icon: Lightbulb,
    desc: 'Accompagnement stratégique et assistance technique continue.',
    items: [
      { t: 'Support 24/7', d: 'Assistance technique pour vos utilisateurs.', i: Headphones },
      { t: 'Stratégie Digitale', d: 'Expertise pour votre transformation.', i: Lightbulb },
      { t: 'Tierce Maintenance', d: 'Maintenance corrective et évolutive.', i: Terminal },
    ],
  },
];

export default function Services() {
  return (
    <div className="pb-32">
      {/* Header */}
      <section className="py-24 border-b border-white/5 relative overflow-hidden">
        {/* Floating icons */}
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-10 -left-10 text-blue-500/5"
        >
          <Database size={200} />
        </motion.div>
        <motion.div 
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 -right-10 text-indigo-500/5"
        >
          <Server size={150} />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl lg:text-8xl font-black text-white tracking-tighter mb-6 uppercase italic">
              Nos <span className="text-gradient">Services IT</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Une gamme complète de solutions informatiques de pointe supervisées par YOUKNOW pour garantir performance et résilience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 mt-20 space-y-40">
        {serviceCategories.map((cat, idx) => (
          <motion.section 
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="grid lg:grid-cols-12 gap-16"
          >
            <div className="lg:col-span-5 space-y-8">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-900/40 mb-10"
              >
                <cat.icon size={36} />
              </motion.div>
              <h2 className="text-4xl font-extrabold text-white leading-tight uppercase tracking-tighter italic">{cat.hero}</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                {cat.desc}
              </p>
              <div className="pt-6">
                <button className="text-blue-500 font-black text-sm uppercase tracking-[0.2em] flex items-center gap-2 group border-b border-white/5 hover:border-blue-500 transition-all pb-1">
                  Demande de devis spécifique <Code size={16} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid md:grid-cols-2 gap-4">
              {cat.items.map((item, i) => (
                <div key={i} className="glass-card p-8 hover:bg-white/10 transition-colors group">
                  <div className="flex flex-col gap-6">
                    <div className="w-12 h-12 bg-white/5 text-slate-400 rounded-xl flex items-center justify-center group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                      <item.i size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{item.t}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="glass-card p-8 bg-blue-600/10 border-blue-500/20 flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-blue-600/20">
                <h3 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Besoin d'autre chose ?</h3>
                <p className="text-slate-400 text-[10px] mb-6 uppercase tracking-widest font-black">Contactez nos experts</p>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/20">
                  <Terminal size={20} />
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Atouts */}
      <section className="mt-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div>
                <h2 className="text-[10px] uppercase tracking-[0.6em] font-black text-blue-500 mb-6">Infrastructures</h2>
                <h3 className="text-5xl lg:text-7xl font-extrabold text-white mb-8 tracking-tighter leading-none italic uppercase">Pourquoi choisir <span className="text-gradient">YOUKNOW</span> ?</h3>
              </div>
              <div className="space-y-8">
                {[
                  { t: 'Expertise Pluridisciplinaire', d: 'Une équipe d\'ingénieurs hardware et software hautement certifiés.' },
                  { t: 'Accompagnement Agile', d: 'Réactivité maximale grâce à nos méthodes de gestion centralisées.' },
                  { t: 'Zéro Trust Policy', d: 'Sécurité intrinsèque à chaque étape du développement et du déploiement.' },
                  { t: 'Engagement de Résilience', d: 'Garanties SLA strictes sur toutes nos infrastructures gérées.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="mt-1 w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 text-xs font-black group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-2 uppercase tracking-wide italic">{item.t}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square glass-card relative overflow-hidden group p-2 border-white/5">
               <div className="absolute inset-0 bg-slate-900 z-0">
                 <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop" 
                  alt="Tech innovation" 
                  className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                 />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
               <div className="absolute bottom-10 left-10 right-10 p-10 glass-card bg-slate-900/60 z-20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] text-slate-500 uppercase font-black tracking-[0.4em]">SERVICE_INTEGRITY</span>
                  </div>
                  <div className="text-white font-black text-4xl tracking-tighter mb-4 italic uppercase">99.999% SLA</div>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    Notre réseau de distribution global garantit une latence minimale et une redondance totale pour vos applications critiques.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
