export default function FavoritesPage() {
  const saved = Array.from({ length: 4 });
  return (
    <div className="space-y-4">
      <h1 className="px-1 text-base font-semibold">Saved</h1>
      {saved.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {saved.map((_, i) => (
            <div key={i} className="card p-3">
              <div className="aspect-[16/9] w-full rounded-lg bg-primary/10" />
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">Place {i + 1}</div>
                  <div className="text-xs text-neutral-600">Cuisine ? $$ ? 1.1 km</div>
                </div>
                <button className="btn btn-ghost">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div className="card p-6 text-center">
      <div className="mx-auto mb-2 h-12 w-12 rounded-xl bg-primary/15 text-2xl grid place-items-center">??</div>
      <div className="text-sm font-semibold">No favorites yet</div>
      <div className="text-xs text-neutral-600">Save places to find them quickly later.</div>
      <div className="mt-3">
        <button className="btn btn-primary">Discover now</button>
      </div>
    </div>
  );
}
