import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-ui' });

export const metadata: Metadata = {
  title: 'Tasteflow',
  description: 'Modern food experience ? discover, order, book, and track.',
  themeColor: '#FF5A5F',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <body>
        <div className="mx-auto min-h-dvh max-w-screen-md bg-background">
          <div className="px-safe pt-safe pb-24">
            <Header />
            <main className="mt-4">{children}</main>
          </div>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-safe">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-baseline gap-2">
            <div className="h-8 w-8 rounded-xl bg-primary/15 ring-1 ring-primary/20 grid place-items-center">
              <div className="h-3 w-3 rounded-sm bg-primary" />
            </div>
            <div className="font-logo text-lg font-extrabold tracking-tight text-neutral-900">
              Tasteflow
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <button className="btn btn-ghost px-3 py-2">Help</button>
            <button className="btn btn-primary px-3 py-2">Get app</button>
          </div>
        </div>
      </div>
    </header>
  );
}

function BottomNav() {
  const items = [
    { href: '/', label: 'Discover', icon: '???' },
    { href: '/favorites', label: 'Saved', icon: '??' },
    { href: '/orders', label: 'Orders', icon: '??' },
    { href: '/profile', label: 'Profile', icon: '??' },
  ];
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-screen-md border-t border-neutral-200 bg-surface/95 backdrop-blur">
      <div className="grid grid-cols-4">
        {items.map((it) => (
          <Link key={it.href} href={it.href} className="group grid place-items-center p-2.5">
            <div className="flex flex-col items-center gap-1">
              <div className="text-lg leading-none group-hover:scale-110 transition-transform">{it.icon}</div>
              <div className="text-[11px] font-medium text-neutral-600 group-hover:text-neutral-900">
                {it.label}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
}
