'use client';

import {
  ChartBarIcon,
  HomeIcon,
  CalendarDaysIcon,
  ShoppingCartIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Shopping List',
    href: '/dashboard/invoices',
    icon: ShoppingCartIcon,
  },
  { name: 'Calendar', href: '/dashboard/customers', icon: CalendarDaysIcon },
  { name: 'Stocks', href: '/dashboard/customers', icon: ChartBarIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
            <Link
            key={link.name}
            href={link.href}
            className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md card-bg p-3 text-sm font-medium hover:bg-orange-950 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-sky-100 active-text': pathname === link.href,
                },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
            </Link>
        );
      })}
    </>
  );
}
