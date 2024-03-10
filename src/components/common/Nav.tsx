"use client";
// import { useAuth } from '@hooks/useAuth';
import Link from "next/link";
import { usePathname } from "next/navigation";
import WalletData from "./WalletData";

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
    <>
      <nav className="fixed bottom-0 z-50 grid w-full grid-cols-3 justify-center">
        <div className="col-start-2 col-end-3 flex justify-center">
          <div className="flex w-full items-center justify-around">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.href == path
                    ? "custom-button mb-2 text-white"
                    : "hover:custom-button text-slate-400 hover:text-slate-50",
                  "mb-2 px-3 py-2 text-xs font-medium md:text-sm",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="mr-2 justify-self-end">
          <WalletData />
        </div>
      </nav>
    </>
  );
}
