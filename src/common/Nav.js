// import { useAuth } from '@hooks/useAuth';

const navigation = [
  { name: 'Inicio', href: '/', current: true },
  { name: 'Servicios', href: '/servicios/', current: false },
  { name: 'Desarrollos', href: '/desarrollos/', current: false },
  { name: 'Nosotros', href: '/nosotros/', current: false },
  { name: 'Contacto', href: '/contacto/', current: false },
];

// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Nav() {
  // const auth = useAuth();
  // const userData = {
  //   name: auth?.user?.name,
  //   email: auth?.user?.email,
  //   imageUrl: auth?.user?.avatar,
  // };

  return (
    <nav className="z-20 fixed bottom-1 left-8 h-auto">
      <div className="hidden md:block">
        <div className="ml-1 flex flex-col items-baseline justify-around">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(item.current ? 'text-white mb-2 custom-button' : 'text-slate-900 hover:text-slate-50 hover:custom-button', 'px-3 py-2 text-sm font-medium mb-2')}
              aria-current={item.current ? item.current : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
