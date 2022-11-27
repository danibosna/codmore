// import { useAuth } from '@hooks/useAuth';
import { useRouter } from 'next/router';

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Desarrollos', href: '/desarrollos' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Contacto', href: '/contacto' },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Nav() {
  const { route } = useRouter();

  return (
    <nav className="z-20 fixed bottom-1 left-8 h-auto">
      <div className="hidden md:block">
        <div className="ml-1 flex flex-col items-baseline justify-around">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(item.href == route ? 'text-white mb-2 custom-button' : 'text-slate-900 hover:text-slate-50 hover:custom-button', 'px-3 py-2 text-sm font-medium mb-2')}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
