export default function ProfilePage() {
  return (
    <div className="space-y-4">
      <h1 className="px-1 text-base font-semibold">Profile</h1>
      <div className="card p-4">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-xl">??</div>
          <div>
            <div className="text-sm font-semibold">Alex Parker</div>
            <div className="text-xs text-neutral-600">alex@example.com</div>
          </div>
        </div>
      </div>
      <div className="card divide-y divide-neutral-100">
        {[
          { label: 'Payment methods' },
          { label: 'Addresses' },
          { label: 'Notifications' },
          { label: 'Appearance' },
          { label: 'Help & support' },
        ].map((row) => (
          <button key={row.label} className="flex w-full items-center justify-between p-4 text-left text-sm">
            <span>{row.label}</span>
            <span className="text-neutral-400">?</span>
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <button className="btn btn-ghost">Log out</button>
        <button className="btn btn-primary">Upgrade</button>
      </div>
    </div>
  );
}
