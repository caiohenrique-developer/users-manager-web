import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { UserForm } from "@/components/UserForm";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTitle,
} from "@/components/ui/dialog";
import { useUserStore } from "@/stores/userStore";

export function DialogComponent() {
	const { open, setOpen } = useUserStore();

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="sm:max-w-[425px]">
				<UserForm />

				<VisuallyHidden>
					<DialogTitle />
					<DialogDescription />
				</VisuallyHidden>
			</DialogContent>
		</Dialog>
	);
}
