import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { Crown, User } from "iconsax-reactjs";

import { useAuthenticatedPageHeaderModel } from "@/components/Auth/AuthenticatedPageHeader/AuthenticatedPageHeader.model";

export function AuthenticatedPageHeader() {
	const { isUser, userName } = useAuthenticatedPageHeaderModel();

	return (
		<header className="flex justify-between mb-10">
			<h1 className="text-2xl font-semibold">Olá {userName} 👋,</h1>

			<div className="flex items-center gap-2">
				{isUser ? (
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger className="cursor-auto">
								<User className="text-gray-700 size-10 bg-white p-2 rounded-full" />
							</TooltipTrigger>
							<TooltipContent>
								<p>Painel do usuário</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				) : (
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger className="cursor-auto">
								<Crown className="text-gray-700 size-10 bg-white p-2 rounded-full" />
							</TooltipTrigger>
							<TooltipContent>
								<p>Painel administrativo</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				)}
			</div>
		</header>
	);
}
