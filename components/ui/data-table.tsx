"use client";

import { useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  VisibilityState,
  useReactTable,
  TableState,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTableAutoPagination } from "@/components/ui/data-table-auto-pagination";
import { DataTableColumnVisibilityToggle } from "@/components/ui/data-table-column-visibility-toggle";
import { DataTableManualPagination } from "./data-table-manual-pagination";
import DataTableAutoSearchInput from "./data-table-auto-search-input";
import DataTableManualSearchInput from "./data-table-manual-search-input";

interface Props<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  search?: {
    autoSearch?: boolean;
    autoSearchColumnKey?: string;
    searchInputPlaceholder?: string;
    manualSearch?: boolean;
  };
  pagination?: {
    manualPagination?: boolean;
    pageSize?: number;
    pageIndex?: number;
    totalPages?: number;
  };
}

export function DataTable<TData, TValue>({
  columns,
  data,
  search,
  pagination,
}: Props<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const tableState: Partial<TableState> = {
    sorting,
    columnFilters,
    columnVisibility,
  };

  if (pagination?.manualPagination) {
    const { totalPages, pageIndex } = pagination;
    if (totalPages == null || pageIndex == null) {
      throw new Error(
        "Both totalPages and pageIndex must be provided when using manual pagination."
      );
    }
    tableState.pagination = {
      pageIndex,
      pageSize: pagination.pageSize ?? 20,
    };
  }

  if (search?.autoSearch) {
    if (search.autoSearchColumnKey == null) {
      throw new Error("autoSearchColumnKey must be provided when using auto search.");
    }
    if (!columns.find((column) => column.id === search.autoSearchColumnKey)) {
      throw new Error("autoSearchColumnKey must be a valid column key.");
    }
  }

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    manualPagination: pagination?.manualPagination,
    pageCount: pagination?.totalPages,
    state: tableState,
  });

  return (
    <div>
      <div className="flex items-center py-4">
        <DataTableAutoSearchInput
          table={table}
          columnKey={String(search?.autoSearchColumnKey)}
          placeholder={search?.searchInputPlaceholder}
          visible={Boolean(search?.autoSearch)}
        />
        <DataTableManualSearchInput
          visible={Boolean(search?.manualSearch)}
          placeholder={search?.searchInputPlaceholder}
        />
        <DataTableColumnVisibilityToggle table={table} />
      </div>
      <div className="rounded-md border border-secondary">
        <Table>
          <TableHeader className="bg-secondary">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border border-secondary">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border border-secondary"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="my-4" />
      <DataTableAutoPagination table={table} visible={!pagination?.manualPagination} />
      <DataTableManualPagination table={table} visible={pagination?.manualPagination} />
    </div>
  );
}
