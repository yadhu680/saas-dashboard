import '../styles/globals.css';
import type { Metadata } from 'next';
import Layout from '../components/Layout';

export const metadata: Metadata = {
  title: 'SaaS Dashboard',
  description: 'Next.js + Tailwind + TypeScript SaaS dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="bg-gray-50 text-gray-800">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
