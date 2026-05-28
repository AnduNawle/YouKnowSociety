import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-lg">
                YK
              </div>
              <span className="font-bold text-xl tracking-tight uppercase text-white">
                You<span className="text-blue-500">know</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Groupe technologique innovant supervisant des entreprises leaders pour propulser votre transformation numérique avec excellence et sécurité.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-blue-400 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-blue-400 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:text-blue-400 transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-500 uppercase tracking-widest text-[10px]">Services</h4>
            <ul className="space-y-4">
              {['Développement Logiciel', 'Infrastructure Cloud', 'Cybersécurité', 'Support & Maintenance', 'Conseil IT'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-blue-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-500 uppercase tracking-widest text-[10px]">Groupe</h4>
            <ul className="space-y-4">
              {['À propos', 'Nos Filiales', 'Études de cas', 'Actualités', 'Partenariats'].map((item) => (
                <li key={item}>
                  <Link to={item === 'À propos' ? '/about' : item === 'Nos Filiales' ? '/subsidiaries' : '/'} className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                     {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-500 uppercase tracking-widest text-[10px]">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Email</span>
                  <span className="text-sm text-slate-300">contact@youknow.click</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Siège</span>
                  <span className="text-sm text-slate-300">Dakar, Sénégal (Plateau)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">
            &copy; {currentYear} YOUKNOW Group.
          </p>
          <div className="flex gap-6 text-[10px] text-slate-500 uppercase font-bold tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
