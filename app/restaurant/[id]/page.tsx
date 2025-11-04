import Link from 'next/link';

export default function RestaurantDetail() {
  return (
    <div className="space-y-4">
      <Hero />
      <Tabs />
      <MenuList />
      <BookOrderBar />
    </div>
  );
}

function Hero() {
  return (
    <div className="card overflow-hidden">
      <div className="relative aspect-[16/9] w-full bg-primary/10">
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="text-xl font-bold">Umami Garden</h1>
              <p className="text-xs opacity-90">Sushi ? $$ ? 1.2 km</p>
            </div>
            <button className="badge bg-white/90 text-neutral-800">?? Saved</button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between p-3 text-sm">
        <div className="flex items-center gap-3">
          <span>? 4.7</span>
          <span>30?40 min</span>
          <span>Open now</span>
        </div>
        <Link href="#info" className="text-primary">Info</Link>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="tabs">
      <button className="tab tab-active">Menu</button>
      <button className="tab">Reviews</button>
      <button className="tab">About</button>
    </div>
  );
}

function MenuList() {
  const items = [
    { name: 'Salmon Nigiri', desc: 'Fresh cut, 2 pcs', price: '6.50' },
    { name: 'Spicy Tuna Roll', desc: '8 pcs', price: '9.00' },
    { name: 'Sashimi Set', desc: 'Chef selection', price: '16.00' },
  ];
  return (
    <div className="space-y-2">
      {items.map((it) => (
        <div key={it.name} className="card flex items-center justify-between p-3">
          <div>
            <div className="text-sm font-medium">{it.name}</div>
            <div className="text-xs text-neutral-600">{it.desc}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-sm font-semibold">${it.price}</div>
            <button className="btn btn-primary px-3 py-2">Add</button>
          </div>
        </div>
      ))}
    </div>
  );
}

function BookOrderBar() {
  return (
    <div className="fixed inset-x-0 bottom-16 z-20 mx-auto max-w-screen-md px-safe">
      <div className="card flex items-center justify-between p-3">
        <div className="text-sm">
          <span className="font-semibold">2</span> items ? <span className="font-semibold">$22.00</span>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-ghost">Book</button>
          <button className="btn btn-primary">View order</button>
        </div>
      </div>
    </div>
  );
}
