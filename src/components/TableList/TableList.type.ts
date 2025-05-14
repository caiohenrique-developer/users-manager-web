import type { ColumnDef } from "@tanstack/react-table";

export interface TableListProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data?: TData[];
}
