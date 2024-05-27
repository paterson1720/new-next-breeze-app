"use client";

import { Input } from "@/components/ui/input";
import { useDebouncedCallback } from "@/lib/hooks";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface Props {
  visible?: boolean;
  placeholder?: string;
}

export default function DataTableManualSearchInput({ placeholder, visible = true }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((searchTerm: string | undefined) => {
    const params = new URLSearchParams(searchParams);
    if (searchTerm) {
      params.set("query", searchTerm);
      params.set("page", "0");
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  if (!visible) return null;

  return (
    <Input
      type="search"
      name="query"
      className="max-w-sm"
      placeholder={placeholder || "Search..."}
      defaultValue={searchParams.get("query")?.toString()}
      onChange={(e) => {
        const searchTerm = e.currentTarget.value;
        handleSearch(searchTerm);
      }}
    />
  );
}
