export default function P({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <p className={`px-8 pb-8 ${className}`}>{children}</p>;
}
