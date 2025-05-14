import type * as React from "react";

import { useAppSidebar } from "@/components/AppSidebar/AppSidebar.model";
import { NavItems } from "@/components/NavItems";
import { NavUser } from "@/components/NavUser";
import { TeamSwitcher } from "@/components/TeamSwitcher";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const { menuItemList } = useAppSidebar();

	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader className="bg-white py-10 px-2.5">
				<TeamSwitcher />
			</SidebarHeader>

			<SidebarContent className="bg-white py-4 px-2.5">
				<NavItems menuItemList={menuItemList} />
			</SidebarContent>

			<SidebarFooter className="bg-white py-10 px-2.5">
				<NavUser />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
