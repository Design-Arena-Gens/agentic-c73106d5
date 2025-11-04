import Link from 'next/link';

export default function DiscoverPage() {
  return (
    <div className="space-y-4">
      <SearchBar />
      <QuickActions />
      <CategoryChips />
      <FeaturedCarousel />
      <Section title="Popular near you">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <RestaurantCard key={i} />)
          )}
        </div>
      </Section>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="card p-3">
      <div className="flex items-center gap-2">
        <div className="i">??</div>
        <input className="input" placeholder="Search dishes, places, or cuisines" />
        <button className="btn btn-ghost px-2">Filter</button>
      </div>
    </div>
  );
}

function QuickActions() {
  const actions = [
    { label: 'Delivery', desc: 'ASAP', href: '#' },
    { label: 'Pickup', desc: '15 min', href: '#' },
    { label: 'Book', desc: 'Tonight', href: '#' },
  ];
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {actions.map((a) => (
        <button key={a.label} className="shrink-0 btn btn-secondary">
          <span className="text-sm">{a.label}</span>
          <span className="ml-2 rounded-md bg-white/40 px-2 py-0.5 text-[11px]">{a.desc}</span>
        </button>
      ))}
    </div>
  );
}

function CategoryChips() {
  const cats = ['Trending', 'Sushi', 'Pizza', 'Burgers', 'Vegan', 'Dessert', 'Coffee'];
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {cats.map((c) => (
        <button key={c} className="badge whitespace-nowrap">{c}</button>
      ))}
    </div>
  );
}

function FeaturedCarousel() {
  return (
    <div className="relative">
      <div className="flex gap-3 overflow-x-auto pb-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Link key={i} href="/restaurant/1" className="card relative aspect-[16/9] w-72 shrink-0 overflow-hidden">
            <div className="absolute inset-0 bg-primary-gradient" />
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
              <div className="badge mb-2">New</div>
              <div className="text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)]">
                <div className="text-lg font-bold">Chef's Seasonal Picks</div>
                <div className="text-xs opacity-90">Fresh, local, and ready</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-base font-semibold text-neutral-900">{title}</h2>
        <button className="text-sm text-primary">See all</button>
      </div>
      {children}
    </section>
  );
}

function RestaurantCard() {
  return (
    <Link href="/restaurant/1" className="card overflow-hidden">
      <div className="relative aspect-[16/9] w-full bg-primary/10">
        <div className="absolute right-2 top-2">
          <button aria-label="save" className="badge bg-white/90">?? Save</button>
        </div>
      </div>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">Umami Garden</div>
          <div className="text-xs">? 4.7 ? 1.2 km</div>
        </div>
        <div className="mt-1 flex items-center gap-2 text-xs text-neutral-600">
          <span className="badge">Sushi</span>
          <span className="badge">$$</span>
          <span className="badge">30?40 min</span>
        </div>
        <div className="mt-3 flex gap-2">
          <button className="btn btn-primary grow">Order</button>
          <button className="btn btn-ghost">Book</button>
        </div>
      </div>
    </Link>
  );
}
