'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type NavItemProps = {
  href: string;
  label: string;
  handleMenuToggle: () => void;
};

function NavItem({ href, label, handleMenuToggle }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-md transition-colors ${isActive ? 'bg-primary text-white hover:bg-primary/80' : 'text-gray-500 hover:text-gray-700'}`}
      onClick={handleMenuToggle}
    >{label}</Link>
  );
}

export default NavItem;