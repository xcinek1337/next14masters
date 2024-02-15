import Link from "next/link";
import { Navigation } from "@/ui/molecules/Navigation";

export const Header = () => {
	return (
		<header className="border-b-2 border-b-emerald-800 bg-gray-50">
			<nav className="mx-auto flex max-w-md items-center justify-between p-12 sm:max-w-2xl  sm:py-5 md:max-w-4xl lg:max-w-7xl">
				<Link className="flex items-end text-lg font-semibold text-emerald-700" href={"/"}>
					<img className="mr-2" src="/logo.svg" alt="logo" />
					<span>Badyl.com</span>
				</Link>
				<Navigation />
			</nav>
		</header>
	);
};
