import { Link } from "react-router-dom";

import logoFacebook from "@/assets/logo-facebook.svg";
import logoGoogle from "@/assets/logo-google.svg";
import { Button } from "@/components/ui/button";

export function LoginPageFooter() {
	return (
		<footer className="grid gap-8">
			<p className="text-gray-50 mt-[24px]">
				Link para o código fonte:
				<Link
					to="/#"
					target="_blank"
					rel="noreferrer"
					className="relative inline-block font-bold ml-2.5 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-purple after:transition-all after:duration-300 hover:after:w-full"
				>
					💻 caiohenrique-developer
				</Link>
			</p>

			<div className="flex gap-4 justify-center">
				<Button
					disabled
					variant="secondary"
					className="w-[72px] h-[35px] py-5 disabled:bg-white disabled:cursor-not-allowed disabled:pointer-events-auto"
				>
					<i>
						<img src={logoGoogle} alt="Logotipo do Google" />
					</i>
				</Button>
				<Button
					disabled
					variant="secondary"
					className="w-[72px] h-[35px] py-5 disabled:bg-white disabled:cursor-not-allowed disabled:pointer-events-auto"
				>
					<i>
						<img src={logoFacebook} alt="Logotipo do Facebook" />
					</i>
				</Button>
			</div>
		</footer>
	);
}
