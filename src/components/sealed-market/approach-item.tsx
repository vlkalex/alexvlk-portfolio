interface ApproachItemProps {
  title: string;
  children: string;
}

export function ApproachItem({
  title,
  children,
}: Readonly<ApproachItemProps>) {
  return (
    <div className="space-y-1.5">
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      <p className="text-base leading-7 text-muted">{children}</p>
    </div>
  );
}
