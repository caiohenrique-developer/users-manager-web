import type { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "iconsax-reactjs";
import { ArrowUpDown } from "lucide-react";

import { useColumnsModel } from "@/components/TableList/Columns/Columns.model";
import type { User } from "@/components/TableList/Columns/Columns.type";
import { Button } from "@/components/ui/button";

const columns: ColumnDef<User>[] = [
	{
		accessorKey: "name",
		header: "Nome",
		cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
	},
	{
		accessorKey: "email",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					E-mail
					<ArrowUpDown />
				</Button>
			);
		},
		cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
	},
	{
		accessorKey: "formattedRole",
		header: "Perfil",
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue("formattedRole")}</div>
		),
	},
	{
		id: "edit",
		enableHiding: true,
		header: "Editar",
		cell: ({ row }) => {
			const { handleEditUser } = useColumnsModel();
			const { id, name, email, role } = row.original;

			return (
				<Button
					variant="outline"
					onClick={() => handleEditUser({ id, name, email, role })}
					className="border-orange-300"
				>
					<Edit variant="Bulk" className="size-5 text-orange-400" />
				</Button>
			);
		},
	},
	{
		id: "remove",
		enableHiding: true,
		header: "Remover",
		cell: ({ row }) => {
			const { id } = row.original;
			const { handleRemoveUser } = useColumnsModel();

			return (
				<Button
					variant="outline"
					onClick={() => handleRemoveUser(id)}
					className="border-red-300"
				>
					<Trash variant="Bulk" className="size-5 text-red-400" />
				</Button>
			);
		},
	},
];

export { columns };
