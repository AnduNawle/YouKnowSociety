import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    setSubmitted(true);
  };

  return (
    <div className="pb-32">
       {/* Simple Header */}
       <section className="py-24 max-w-7xl mx-auto px-6 border-b border-white/5 technical-grid relative overflow-hidden">
        {/* Floating background decorations */}
        <motion.div 
          animate={{ x: [0, 10, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-10 right-10 text-blue-500/10 pointer-events-none"
        >
          <MessageSquare size={120} />
        </motion.div>
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-5 left-10 text-indigo-500/10 pointer-events-none"
        >
          <Globe size={100} />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-[10px] uppercase tracking-[0.6em] font-black text-blue-500 mb-6 italic">RESTEZ CONNECTÉ</h1>
          <h2 className="text-6xl lg:text-9xl font-black text-white tracking-tighter leading-none mb-10 uppercase italic">
            Parlons de vos <br /> <span className="text-gradient">ambitions</span>.
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Une question sur nos services informatique ? Envie de rejoindre nos filiales ? Nous sommes à votre écoute pour transformer vos idées en réalité technique.
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 mt-20">
        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-12">
           <div className="space-y-8">
             <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-white/5 text-blue-400 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-black text-white text-[10px] uppercase tracking-[0.4em] mb-2 italic text-slate-500">Localisation</h4>
                  <p className="text-slate-300 leading-relaxed font-bold tracking-tight">
                    Dakar Plateau, Immeuble Horizon, 10ème étage<br />
                    Dakar, Sénégal
                  </p>
                </div>
             </div>

             <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-white/5 text-blue-400 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-black text-white text-[10px] uppercase tracking-[0.4em] mb-2 italic text-slate-500">Direct</h4>
                  <p className="text-slate-300 leading-relaxed font-black font-mono">
                    +221 33 000 00 00<br />
                    +221 77 000 00 00
                  </p>
                </div>
             </div>

             <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-white/5 text-blue-400 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-black text-white text-[10px] uppercase tracking-[0.4em] mb-2 italic text-slate-500">Canal Digital</h4>
                  <p className="text-slate-300 leading-relaxed font-bold">
                    contact@youknow.click<br />
                    support@youknow.click
                  </p>
                </div>
             </div>
           </div>

           <div className="p-10 glass-card bg-slate-900 shadow-3xl">
              <div className="flex items-center gap-3 mb-8">
                 <Clock size={20} className="text-blue-500" />
                 <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-white italic">Horaires Opérationnels</h4>
              </div>
              <ul className="space-y-4 text-xs text-slate-500 uppercase tracking-widest font-black">
                <li className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                  <span>Lundi - Vendredi</span>
                  <span className="text-white">08:00 - 18:00</span>
                </li>
                <li className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                  <span>Samedi</span>
                  <span className="text-white">09:00 - 13:00</span>
                </li>
                <li className="flex justify-between items-center opacity-30">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </li>
              </ul>
           </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-12 border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600/5 opacity-50 z-0 radial-gradient"></div>
            <div className="relative z-10">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 space-y-8"
              >
                <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                  <Send size={44} />
                </div>
                <h3 className="text-4xl font-black text-white italic uppercase tracking-tighter leading-none text-center">Transmission <br/>réussie</h3>
                <p className="text-slate-500 uppercase tracking-widest text-[10px] font-black">Nos ingénieurs analysent votre demande. RTC sous 24h.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-white bg-white/5 border border-white/10 px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl"
                >
                  Nouveau Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-500 ml-1 italic">Nom_Usager</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jean Dupont"
                      className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-all font-bold placeholder:text-slate-700"
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-500 ml-1 italic">Adresse_Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="jean@entreprise.com"
                      className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-all font-bold placeholder:text-slate-700"
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-500 ml-1 italic">Mobile_ID</label>
                    <input 
                      type="tel" 
                      placeholder="+221 ..."
                      className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-all font-bold placeholder:text-slate-700"
                      value={formState.phone}
                      onChange={e => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-500 ml-1 italic">Secteur_Groupe</label>
                    <input 
                      type="text" 
                      placeholder="Nom de votre société"
                      className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-all font-bold placeholder:text-slate-700"
                      value={formState.company}
                      onChange={e => setFormState({...formState, company: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-500 ml-1 italic">Type_Intervention</label>
                  <select 
                    className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-all font-bold appearance-none cursor-pointer"
                    value={formState.subject}
                    onChange={e => setFormState({...formState, subject: e.target.value})}
                  >
                    <option value="" className="bg-slate-900 border-none">SÉLECTIONNEZ UNE OPTION</option>
                    <option value="devis" className="bg-slate-900 border-none">DEMANDE DE DEVIS IT</option>
                    <option value="partenariat" className="bg-slate-900 border-none">ALLIANCE STRATÉGIQUE</option>
                    <option value="support" className="bg-slate-900 border-none">MAINTENANCE_LEVEL_3</option>
                    <option value="carrieres" className="bg-slate-900 border-none">TALENT_RECRUITMENT</option>
                    <option value="autre" className="bg-slate-900 border-none">PROTOCOLE_DIVERS</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-500 ml-1 italic">Détails_Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Quelles sont les spécifications ?"
                    className="w-full px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-all font-bold resize-none placeholder:text-slate-700"
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-lg uppercase tracking-[0.4em] shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:bg-blue-500 hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-4 italic"
                >
                  Initialiser l'envoi
                  <Send size={24} />
                </button>
              </form>
            )}
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <section className="max-w-7xl mx-auto px-6 mt-40">
        <div className="h-[500px] glass-card overflow-hidden border-white/5 relative group p-2">
           <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
            alt="World map" 
            className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-105 transition-transform duration-1000 rounded-[2.5rem]"
            referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="p-12 glass-card bg-slate-900/80 rounded-[3rem] text-center space-y-6 max-w-sm border-white/10 shadow-3xl pointer-events-auto">
                <Globe size={48} className="text-blue-500 mx-auto animate-spin-slow" />
                <h3 className="font-black text-2xl uppercase italic text-white tracking-widest leading-none">Réseau<br/>Afrique</h3>
                <p className="text-slate-400 text-xs font-bold leading-relaxed uppercase tracking-widest">
                  Points de présence critiques : Sénégal, Côte d'Ivoire, Bénin, Togo, Mali.
                </p>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
