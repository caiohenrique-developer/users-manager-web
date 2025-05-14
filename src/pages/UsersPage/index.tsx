import { AuthenticatedPageLayout } from "@/Layouts/AuthenticatedLayout";
import { DialogComponent } from "@/components/DialogComponent";
import { TableList } from "@/components/TableList";
import { columns } from "@/components/TableList/Columns";
import { UsersListStats } from "@/components/UsersListStats";
import { useUsersPageModel } from "@/pages/UsersPage/UsersPage.model";

export function UsersPage() {
	const { usersCount, users } = useUsersPageModel();

	return (
		<AuthenticatedPageLayout>
			<div className="grid grid-rows-[auto_1fr] gap-10 h-full">
				<UsersListStats usersCount={usersCount} />
				<TableList columns={columns} data={users} />
				<DialogComponent />
			</div>
		</AuthenticatedPageLayout>
	);
}
