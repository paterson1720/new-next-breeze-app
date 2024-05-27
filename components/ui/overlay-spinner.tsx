interface Props {
  visible?: boolean;
}

export default function OverlaySpinner({ visible = true }: Props) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
      <div className="flex items-center justify-center w-12 h-12 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
    </div>
  );
}
