export default function OrdersPage() {
  const orders = [
    { id: 'A123', title: 'Umami Garden', status: 'Preparing', steps: ['Received', 'Preparing', 'Ready', 'Picked up'] },
    { id: 'B456', title: 'Caf? Nova', status: 'Delivered', steps: ['Received', 'Preparing', 'On the way', 'Delivered'] },
  ];
  return (
    <div className="space-y-4">
      <h1 className="px-1 text-base font-semibold">Orders</h1>
      <div className="space-y-2">
        {orders.map((o) => (
          <div key={o.id} className="card p-3">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">{o.title}</div>
              <div className="badge">{o.status}</div>
            </div>
            <Timeline steps={o.steps} activeIndex={Math.min(2, o.steps.length - 1)} />
            <div className="mt-2 flex gap-2">
              <button className="btn btn-ghost">Details</button>
              <button className="btn btn-primary">Track</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Timeline({ steps, activeIndex }: { steps: string[]; activeIndex: number }) {
  return (
    <div className="mt-2 flex items-center justify-between">
      {steps.map((s, idx) => (
        <div key={s} className="flex flex-1 items-center">
          <div className={`grid h-7 w-7 place-items-center rounded-full ${idx <= activeIndex ? 'bg-primary text-white' : 'bg-neutral-100 text-neutral-500'}`}>
            {idx + 1}
          </div>
          {idx < steps.length - 1 && (
            <div className={`mx-1 h-1 flex-1 rounded-full ${idx < activeIndex ? 'bg-primary/60' : 'bg-neutral-200'}`} />
          )}
        </div>
      ))}
    </div>
  );
}
