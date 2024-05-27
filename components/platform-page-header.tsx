type Props = {
  children: React.ReactNode;
  visible?: boolean;
};

export default function PlatformPageHeader({ children, visible }: Props) {
  if (!visible) return null;

  return (
    <header className="border-b border-b-secondary">
      <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <h1 className="text-lg tracking-tight text-primary">{children}</h1>
      </div>
    </header>
  );
}
