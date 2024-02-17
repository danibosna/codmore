"use client";
// import { useAuth } from '@hooks/useAuth';
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Servicios", href: "/servicios" },
  { name: "Conecta", href: "/" },
  { name: "Proyectos", href: "/proyectos" },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const path = usePathname();

  return (
    <nav className="fixed bottom-1 z-50 flex w-full justify-center">
      <div className="flex w-1/3 justify-center">
        <div className="w-full flex items-center justify-around">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                item.href == path
                  ? "custom-button mb-2 text-white"
                  : "hover:custom-button text-slate-900 hover:text-slate-50",
                "mb-2 px-3 py-2 text-xs font-medium md:text-sm",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
