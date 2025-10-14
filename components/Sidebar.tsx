import Link from 'next/link';

const links = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/analytics', label: 'Analytics' },
  { href: '/users', label: 'Users' },
  { href: '/settings', label: 'Settings' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r shadow-sm p-4">
      <h1 className="text-xl font-bold mb-6">SaaS Admin</h1>
      <nav className="flex flex-col space-y-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
