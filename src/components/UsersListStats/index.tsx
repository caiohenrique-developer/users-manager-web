import { Profile2User, ProfileTick } from "iconsax-reactjs";

import type { UsersListStatsProps } from "@/components/UsersListStats/UsersListStats.type";
import { Separator } from "@/components/ui/separator";

export function UsersListStats({
	usersCount: { userTotal, adminTotal },
}: UsersListStatsProps) {
	return (
		<div className="flex items-center justify-center bg-white rounded-[30px] py-8 px-12">
			<div className="flex items-center gap-5">
				<div className="p-5 rounded-full bg-gradient-to-b from-green-100 to-green-50">
					<Profile2User variant="Bulk" className="text-green-200 size-11" />
				</div>
				<div className="grid">
					<span className="text-gray-400 text-sm">Total de usuários</span>
					<strong className="text-[32px] text-gray-800 font-semibold">
						{userTotal || "--"}
					</strong>
				</div>
			</div>
			<Separator orientation="vertical" className="!h-25 !bg-gray-100 mx-14" />
			<div className="flex items-center gap-5">
				<div className="p-5 rounded-full bg-gradient-to-b from-green-100 to-green-50">
					<ProfileTick variant="Bulk" className="text-green-200 size-11" />
				</div>
				<div className="grid">
					<span className="text-gray-400 text-sm">
						Total de administradores
					</span>
					<strong className="text-[32px] text-gray-800 font-semibold">
						{adminTotal || "--"}
					</strong>
				</div>
			</div>
		</div>
	);
}
