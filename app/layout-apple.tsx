import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NavbarApple from '../components/NavbarApple';
import FooterApple from '../components/FooterApple';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MCP Marketplace - Model Context Protocol Services',
  description: 'Discover and integrate powerful Model Context Protocol (MCP) services with your AI assistants.',
};

export default function AppleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.className} h-full`}>
        <div className="flex min-h-full flex-col">
          <NavbarApple />
          <main className="flex-grow pt-16">{children}</main>
          <FooterApple />
        </div>
      </body>
    </html>
  );
}
