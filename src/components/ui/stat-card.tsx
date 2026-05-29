interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: Readonly<StatCardProps>) {
  return (
    <div className="p-4 text-center">
      <p className="text-2xl font-bold text-foreground">{value}</p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}
