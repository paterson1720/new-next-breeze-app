import { useCallback, useState } from "react";

export function useDisclosure() {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prevIsOpen) => !prevIsOpen), []);
  return { isOpen, open, close, toggle };
}
