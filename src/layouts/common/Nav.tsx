// import { useAuth } from '@hooks/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navigation = [
  { name: 'Contratos', href: '/contratos' },
  { name: 'Desarrollos', href: '/desarrollos' },
  { name: 'Connect', href: '/' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Contacto', href: '/contacto' },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Nav() {
  const { route } = useRouter();

  return (
    <nav className="z-50 fixed bottom-1 flex justify-center w-full">
      <div className="flex w-4/6 justify-center">
        <div className="flex items-center justify-around">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(item.href == route ? 'text-white mb-2 custom-button' : 'text-slate-900 hover:text-slate-50 hover:custom-button', 'px-3 py-2 md:text-sm font-medium mb-2 text-xs')}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
