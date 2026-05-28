import { motion } from 'motion/react';
import { ArrowRight, Cpu, ShieldCheck, Cloud, Layout as LayoutIcon, Laptop, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Développement Logiciel',
    desc: 'Applications web, mobiles et solutions métiers sur mesure.',
    icon: Laptop,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Infrastructure & Cloud',
    desc: 'Solutions d\'hébergement hautement disponibles et scalables.',
    icon: Cloud,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Cybersécurité',
    desc: 'Audit, protection des données et conformité réglementaire.',
    icon: ShieldCheck,
    color: 'bg-brand-50 text-brand-600',
  },
  {
    title: 'Support & Maintenance',
    desc: 'Support technique 24/7 pour garantir la continuité de vos activités.',
    icon: Cpu,
    color: 'bg-slate-50 text-slate-600',
  },
];

const stats = [
  { label: 'Entreprises', value: '5+' },
  { label: 'Experts IT', value: '50+' },
  { label: 'Clients Satisfaits', value: '200+' },
  { label: 'Projets Réussis', value: '500+' },
];

export default function Home() {
  return (
    <div className="space-y-32 mb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-20 lg:pt-20 lg:pb-32 technical-grid">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Floating background decorations */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 left-10 text-blue-500/10 opacity-50"
            >
              <Cpu size={120} />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 50, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 right-1/2 text-indigo-500/10 opacity-30"
            >
              <ShieldCheck size={180} />
            </motion.div>
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 right-10 text-blue-400/5 opacity-40"
            >
              <Cloud size={240} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-3 py-1 mb-6 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-tighter">
                Holding Technologique & Services Cloud
              </div>
              <h1 className="text-6xl lg:text-8xl font-extrabold text-white tracking-tighter leading-[1.05] mb-8 italic">
                Votre partenaire <br />
                <span className="text-gradient underline decoration-blue-500/20">technologique</span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed font-medium">
                YOUKNOW supervise un écosystème d'entreprises innovantes pour offrir des services informatiques de pointe : développement, infrastructure et cybersécurité.
              </p>
              <div className="flex flex-wrap gap-6">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/40 flex items-center gap-2 group"
                >
                  Demander un devis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white/5 backdrop-blur-xl border border-white/10 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  Nos Services IT
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10"
              >
                 <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
                  alt="Tech team working"
                  className="w-full h-auto opacity-80"
                  referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </motion.div>
              
              <div className="absolute -right-6 bottom-10 glass-card p-6 shadow-2xl hidden md:block border-white/20 z-20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center">
                    <CheckCircle2 size={28} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em]">SÉCURITÉ</div>
                    <div className="text-xl font-black text-white italic">Intégrité 100%</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap gap-6 justify-center">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 min-w-[240px] text-center"
            >
              <div className="text-4xl lg:text-5xl font-black text-blue-400 mb-1">{stat.value}</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-[0.3em] font-black">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] font-black text-blue-500 mb-4 italic">Nos Services Core</h2>
          <h3 className="text-4xl lg:text-6xl font-extrabold text-white tracking-tight">L'excellence au service du code.</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
              className="glass-card p-10 group"
            >
              <div className={`w-14 h-14 ${s.color.replace('bg-blue-50', 'bg-blue-500/20').replace('text-blue-600', 'text-blue-400')} rounded-2xl flex items-center justify-center mb-8 shadow-inner`}>
                <s.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{s.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                {s.desc}
              </p>
              <Link to="/services" className="text-[10px] uppercase font-black tracking-widest text-blue-500 flex items-center gap-2 group-hover:gap-3 transition-all">
                DÉTAILS <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="glass-card p-12 lg:p-24 relative overflow-hidden bg-white/5 backdrop-blur-3xl border-white/10">
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl lg:text-7xl font-extrabold text-white mb-8 tracking-tighter leading-none italic uppercase">Prêt à hacker <br />votre croissance ?</h2>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-md">
                Nos experts IT sont prêts à auditer vos infrastructures et à designer votre futur architecture Cloud.
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-12 py-5 rounded-full font-black text-lg hover:bg-blue-500 transition-all inline-flex items-center gap-4 shadow-2xl shadow-blue-900/50"
              >
                Démarrer le projet
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
               {[
                 { t: 'Dakar Services', c: 'bg-green-500' },
                 { t: 'CloudNodes', c: 'bg-blue-500' },
                 { t: 'DevHub Africa', c: 'bg-purple-500' },
                 { t: 'SecurePulse', c: 'bg-orange-500' },
               ].map((item, i) => (
                 <div key={i} className="p-6 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-3">
                   <span className={`w-2 h-2 ${item.c} rounded-full animate-pulse`}></span>
                   <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">{item.t}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
