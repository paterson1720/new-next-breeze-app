import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";

interface Props {
  open: boolean;
  onClick: () => void;
}

export default function MobileNavigationMenuButton({ open, onClick }: Props) {
  return (
    <Button
      type="button"
      onClick={onClick}
      className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <span className="absolute -inset-0.5" />
      <span className="sr-only">Open main menu</span>
      {open ? (
        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
      )}
    </Button>
  );
}
