import { motion } from 'motion/react';
import { ExternalLink, ShoppingBag, Terminal, Globe, Shield, Smartphone, Box } from 'lucide-react';

const subsidiaries = [
  {
    name: 'YouKnow Tech',
    sector: 'Développement & Cloud',
    desc: 'Cœur technologique du groupe, spécialisé dans les architectures cloud et le développement logiciel complexe.',
    icon: Terminal,
    color: 'bg-blue-600',
    link: '#',
  },
  {
    name: 'YouKnow Digital',
    sector: 'Services Digitaux',
    desc: 'Agence de transformation numérique accompagnant les entreprises dans leur stratégie de présence en ligne.',
    icon: Globe,
    color: 'bg-brand-600',
    link: '#',
  },
  {
    name: 'YouKnow Commerce',
    sector: 'E-commerce Solutions',
    desc: 'Expert en solutions de vente en ligne et plateformes de paiement sécurisées pour le retail moderne.',
    icon: ShoppingBag,
    color: 'bg-indigo-600',
    link: '#',
  },
  {
    name: 'YouKnow Secure',
    sector: 'Cybersécurité',
    desc: 'Unité dédiée à la protection des données, aux audits de sécurité et à la conformité réglementaire.',
    icon: Shield,
    color: 'bg-slate-800',
    link: '#',
  },
];

export default function Subsidiaries() {
  return (
    <div className="pb-32">
      {/* Header */}
      <section className="py-32 text-center overflow-hidden relative border-b border-white/5 technical-grid">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-[10px] uppercase tracking-[0.6em] font-black text-blue-500 mb-8">Un Groupe, Plusieurs Expertises</h1>
            <h2 className="text-6xl lg:text-9xl font-black text-white tracking-tighter uppercase mb-8 leading-none italic">
              Nos <span className="text-gradient">Filiales</span>
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed italic">
              "L'union de nos talents au service de votre ambition technologique."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid md:grid-cols-2 gap-10">
          {subsidiaries.map((sub, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-10 border-white/5 hover:bg-white/10 transition-all group overflow-hidden relative"
            >
              <div className="flex flex-col h-full space-y-8 relative z-10">
                <div className="flex justify-between items-start">
                  <div className={`w-16 h-16 ${sub.color} text-white rounded-3xl flex items-center justify-center shadow-2xl ${sub.color === 'bg-blue-600' ? 'shadow-blue-600/30' : 'shadow-slate-900/40'}`}>
                    <sub.icon size={32} />
                  </div>
                  <a 
                    href={sub.link} 
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-xl"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                <div>
                  <h3 className="text-3xl font-black text-white tracking-tight uppercase mb-2 italic">{sub.name}</h3>
                  <div className="inline-block px-3 py-1 bg-white/5 text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10 mb-6 italic">
                    {sub.sector}
                  </div>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {sub.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5">
                   <button className="text-blue-500 font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2 group-hover:gap-4 transition-all">
                      Découvrir la filiale <Box size={16} />
                   </button>
                </div>
              </div>
              
              {/* Background text decoration */}
              <div className="absolute -bottom-10 -right-10 text-[10rem] font-black text-white opacity-[0.02] select-none pointer-events-none uppercase italic group-hover:scale-110 transition-transform">
                {sub.name.split(' ')[1]}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Visual Map/Schema Placeholder */}
      <section className="max-w-7xl mx-auto px-6 mt-40">
        <div className="glass-card p-12 lg:p-24 text-center border-white/5">
          <h2 className="text-4xl lg:text-7xl font-black text-white mb-16 uppercase tracking-tighter italic">L'Écosystème <span className="text-gradient">YOUKNOW</span></h2>
          
          <div className="relative flex items-center justify-center min-h-[400px]">
             {/* Central Node */}
             <div className="z-20 w-48 h-48 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-4xl shadow-[0_0_50px_rgba(37,99,235,0.4)] animate-pulse">
               YOU<br/>KNOW
             </div>
             
             {/* Satellite Nodes (Visual only) */}
             <div className="hidden lg:block absolute inset-0">
               {[
                 { top: '10%', left: '20%', label: 'DEVELOPMENT' },
                 { top: '15%', right: '20%', label: 'VIRTUALIZATION' },
                 { bottom: '15%', left: '15%', label: 'SECURITY' },
                 { bottom: '10%', right: '15%', label: 'STRATEGY' },
                 { top: '50%', left: '5%', label: 'CLOUD' },
                 { top: '50%', right: '5%', label: 'MOBILE' }
               ].map((node, i) => (
                 <motion.div 
                  key={i}
                  style={{ top: node.top, left: node.left, right: node.right }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  className="absolute p-6 glass-card bg-white/5 border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-slate-500"
                 >
                   {node.label}
                 </motion.div>
               ))}
               
               {/* SVG Lines Connector (simplified) */}
               <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-10">
                 <line x1="50%" y1="50%" x2="25%" y2="20%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5,5" />
                 <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5,5" />
                 <line x1="50%" y1="50%" x2="20%" y2="75%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5,5" />
                 <line x1="50%" y1="50%" x2="80%" y2="85%" stroke="#3b82f6" strokeWidth="1" strokeDasharray="5,5" />
               </svg>
             </div>
          </div>
          
          <p className="mt-20 text-slate-500 max-w-xl mx-auto italic text-sm leading-relaxed uppercase tracking-widest font-black opacity-80">
            Chaque filiale opère de manière autonome tout en bénéficiant de la force stratégique et opérationnelle centralisée de YOUKNOW.
          </p>
        </div>
      </section>
    </div>
  );
}
