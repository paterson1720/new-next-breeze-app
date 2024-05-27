"use client";

import { Table } from "@tanstack/react-table";
import { Input } from "./input";

interface Props<TData> {
  table: Table<TData>;
  columnKey: string;
  placeholder?: string;
  visible?: boolean;
}

export default function DataTableAutoSearchInput<TData>({
  table,
  columnKey,
  placeholder,
  visible = true,
}: Props<TData>) {
  if (!visible) return null;

  return (
    <Input
      type="search"
      placeholder={placeholder || `Search by ${columnKey}...`}
      value={(table.getColumn(columnKey)?.getFilterValue() as string) ?? ""}
      onChange={(event) => table.getColumn(columnKey)?.setFilterValue(event.target.value)}
      className="max-w-sm"
    />
  );
}
